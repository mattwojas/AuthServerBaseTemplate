// main start point of app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth')

// app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // create server that can receipve requests, forward it to our express app
server.listen(port);
console.log('server listening on ', port);
