import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { config } from '../config/config';

initializeApp(config.firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user && user.emailVerified) {
        alert(`Hey ${user.email}, you are logged in!`);
        navigate('/dashboard');
      } else {
        setErrorMessage('Your account is not verified. Please verify your email.');
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
      setLoading(false);
      console.error(error);
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <main className="section">
      <div className="signup-box">
        <h2>Welcome Back!!</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="input" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>

      <p>
        Not a member?{' '}
        <button className="login2" onClick={handleSignupClick}>
          Create an Account
        </button>
      </p>
    </main>
  );
};

export default Login;
