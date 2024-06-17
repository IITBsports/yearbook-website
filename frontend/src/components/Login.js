//src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.endsWith('@iitb.ac.in')) {
      setError('Email must be in the format __@iitb.ac.in');
      return;
    }
    try {
      const response = await axios.post('/api/login', { email, password });
      setError('');
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(response.data));
      navigate('/home');
    } catch (error) {
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className='login-register'>
      <div class="stylish box-01">
	        <h2 class="effect-01">Yearbook</h2>
          <div className="eleven"><h1>IIT Bombay Sports Yearbook 2024</h1></div>
      </div>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/register')}>
        New? Register Here
      </button>
    </div>
    </div>
  );
};

export default Login;
