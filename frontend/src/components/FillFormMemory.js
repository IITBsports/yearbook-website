import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FillMemoryForm = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const userName = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).name : '';
  const userEmail = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).email : '';

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('selectedSport', selectedSport);
    formData.append('selectedName', selectedName);
    formData.append('description', description);
    formData.append('userName', userName);
    formData.append('userEmail', userEmail);
    if (photo) {
      formData.append('photo', photo);
    }
    if (video) {
      formData.append('video', video);
    }
  
    try {
      await axios.post('/api/submit', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };  

  if (submitted) {
    navigate('/response-submitted');
  }

  return (
    <div className="fill-memory-form bg">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sport">Select Sport:</label>
          <select id="sport" value={selectedSport} onChange={handleSportChange} required>
            <option value="">Select</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Select Name:</label>
          <select id="name" value={selectedName} onChange={handleNameChange} required>
            <option value="">Select</option>
            <option value="Raghav">Raghav</option>
            <option value="Bhavin">Bhavin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Write about it:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Add Photo:</label>
          <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <div className="form-group">
          <label htmlFor="video">Add Video:</label>
          <input type="file" id="video" accept="video/*" onChange={handleVideoChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FillMemoryForm;
