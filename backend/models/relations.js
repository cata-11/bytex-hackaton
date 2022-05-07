const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./user');
const Event = require('./event');

const extraSetup = () => {
    User.belongsToMany(Event, { through: "users_events" });
    Event.belongsToMany(User, { through: "users_events" });
}

module.exports = { extraSetup };