const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    },
    dob: {
        type: Sequelize.DATE,
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: 'User'
    }
});

module.exports = User;
