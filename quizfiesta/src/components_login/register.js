import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    bio: '',
  });
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e); // Print Hello World to the console when the button is pressed

    if (formData.password !== repeatPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/registry/register`, formData);
      console.log(response.data);
      if (response.data.message === 'User registered successfully') {
        alert('Registration successful');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-form">
          <h4>Register Yourself on QuizFiesta</h4>
          <div className="group">
            <label htmlFor="name" className="label">Enter your Name</label>
            <input id="name" value={formData.name} onChange={handleChange} type="text" name="name" className="input" placeholder="Enter your name" />
          </div>
          <div className="group">
            <label htmlFor="username" className="label">Email Address</label>
            <input id="username" value={formData.username} onChange={handleChange} type="text" name="username" className="input" placeholder="Enter your email address" />
          </div>
          <div className="group">
            <label htmlFor="password" className="label">Password</label>
            <input id="password" value={formData.password} onChange={handleChange} type="password" name="password" className="input" placeholder="Create your password" />
          </div>
          <div className="group">
            <label htmlFor="repeat-pass" className="label">Repeat Password</label>
            <input id="repeat-pass" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" className="input" placeholder="Repeat your password" />
          </div>
          <div className="group">
            <label htmlFor="bio" className="label">Tell us about yourself</label>
            <input id="bio" value={formData.bio} onChange={handleChange} type="text" name="bio" className="input" placeholder="Describe yourself" />
          </div>
          <div className="group">
            <input type="submit" className="button" value="Sign Up" />
          </div>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
          <button onClick={() => navigate('/login')} style={{ fontSize: '22px', backgroundColor: 'black', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
            <u>Have an Account!! Login here</u>
          </button>
        </div>
      </p>
    </>
  );
}

export default RegisterForm;
