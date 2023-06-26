import React, {ChangeEvent, useState } from 'react'
import QRCode from 'qrcode.react';
import axios from 'axios';


const GenerateQR = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  const generateQRCode = () => {
    // Generate the QR code using the inputValue
    // You can customize the QR code size and other options if needed
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;

    // Send the email with the QR code as an attachment
    sendEmail(qrCodeURL);
  };

  const sendEmail = async (qrCodeURL: string) => {
    try {
      // Call your backend API to send the email with the QR code
      await axios.post('/send-email', {
        email: 'user@example.com', // Replace with the user's logged-in email
        qrCodeURL: qrCodeURL,
      });

      // Email sent successfully
      console.log('Email sent');
    } catch (error) {
      // Error sending email
      console.error('Error sending email:', error);
    }
};
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={generateQRCode}>Generate QR Code and Send Email</button>
      {inputValue && <QRCode value={inputValue} />}
    </div>
  )
}

export default GenerateQR