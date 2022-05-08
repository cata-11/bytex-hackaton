const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./user');
const Event = require('./event');

const Notification = db.define(
    'notifications', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },

        id_from: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            references: {
                model: User,
                key: "id",
            },
        },

        id_to: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            references: {
                model: User,
                key: "id",
            },
        },

        event_id: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: Event,
                key: "id",
            }
        },

        is_new: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
    }, {
        timestamps: false,
    }
);

module.exports = Notification;