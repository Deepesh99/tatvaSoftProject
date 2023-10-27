const express = require('express');
const { register } = require('../controller/user');

const router = express.Router();

router
// .post('/login',)
.post('/register', register);

module.exports = router;
