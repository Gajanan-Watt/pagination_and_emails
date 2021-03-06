const nodemailer = require("nodemailer");


require("dotenv").config();
//console.log(process.env);
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_DEVELOPMENT_USERNAME,
      pass: process.env.SMTP_DEVELOPMENT_PASSWORD,
    },
  });