const express = require('express');
const db = require('./config/db');

const userRoutes = require('./routes/user');

const User = require('./schema/user');
const Blog = require('./schema/blog');

const app = express();

User.hasMany(Blog, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
});

app.use(express.json());


app.use('/user', userRoutes);

app.use('/', (req, res)=> {
    res.send('Hello world');
});

db
// .sync({force:true})
.sync()
.then(()=> {
    app.listen(3000);
})
.catch((err)=> {
    console.error(err);
})
