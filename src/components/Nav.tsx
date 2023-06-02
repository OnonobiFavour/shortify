import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleclick = ()=>{
   setClick(!setClick);
  }
  return (
    <div className="nav_bar">
        <span className='log_name'>Shortify</span>
            <div className='links'>
                <li><Link to = {'/'}>Url</Link></li>
                <li><Link to = {''}>Features</Link></li>
                <li><Link to = {''}>Pricing</Link></li>
                <li><Link to = {''}>Analysis</Link></li>
            </div>
          {/*  */}
        <div className='login_nav'>
            <li><Link to = {'/login'}>Log in</Link></li>
            <button className='Nav_btn_1'>Try for free</button>
            <button className='Nav_btn_2'>Try for free</button>
        </div>
        <div className="toggle">
        <button className='bars'>&#9776;</button>
        {/* <button className='bars'>&#9776;</button> */}
        </div>
    </div>
  )
}

export default Nav