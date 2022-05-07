const db = require('../util/database');
const User = require('../models/user');

const bcrypt = require('bcrypt');
const jsonToken = require('jsonwebtoken');

exports.signup = (req, res, next) => {};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log('login');

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
        .json({ token: token, nickname: user.nickname, email: user.email });
    })
    .catch((err) => next(err));
};
