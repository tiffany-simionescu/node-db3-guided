const express = require('express');
const helmet = require('helmet');

const userRouter = require('./users/user-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/users', userRouter);

module.exports = server;
