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

  const sportsPlayers = {
    'Institute Sports Council': ['Anshul Panwar', 'Himanshu M Singhal', 'Riddhima Channa', 'Arpan Adak', 'Angoth Sai Vidhya', 'Anuj Partani', 'Aryan Aswani', 'Adithyan Rajesh', 'Sakshi Patil', 'Parth Dange', 'Goransh Gattani', 'Mukul Raj', 'Aum Jain', 'Sahil Kumar', 'Satyajeet Machale','Adwait Patwardhan','Param Shah','Snehal Naik','Harsshh Wankhayday','Tushnim Yuvaraj','Subh Verma','Srishti Sharma','Mrunal Lalwani','Atishay Jain','Palak Katiyar','Nandini Chandak','Uditi Malviya','Kaivaly Daga','Ayush Parmar','Kosika Bhanu Prakash','Akhilesh Narayan','Gourav Dhaka','Shubham Sharma','Almaas Ummu Salma','Aditya Wankhade','Pratham Sanghvi','Dhairya Jhunjhunwala'],
    Aquatics: ['Madhav Joshi', 'Mansi Khedekar', 'Onam Tamir', 'Aarushi','Preety','Vineet','Abinash','Rishabh','Palak Katiyar','Ritam Barai'],
    Athletics: ['Kapil Bhagat', 'Mayur Morey','Almaas Ummu Salma', 'Dhairya Jhunjhunwala', 'Angoth Sai Vidhya'],
    Badminton: ['Rupansh Parth','Lokesh Soni','Aanya Verma','Shardul','Darsh Yadav','Akshay Padakanti','Anuj Partani','Jathin','Dyuneesh','Soham','Parshant','Gaurav Dhaka','Aditya Wankhade'],
    Basketball: ['Varun Raipat','Atishay Jain','Aryan Aswani' ,'Mehul Vijay Chanda','Girish Kishore' ,'Sreetam Tripathi','Uditi Malviya','Shruti Singh','Sai Krishna','Mudit Goyal','Bitthal Parida','Aum Jain','Priyanshu Niranjan','Raghav Singhal' ],
    BoardGames: ['Shreyam Mishra', 'Siddhesh Yeram','Harsshh Wankhayday','Mrunal Lalwani','Himanshu M Singhal'],
    Cricket: ['Prashant Jaiswal','Harsh Sapkale','Praharsh Shah','Yashas P R','Kunal Shahdeo','Ashutosh Kumar','Prathmesh Nachankar ','Siddhant Kalel','Bhagat ','Sanket Ambre ','Ayush Parmar','Adhityan','Adwait Patwardhan','Shubh Verma','Divyansh Shukla','Bitthal','Aditya Wankhede','Upendra'],
    Football: ['Manav Doshi', 'Kaustubh Chaurasia','Akhilesh ','Mokshit','Oshim','Adhi saran','Jatin Chaudhary','Shivanshu Kalia','Onam Tamir','Subhojit','Pushpak','Babu','Pratham Sanghvi'],
    Hockey: ['Chaitanya Ramprasad', 'Shubham Shaw','John Paul','Ankit Rathee','Ayush Patil','Nandini Chandak','Anshul Panwar'],
    IndianGames: ['Ashok','Param','Balbir','Chandmal','Kishore','Vinankara','Kiran','Rohinee','Sarika','Sravani','Himani','Snehal','Shubham Sharma'],
    LawnTennis: ['Shubham Shaw', 'Sahil Kumar','Prateek Jha','Aryan Thakur','Shubh Verma','Ayush Raisoni'],
    Sqaush: ['Aneesh Kamat', 'Ruhaan','Rati ','Namrata','Siddhant','Ayush Parmar'],
    TableTennis: ['Riddhima Channa', 'Rishi','Saurabh ','Mitali','Shantanu','Priyam','Kaivaly Daga'],
    Volleyball: ['Nishant', 'Abhigyan', 'Prakhar', 'Siva', 'kumar', 'Anil', 'Kiran', 'Sandeep','Sakshi', 'Pragati', 'Prerna', 'Jigmat', 'Surbhi', 'Garima', 'Navya', 'Mahek', 'Shristi', 'Riyali'],
    Weightlifting: ['Amit Meena','Kosika Bhanu Prakash','Almaas Ummu Salma A A'],
    'Ultimate Frisbee':['Arti Kumar','Kapil Dedhia','Ishika Saini','Almaas Ummu Salma','Suraj Kumar','Karthickeyan V','Kuldeep Sankhat','Harshvardhan Ahirwar','Rujul Bhosale','Shruti Saraf','Dinesh Bomma','Arjun Sadananda','Sakthivel M','Utkarsh Tripathi','Vaibhav Verma','Chhavi','Pranav Adhyapak','Aswin Srivastava','Pooja Verma','Soumya Kedia'],
  };

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
    setSelectedName('');  // Reset selected name when sport changes
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
      await axios.post('https://yearbook-backend-server.onrender.com/api/submit', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };  

  if (submitted) {
    navigate('/response-submitted');
  }

  return (
    <div className="fill-memory-page">
      <div className="fill-memory-left">
        <img src='isc-logo.png' alt='ISC Logo' className='logo' />
        <h2>ISC YEARBOOK</h2>
        <h3>Fill Your Memory</h3>
        <p>Share your experiences and moments!</p>
      </div>
      <div className="fill-memory-right">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sport">Select Sport:</label>
            <select id="sport" value={selectedSport} onChange={handleSportChange} required>
              <option value="">Select</option>
              {Object.keys(sportsPlayers).map((sport) => (
                <option key={sport} value={sport}>{sport}</option>
              ))}
            </select>
          </div>
          {selectedSport && (
            <div className="form-group">
              <label htmlFor="name">Select Name:</label>
              <select id="name" value={selectedName} onChange={handleNameChange} required>
                <option value="">Select</option>
                {sportsPlayers[selectedSport].map((player) => (
                  <option key={player} value={player}>{player}</option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="description">Write about them:</label>
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
    </div>
  );
};

export default FillMemoryForm;
