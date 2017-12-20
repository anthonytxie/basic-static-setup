const express = require('express');
const publicPath = __dirname + '/../public'

const app = express();
app.use(express.static(publicPath));

//Middleware


module.exports = app;