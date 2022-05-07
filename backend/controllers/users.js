const db = require('../util/database');
const User = require('../models/user');

const bcrypt = require('bcrypt');
const jsonToken = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;

  User.findOne({ where: { email: email } })
    .then((result) => {
      if (result) {
        const err = new Error('User with this email already exists !');
        err.statusCode = 409;
        throw err;
      }
      return bcrypt.hash(password, 12);
    })
    .then((result) => {
      const user = User.create({
        email: email,
        password: result,
        firstname: firstname,
        lastname: lastname,
        username: username
      });
      return user;
    })
    .then((rr) => {
      res.status(201).json({
        msg: `Account created succesfully!`
      });
    })
    .catch((err) => next(err));
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let user;

  User.findOne({ email: email })
    .then((result) => {
      if (!result) {
        const err = new Error('User with such email not found.');
        err.statusCode = 404;
        throw err;
      }
      user = result;
      return bcrypt.compare(password, result.password);
    })
    .then((result) => {
      if (!result) {
        const err = new Error('Wrong password.');
        err.statusCode = 404;
        throw err;
      }

      const token = jsonToken.sign(
        { email: user.email, nickname: user.nickname },
        'supersecretkey',
        {
          expiresIn: '1h'
        }
      );

      res
        .status(200)
        .json({
          token: token,
          nickname: user.username,
          email: user.email,
          id: user.id
        });
    })
    .catch((err) => next(err));
};
