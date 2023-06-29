import { Link, useNavigate } from 'react-router-dom'
import {CiMenuFries} from 'react-icons/ci'
import { useState } from 'react'
import {TiTimesOutline} from 'react-icons/ti'
import './Nav.css'

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const menuClick = ()=>{
   setMenu(!menu);
  }
  const Navigate = useNavigate();
  const login = () =>{
    Navigate("/Login")
}

  
  return (
    <div className={menu ? 'nav_bar expanded' : 'nav_bar'}>
      <span className='log_name'>Shortify</span>
        <div className='links'>
          <li><Link to = {'/'}>Home</Link></li>
          <li><Link to = {''}>Analysis</Link></li>
          <li><Link to = {'/Pricing'}>Pricing</Link></li>

          <div className='login_nav'>
            <li><Link to = {'/login'}>Log in</Link></li>
            <button className='Nav_btn_1' onClick={login}>Try for free</button>
            <button className='Nav_btn_2' onClick={login}>Try for free</button>
          </div>
        </div>
          <button className='toggle' onClick={menuClick}>
            {menu ? <TiTimesOutline className='fatimes' size={40}></TiTimesOutline> : <CiMenuFries size={30}></CiMenuFries>}
        </button> 
    </div>
  )
}

export default Nav