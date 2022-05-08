const db = require('../util/database');
const Event = require('../models/event');

exports.createEvent = (req, res, next) => {
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date = req.body.date;

    Event.create({
            name: name,
            latitude: latitude,
            longitude: longitude,
            date: date,
        })
        .then((result) => {
            res.status(201).json({
                msg: `Event ${name} added successfully!`
            });
        })
        .catch((err) => next(err));
}

exports.findAll = (req, res, next) => {
    Event.findAll()
        .then((result) => {
            res.status(200).json({
                events: result
            });
        })
        .catch((err) => next(err));
}

exports.findByName = (req, res, next) => {
    const name = req.params.name;

    Event.findOne({ where: { name: name } })
        .then((result) => {
            res.status(200).json({
                event: result
            });
        })
        .catch((err) => next(err));
}

exports.findById = (req, res, next) => {
    const id = req.params.id;

    Event.findOne({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                event: result
            });
        })
        .catch((err) => next(err));
}

exports.addUserToEvent = (req, res, next) => {
    const user_id = req.params.user_id;
    const event_id = req.params.event_id;

    Event.Upda
}