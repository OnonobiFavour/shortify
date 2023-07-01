import { useNavigate} from 'react-router-dom'
import { initializeApp} from 'firebase/app';
import "firebase/auth";
import {getAuth, createUserWithEmailAndPassword, AuthErrorCodes,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import './Signup.css'
import 'firebase/auth'
import { config } from '../config/config';
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
                // const errorCode = error as FirebaseError;
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
    
          const userCredential = await signInWithPopup(auth, provider);
          const user = userCredential.user;
    
          if (user) {
            console.log('Sign-up with Google successful!');
            navigate('/dashboard');
          }
        } catch (error) {
          setError('An error occurred during sign-up with Google.');
          console.error(error);
        }
    };

    const Navigate = useNavigate();
    const handleclick = ()=>{
        Navigate('/login')
    }
    // const dashboard=()=>{
    //     Navigate('/Dashboard')
    // }
  return (
    <section className='section'>
        <main className="signup-box">
            <h2>Welcome!!!</h2>

            <form onSubmit={handleSignup}>
                <input type="text" className = 'input' placeholder='name' />
                <input type="password" className = 'input' placeholder='password' value={password} onChange={(event)=> setPassword(event.target.value)}/>
                <input type="password" className = 'input' placeholder='confirm password' value={confirmPassword} onChange={(event)=> setConfirmPassword(event.target.value)} />
                <input type = 'email' className = 'input' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='email or phone'/>


                {!passwordMatch && <p className='err'>Passwords do not match!</p>}
                {error && <p className='err'>{error}</p>}
                <input type="submit" className = 'confirm' value="Confirm"/>
                <button className="google-signup" onClick={handleGoogleSignup}>
                    Sign Up with Google
                </button>
                    
            </form>
        </main>
        
        <p className='oldAcc'>Already have an account? <button className='login2' onClick={handleclick}>login</button></p>

        
    </section>
  )
}

export default Signup