const bcrypt = require('bcrypt');
const jsonToken = require('jsonwebtoken');

const db = require('../util/database');

const User = require('../models/user');

exports.signup = async(req, res, next) => {
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
                username: username,
            })
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

    // bcrypt.compare(password, result.password);

    // const token = jsonToken.sign({
    //     // id ...
    // })

    //    .catch((err) => next(err));

    console.log('login');
};