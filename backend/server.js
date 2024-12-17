const express = require('express');
const node_server = express();
const dotenv = require('dotenv');
dotenv.config();

node_server.listen(process.env.PORT, () => {
  console.log(`Server start with localhost:${process.env.PORT} and ${process.env.NODE_ENV}`);
});