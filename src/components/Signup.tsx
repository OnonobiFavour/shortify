import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './Signup.css'

interface SignupProps{
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}
const Signup: React.FC<SignupProps> = ({setUsername}) => {
    // const [usernameInput, setUsernameInput] = useState("");
    // const [passwordInput, setPasswordInput] = useState("");
    // const history = uesHistory();

    // Prevent default reload
    // const handleSignup = (event: React.FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault();
    //     setUsername(usernameInput);
    //     history.push("/Dashboard")
    // }
    const Navigate = useNavigate();
    const handleclick = ()=>{
        Navigate('/login')
    }
    const dashboard=()=>{
        Navigate('/Dashboard')
    }
  return (
    <section className='section'>
        <div className="signup-box">
            <h2>Welcome!!!</h2>

            <form action="">
                <input type="text" className = 'input' placeholder='name' />
                <input type="password" className = 'input' placeholder='password' />
                <input type="password" className = 'input' placeholder='confirm password' />
                <input type = 'email' className = 'input' placeholder='email or phone'/>

                <input type="button" className = 'input' value="Confirm"  onClick={dashboard}/>
            </form>
        </div>
        <p>Already have an account? <button className='login2' onClick={handleclick}>login</button></p>
    </section>
  )
}

export default Signup