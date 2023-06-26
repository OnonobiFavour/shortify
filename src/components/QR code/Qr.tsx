import React from 'react'
import GenerateQR from './GenerateQR'
import './QR.css'

const Qr = () => {
  return (
    <section className="QR_wrapper">
        <h1 className="QR_h1">Place your Shortened Link and generate a Unique QR code</h1>
        <GenerateQR />
    </section>
  )
}

export default Qr