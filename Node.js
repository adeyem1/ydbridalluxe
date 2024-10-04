// require('dotenv').config(); // Loads environment variables from .env file

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//   const { email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER, // Use environment variable for Gmail address
//       pass: process.env.EMAIL_PASS  // Use environment variable for Gmail app password
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER, // Send email to yourself or desired recipient
//     subject: 'New Form Submission',
//     text: `Email: ${email}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, error: 'Error sending email' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ success: true });
//     }
//   });
// });

// const PORT = 8000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));