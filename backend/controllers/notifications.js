const Sequelize = require('sequelize');
const db = require('../util/database');

const Notification = require('../models/notification');
const User = require('../models/user');
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

    Notification.findAll({ where: { id_to: id_to } })
        .then(result => {
            res.status(201).json({
                notifications: result,
            });
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