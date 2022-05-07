const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./user')

const Event = db.define(
    "events", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        latitude: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        longitude: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }, {
        timestamps: false,
    }
);

module.exports = Event;