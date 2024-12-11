const express = require('express');
const NODE_SERVER = express();
const dotenv = require('dotenv');
dotenv.config();

/* appp server */
const APP_SERVER = require('./app');
NODE_SERVER.use('/', APP_SERVER);

NODE_SERVER.listen(process.env.PORT, () => console.log(`Server start with localhost:${process.env.PORT} and ${process.env.NODE_ENV}`));