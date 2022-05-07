const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./user');
const Event = require('./event');

const UserEvent = db.define(
    'users_events', {
        user_id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            references: {
                model: User,
                key: "id",
            },
        },

        event_id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            references: {
                model: Event,
                key: "id",
            }
        },
    }, {
        timestamps: false,
    }
)

module.exports = UserEvent;