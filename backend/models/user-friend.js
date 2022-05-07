const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./user');

const UserFriend = db.define(
    'users_friends', {
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
    }, {
        timestamps: false,
    }
);

module.exports = UserFriend;