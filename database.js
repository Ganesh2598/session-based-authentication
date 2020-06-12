const Sequelize = require("sequelize");
require("dotenv").config();

const connect = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_DATABASE}`);

const db = {
    connect : connect,
    Sequelize : Sequelize,
    user : require("./modals/user")(connect,Sequelize)
}

module.exports = db;