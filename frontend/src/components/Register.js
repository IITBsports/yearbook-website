//src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email.endsWith('@iitb.ac.in')) {
      setError('Email must be in the format __@iitb.ac.in');
      return;
    }
    try {
      const response = await axios.post('/api/register', { name, email, password });
      setSuccess(response.data.message);
      setError('');
      // Redirect to login page after 2 seconds
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setError('Error registering user');
      setSuccess('');
    }
  };

  return (
    <div className='login-register'>
      <div class="stylish box-01">
	        <h2 class="effect-01">Yearbook</h2>
          <div className="eleven"><h1>IIT Bombay Sports Yearbook 2024</h1></div>
      </div>
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        {success && <p className="success">{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
