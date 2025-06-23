// backend/utils/emailservice.js
const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yogathing0@gmail.com",
      pass: "wdsb uccs xjgm rkrk", // Use Gmail App Password, not your normal password
    },
  });

  const mailOptions = {
    from: "yogathing0@gmail.com",
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail; // Export function directly
