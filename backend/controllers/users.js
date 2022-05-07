// const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonToken = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  // etc.

  //  bcrypt.hash(password, 12)

  /// .catch((err) => next(err));

  console.log('signup');
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // bcrypt.compare(password, result.password);

  // const token = jsonToken.sign({
  //     // id ...
  // })

  //    .catch((err) => next(err));

  console.log('login');
};
