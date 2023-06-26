const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { email, qrCodeURL } = req.body;

  // Create a transporter for your email service provider
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'QR Code',
    text: 'Please find the QR code attached.',
    attachments: [
      {
        filename: 'qrcode.png',
        path: qrCodeURL,
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
