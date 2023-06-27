import React, {ChangeEvent, useState } from 'react'
import QRCode from 'qrcode.react';
import './QR.css'
import axios from 'axios';
import { EmailAuthCredential } from 'firebase/auth';


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
      await axios.post('http://localhost:3001/send-email', {
        email: EmailAuthCredential, 
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
    <div className='_QR_Code'>
      <input type="text" value={inputValue} className= 'Qr_input' onChange={handleInputChange} />
      <button onClick={generateQRCode} className='Generate'>Generate QR Code</button>
      <br />
      {inputValue && <QRCode value={inputValue} />}
    </div>
  )
}

export default GenerateQR