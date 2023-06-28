import React from 'react'
import {RiPriceTag2Line} from 'react-icons/ri'
import './Price.css'
import { useNavigate } from 'react-router-dom'

const Price = () => {
    const Navigate = useNavigate();
    const handleHome = () =>{
        Navigate('/')
    }
  return (
    <header className="header_price">
        <div className="svg">
            <RiPriceTag2Line size={200}></RiPriceTag2Line>
            <p className='p'>Price tags and Domains would become enabled after 3months of free trial has expired.</p>
            <button className='button' onClick={handleHome}>Back to home</button>
        </div>
    </header>
  )
}

export default Price