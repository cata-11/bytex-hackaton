const Sequelize = require('sequelize');
const db = require('../util/database');

const Event = require('./event');

const User = db.define(
    "users", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        firstname: {
            type: Sequelize.STRING,
        },
        lastname: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        score: {
            type: Sequelize.BIGINT,
            defaultValue: 0,
        }
    }, {
        timestamps: false,
    }
);

module.exports = User;