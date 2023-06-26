import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import 'firebase/auth'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, UserCredential} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { config } from '../config/config';

initializeApp(config.firebaseConfig);

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [text, setText] = useState('confirm')
  const [loadstate, setLoadstate] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    setLoadstate(true)
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
      
      if (user) {
        // User is logged in and verified
        setErrorMessage('');
      }
    });

    return () => unsubscribe();
  }, []);


  const handleLogin = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    try{
      const auth = getAuth()
      setText('processing')
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

        if (user && user.emailVerified) {
          alert(`Hey ${user.email}, you are logged in!`);
          onLogin();
          Navigate('/dashboard'); // Navigate to the dashboard
        } else {
          setErrorMessage('Your account is not verified. Please verify your email.');
        }

    } catch(error){
      setErrorMessage('Invalid Email or password. Please try again')
      console.error(error);
    }
  }
  

  const handleclick = ()=>{
    Navigate('/SignUP')
  }
  return (
    <main className="section">
      <div className="signup-box">
            <h2>Welcome Back!!</h2>

            <form onSubmit={handleLogin} >
                <input type="text" className = 'input' placeholder='name' value={username} onChange={(event)=>setUsername(event.target.value)} />
                <input type="password" className = 'input'value={password} onChange={(event)=> setPassword(event.target.value)} placeholder='password' />
                <input type = 'email' className = 'input' value={email} onChange={(event)=> setEmail(event.target.value)} placeholder='email or phone'/>
                
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <input type="submit" value={text} className = 'input' />
            </form>
        </div>
        <p>Not a member? <button className='login2' onClick={handleclick}>create an account </button></p>
    </main>
  )
}

export default Login