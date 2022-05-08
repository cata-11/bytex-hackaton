const Sequelize = require('sequelize');
const db = require('../util/database');

const Notification = require('../models/notification');
const User = require('../models/user');
const Event = require('../models/event');
const UserFriend = require('../models/user-friend');

exports.createNotif = (req, res, next) => {
    const id_from = req.body.id_from;
    const id_to = req.body.id_to;
    const event_id = req.body.event_id ? req.body.event_id : null;

    Notification.create({
            id_from: id_from,
            id_to: id_to,
            event_id: event_id,
        })
        .then(result => {
            res.status(201).json({
                msg: 'Created notif!',
            });
        })
        .catch((err) => next(err));
};

exports.getNotifsOfUser = (req, res, next) => {
    const id_to = req.params.id_user;
    const arr_users = [];
    const arr_events = [];

    Notification.findAll({ where: { id_to: id_to, is_new: true } })
        .then(result => {
            result.forEach((item, index) => {
                console.log(item.dataValues)
                const id_from = item.dataValues.id_from;
                arr_users.push(
                    User.findOne({ where: { id: id_from } })
                );
            });

            result.forEach((item, index) => {
                if (item.dataValues.event_id == null) {
                    arr_events.push(null);
                } else {
                    const event_id = item.dataValues.event_id;
                    arr_events.push(
                        Event.findOne({ where: { id: event_id } })
                    );
                }
            })

            Promise.all(arr_users)
                .then((result2) => {
                    Promise.all(arr_events)
                        .then((result3) => {
                            res.status(201).json({
                                notifications: result,
                                users: result2,
                                events: result3,
                            });
                        })
                        .catch((err) => next(err));
                })
                .catch((err) => next(err));

        })
        .catch((err) => next(err));
}

exports.setNotifOld = (req, res, next) => {
    const id = req.params.id;

    Notification.update({ is_new: false }, { where: { id: id } })
        .then(result => {
            res.status(205).json({
                msg: "Updated notification.",
            });
        })
        .catch((err) => next(err));
}