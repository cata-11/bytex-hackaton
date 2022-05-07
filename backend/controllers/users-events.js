const db = require('../util/database');
const UserEvent = require('../models/user-event');

const User = require('../models/user');
const Event = require('../models/event');

exports.addUserToEvent = (req, res, next) => {
    const user_id = req.params.user_id;
    const event_id = req.params.event_id;

    UserEvent.create({
            user_id: user_id,
            event_id: event_id,
        })
        .then((result) => {
            res.status(201).json({
                msg: 'Added user to the event!'
            });
        })
        .catch((err) => next(err));
}

exports.findAllForEvent = (req, res, next) => {
    const event_id = req.params.event_id;
    let arr = [];

    UserEvent.findAll({ where: { event_id: event_id } })
        .then((result) => {
            result.forEach((item, index) => {
                const id = item.dataValues.user_id;
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

exports.findAllForUser = (req, res, next) => {
    const user_id = req.params.user_id;
    let arr = [];

    UserEvent.findAll({ where: { user_id: user_id } })
        .then((result) => {
            result.forEach((item, index) => {
                const id = item.dataValues.event_id;
                arr.push(
                    Event.findOne({ where: { id: id } })
                );
            })

            Promise.all(arr)
                .then((result2) => {
                    res.status(200).json({
                        events: result2,
                    })
                })
                .catch(err => next(err));
        })
        .catch((err) => next(err));
}