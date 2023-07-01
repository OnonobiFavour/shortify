import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright: {new Date().getFullYear()}</p>
          <ul>
            <li>contact</li>
            <li>Private policy</li>
            <li>About</li>
          </ul>
        <div className="socials">
            <FaFacebook href='' className='icons' size={40}></FaFacebook>
            <FaTwitter className='icons' size={40}></FaTwitter>
            <FaLinkedin className='icons' size={40}></FaLinkedin>
        </div>
    </div>
  )
}

export default Footer