// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './components/Register';
import FillFormMemory from './components/FillFormMemory'; // Import the FillMemory component
import ResponseSubmitted from './components/ResponseSubmitted';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/fill-memory" element={<FillFormMemory />} /> {/* Route for FillMemory */}
          <Route path="/" element={<Login />} />
          <Route path="/response-submitted" element={<ResponseSubmitted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
