const { Sequelize } = require('sequelize')

const db = new Sequelize('ecommerce', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db