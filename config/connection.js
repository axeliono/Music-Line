// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// use .env node mdule to reference your Mysql username and password in a file not shared with git
require('dotenv').config();

// create connection to our db
// DB_NAME='music_line_db'
// ^ first line of .env file along with mysql username and PW
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;