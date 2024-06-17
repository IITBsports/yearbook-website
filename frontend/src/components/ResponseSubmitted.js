// components/ResponseSubmitted.js
import React from 'react';
import { Link } from 'react-router-dom';

const ResponseSubmitted = () => {
  return (
    <div className='bg'>
    <div className="response-submitted">
      <h2>Thanks for Submitting!</h2>
      <p>Your response has been submitted successfully.</p>
      <Link to="/home">Submit Another Response</Link>
    </div>
    </div>
  );
};

export default ResponseSubmitted;
