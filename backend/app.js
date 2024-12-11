const express = require('express');
const APP_SERVER = express();

const auth = require('./controllers/authController');
APP_SERVER.use('/api/v1', auth);

module.exports = APP_SERVER;