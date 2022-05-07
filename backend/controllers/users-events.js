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
    var users = [];
    var count = 0;

    UserEvent.findAll({ where: { event_id: event_id } })
        .then(async(result) => {
            result.forEach((item, index) => {
                const id = item.dataValues.user_id;
                User.findOne({ where: { id: id } })
                    .then((res) => {
                        users.push(res.dataValues)
                        console.log(res.dataValues)
                    })
                    .catch((err) => {
                        next(err)
                        console.log(err)
                    });
                console.log("asdasd2")
            })

            console.log("asdasd")
            console.log(users);
            return await Promise.all(users)
                // .then(values => {
                //     res.status(200).json({
                //         users: values,
                //     });
                // })
                // .catch(err => next(err));
        })
        .catch((err) => next(err));
}

exports.findAllForUser = (req, res, next) => {
    const user_id = req.params.user_id;

    UserEvent.findAll({ where: { user_id: user_id } })
        .then((result) => {
            console.log(result)

            const events = new Set();
            for (let i = 0; i < result.length; ++i) {
                const id = result[i].dataValues.event_id;
                console.log(id);
                const event = Event.findOne({ where: { id: id } })
                    .then((res) => res)
                    .catch((err) => next(err));
                events.add(event);
            }

            res.status(200).json({
                events: events,
            });
        })
        .catch((err) => next(err));
}