const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Blog = sequelize.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'Unpublished'
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Blog;