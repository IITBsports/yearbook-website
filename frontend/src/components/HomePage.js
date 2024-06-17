//src/components/HomePage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
    }
  }, []);

  return (
    <div className='bg'>
    <div class="stylish box-01">
        <h2 class="effect-01">Welcome to Yearbook!</h2>
        <div className="eleven"><h1>Welcome, {name} ({email})!</h1>
        </div>
          </div>
      <Link to="/fill-memory">
        <button>Fill a Memory</button>
      </Link>
    </div>
  );
};

export default HomePage;




