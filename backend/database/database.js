const Sequelize = require('sequelize');

module.exports = new Sequelize('hackaton-postregs', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
  //   ...
});
