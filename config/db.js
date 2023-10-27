const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('blog','root','root', {
    dialect: 'mysql',
    host: 'localhost'
});

sequelize.authenticate()
.then( ()=> {
    console.log("Database connected!!");
})
.catch((err) => {
    console.error(err);
});

module.exports = sequelize;