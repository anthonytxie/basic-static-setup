const express = require("express");
const publicPath = __dirname + "/../public";

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const path = require("path");

const app = express();
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware

module.exports = app;
