const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./user');
const Event = require('./event');

const extraSetup = () => {
    User.belongsToMany(Event, { through: "users_events" });
    Event.belongsToMany(User, { through: "users_events" });

    User.belongsToMany(User, { through: "users_friends", as: "from", foreignKey: "id" });
    User.belongsToMany(User, { through: "users_friends", as: "to", foreignKey: "id" });
}

module.exports = { extraSetup };