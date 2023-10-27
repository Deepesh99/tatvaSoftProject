const express = require('express');
const db = require('./config/db');

const app = express();

app.use(express.json());

app.use('/', (req, res)=> {
    res.send('Hello world');
});

db
.sync()
.then(()=> {
    app.listen(3000);
})
.catch((err)=> {
    console.error(err);
})
