import React, { useState } from 'react';
// import './Qr.css';
import QRCode from 'qrcode';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const generateQRCode = async () => {
    try {
      const imageData = await QRCode.toDataURL(text);
      setQRCodeImage(imageData);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div className='QR_wrapper'>
      <div className="Qr_inputWrapper">
      <h1 className="QR_h1">Place your Shortened Link and generate a Unique QR code</h1>
        <input
          type="text"
          value={text}
          className='Qr_input'
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter URL"
        />
        <button className='Qr_inputWrapperBtn' onClick={generateQRCode}>Generate QR Code</button>
        {qrCodeImage && (
          <img src={qrCodeImage} alt="QR Code" />
        )}

      </div>
    </div>
  );
}

export default QRCodeGenerator;
