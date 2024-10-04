require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle contact form submission
app.post('/send-email', (req, res) => {
  const { email, message, isAnonymous } = req.body;

  // Validate email and message
  if (!isAnonymous && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!message.trim()) {
    return res.status(400).json({ error: 'Please enter a message.' });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for user
      pass: process.env.EMAIL_PASS  // Use environment variable for password
    }
  });

  // Email options
  const mailOptions = {
    from: email || process.env.EMAIL_USER, // Use sender's email or default
    to: process.env.RECIPIENT_EMAIL,       // Use environment variable for recipient email
    subject: 'Contact Form Submission',
    text: message
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to send message.' });
    }
    console.log('Message sent: %s', info.messageId);
    res.json({ message: 'Message sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
