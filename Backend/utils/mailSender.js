const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async (email, title, body) => {
  try {
    if (!email) {
      console.log("Receipent email is missing.");
      return;
    }

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT, // Use 587 for TLS
      secure: process.env.MAIL_SECURE, // true for 465 and false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `PVPIT | Pune <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: `<h2>${body}</h2>`,
    });

    return info;
  } catch (error) {
    console.log("Error in mailSender function", error);
  }
};
