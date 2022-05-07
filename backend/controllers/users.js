const db = require('../util/database');
const User = require('../models/user');
const Sequelize = require('sequelize');

const bcrypt = require('bcrypt');
const jsonToken = require('jsonwebtoken');
const UserFriend = require('../models/user-friend');

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const latitude = 0.0;
    const longitude = 0.0;

    User.findOne({
            where: Sequelize.or({
                email: email
            }, {
                username: username
            })
        })
        .then((result) => {
            if (result) {
                let type = result.email === email ? 'email' : 'username';
                const err = new Error(`User with this ${type} already exists !`);
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
                latitude: latitude,
                longitude: longitude,
            });
            return user;
        })
        .then(() => {
            res.status(201).json({
                msg: `Account created succesfully!`
            });
        })
        .catch((err) => next(err));;
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    let user;

    User.findOne({ where: { email: email } })
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

            const token = jsonToken.sign({ email: user.email, nickname: user.nickname },
                'supersecretkey', {
                    expiresIn: '1h'
                }
            );

            res.status(200).json({
                token: token,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                id: user.id
            });
        })
        .catch((err) => next(err));
};

exports.addPoints = (req, res, next) => {
    const id = req.body.id;
    let points = parseInt(req.body.points);
    const pointsToAdd = points;

    User.findOne({ where: { id: id } })
        .then((result) => {
            points = points + parseInt(result.score);
            User.update({ score: points }, { where: { id: id } })
                .then((result2) => {
                    res.status(201).json({
                        msg: `Added ${pointsToAdd} points to user.`
                    });
                })
                .catch((err) => next(err));
        })
        .catch((err) => next(err));
};

exports.findByUsername = (req, res, next) => {
    const username = req.params.username;

    User.findOne({ where: { username: username } })
        .then((result) => {
            res.status(200).json({
                user: result,
            })
        })
        .catch(err => next(err));
}

exports.getLeaderboard = (req, res, next) => {
    User.findAndCountAll({
            order: [
                ["score", "DESC"]
            ],
            limit: 10,
            offset: 0,
        })
        .then(result => {
            res.status(200).json({
                leaderboard: result,
            })
        })
        .catch(err => next(err));
}

exports.getLeaderboardFriends = (req, res, next) => {
    const id_from = req.params.id_from;
    const arr = [];

    UserFriend.findAll({ where: { id_from: id_from } })
        .then((result) => {
            result.forEach((item, index) => {
                const id = item.dataValues.id_to;
                arr.push(
                    User.findOne({ where: { id: id } })
                );
            })

            Promise.all(arr)
                .then((result2) => {
                    result2.sort((a, b) => a.score < b.score)

                    res.status(200).json({
                        users: result2,
                    })
                })
                .catch(err => next(err));
        })
        .catch((err) => next(err));
}