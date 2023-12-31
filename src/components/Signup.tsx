import { useNavigate} from 'react-router-dom'
import { initializeApp} from 'firebase/app';
import "firebase/auth";
import {getAuth, createUserWithEmailAndPassword, AuthErrorCodes, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import './Signup.css'
import 'firebase/auth'
import { config } from '../config/config';
import { UserCredential } from 'firebase/auth';
import React, { useState } from 'react';


initializeApp(config.firebaseConfig);

interface SignupProps { 
    onSignUP: () => void;
}
const Signup: React.FC<SignupProps> = ({onSignUP}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true)

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        if (password === confirmPassword) {
            // Passwords match, proceed with signup logic
            console.log('Signup successful!');

            try{
                const auth = getAuth()
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/dashboard");
                onSignUP();
            } catch(error){
                const errorCode = (error as { code: string }).code;
    
                if(errorCode === AuthErrorCodes.EMAIL_EXISTS){
                    setError("The email already in use.");;
                } else{
                    console.error(`An Error occured: ${error}`)
                }
            }
        } else {
            // Passwords do not match
            setPasswordMatch(false);
        }
    };

    const handleGoogleSignup = async () => {
        try {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
    
          await signInWithRedirect(auth, provider);
          // Note: The redirection to Google sign-in page will happen automatically after this call.
    
    
        } catch (error) {
          setError('An error occurred during sign-up with Google.');
          console.error(error);
        }
      };
    
    
    const Navigate = useNavigate();
    const handleclick = ()=>{
        Navigate('/login')
    }
   
  return (
    <section className='section'>
        <main className="signup-box">
            <h2>Welcome!!!</h2>

            <form onSubmit={handleSignup}>
                <input type="text" className = 'input' placeholder='name' />
                <input type="password" className = 'input' placeholder='password' value={password} onChange={(event)=> setPassword(event.target.value)}/>
                <input type="password" className = 'input' placeholder='confirm password' value={confirmPassword} onChange={(event)=> setConfirmPassword(event.target.value)} />
                <input type = 'email' className = 'input' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Email'/>


                {!passwordMatch && <p className='err'>Passwords do not match!</p>}
                {error && <p className='err'>{error}</p>}
                <input type="submit" className = 'confirm' value="Confirm"/>
                    
            </form>
            <p className='oldAcc'>Already have an account? <button className='login2' onClick={handleclick}>login</button></p>
        </main>
        
        <button className="google-signin-button" onClick={handleGoogleSignup}>
            Sign Up with Google
        </button>
        

        
    </section>
  )
}

export default Signup