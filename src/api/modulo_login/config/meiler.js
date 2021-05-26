const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
   host: process.env.MEILERHOST,
   port: process.env.MEILERPORT,
   secure: true,
   auth: {
      user: process.env.MEILERUSERNAME,
      pass: process.env.MEILERPASSWORD,
   },
});

module.exports = transporter;
