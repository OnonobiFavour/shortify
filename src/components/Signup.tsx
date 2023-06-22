import { useNavigate} from 'react-router-dom'
import { initializeApp} from 'firebase/app';
import './Signup.css'
import 'firebase/auth'
import { config } from '../config/config';
import React, { useState } from 'react';


initializeApp(config.firebaseConfig);

interface SignupProps {
    onSignUP: () => void;
}
const Signup: React.FC<SignupProps> = ({onSignUP}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            onSignUP();
        } catch(error){
            console.error(error)
        }
    };
    const Navigate = useNavigate();
    const handleclick = ()=>{
        Navigate('/login')
    }
    const dashboard=()=>{
        Navigate('/Dashboard')
    }
  return (
    <section className='section'>
        <form className="signup-box" onSubmit={handleSignup}>
            <h2>Welcome!!!</h2>

            <form action="">
                <input type="text" className = 'input' placeholder='name' />
                <input type="password" className = 'input' placeholder='password' value={password} onChange={(event)=> setPassword(event.target.value)}/>
                <input type="password" className = 'input' placeholder='confirm password' />
                <input type = 'email' className = 'input' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='email or phone'/>

                <input type="button" className = 'input' value="Confirm"/>
            </form>
        </form>
        <p>Already have an account? <button className='login2' onClick={handleclick}>login</button></p>
    </section>
  )
}

export default Signup