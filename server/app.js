const express = require("express");
const publicPath = __dirname + "/../public";
const easyFilePath = __dirname + "/../public/easy.html";
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const path = require("path");

const app = express();
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get(
  "/.well-known/acme-challenge/-OdRh6mQhDBGCxZFO-LyZ1NL6wg7oM2l6CKxR7hZvoo",
  (req, res) => {
    res.send(
      "-OdRh6mQhDBGCxZFO-LyZ1NL6wg7oM2l6CKxR7hZvoo.60dsXI9WdBiaTK_e3WJrMIv-pzOGHo60UXioUsSnz78"
    );
  }
);

app.post("/contact", (req, res) => {
  console.log(req.body);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.password
      }
    })
  );
  // setup email data with unicode symbols
  let mailOptions = {
    from: req.body.email, // sender address
    to: ["hodlbotcrypto@gmail.com"], // list of receivers
    subject: "Beta Sign-Up", // Subject line
    text: "sent by: " + req.body.email

    // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
  res.redirect("/");
  // res.redirect('/');
});
//Middleware

module.exports = app;
