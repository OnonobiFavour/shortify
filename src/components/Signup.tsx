import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
    const Navigate = useNavigate();
    const handleclick = ()=>{
        Navigate('/login')
    }
  return (
    <section className='section'>
        <div className="signup-box">
            <h2>Welcome!!!</h2>

            <form action="">
                <input type="text" placeholder='name' />
                <input type="password" placeholder='password' />
                <input type = 'email' placeholder='email or phone'/>

                <input type="button" value="Submit" />
            </form>
        </div>
        <p>Already have an account? <button className='login2' onClick={handleclick}>login</button></p>
    </section>
  )
}

export default Signup