const db = require('../util/database');
const UserFriend = require('../models/user-friend');

const User = require('../models/user');

exports.addFriendship = (req, res, next) => {
    const id_from = req.params.id_from;
    const id_to = req.params.id_to;

    UserFriend.create({
            id_from: id_from,
            id_to: id_to,
        })
        .then((result) => {
            res.status(201).json({
                msg: "Added friendship!",
            });
        })
        .catch((err) => next(err));
}

exports.findFriendsOf = (req, res, next) => {
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
                    res.status(200).json({
                        users: result2,
                    })
                })
                .catch(err => next(err));
        })
        .catch((err) => next(err));
}