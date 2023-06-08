import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  
  const Navigate = useNavigate();
  const dashboard = ()=>{
    Navigate('/Dashboard')
  }
  const handleclick = ()=>{
    Navigate('/SignUP')
  }
  return (
    <main className="section">
      <div className="signup-box">
            <h2>Welcome Back!!</h2>

            <form action="">
                <input type="text" className = 'input' placeholder='name' onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" className = 'input' placeholder='password' />
                <input type = 'email' className = 'input' placeholder='email or phone'/>
                
                {
                   
                }

                <input type="button" className = 'input' value="Confirm"  onClick={dashboard}/>
            </form>
        </div>
        <p>Not a member? <button className='login2' onClick={handleclick}>create an account</button></p>
    </main>
  )
}

export default Login