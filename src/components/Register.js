import React, { useState } from 'react';
import './style.css';
import RegImg from '../Images/RegImg.png';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const handleLoginButtonClick1 = () => {
    navigate('/login');
  };

  const [username, setUsername] = useState('');
  const [email, SetUserEmail] = useState('');
  const [url, setUserUrl] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isValid, setIsValid] = useState(false);


  const handleNameChange = (event) => {
    const newName = event.target.value;
    setUsername(newName);
    updateValidity(newName, email, url, password, confirmPassword);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    SetUserEmail(newEmail);
    updateValidity(username, newEmail, url, password, confirmPassword);
  };

  const handleUrlChange = (event) => {
    const newUrl = event.target.value;
    setUserUrl(newUrl);
    updateValidity(username, email, newUrl, password, confirmPassword);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    updateValidity(username, email, url, newPassword, confirmPassword);
  };


  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setconfirmPassword(newConfirmPassword);
    updateValidity(username, email, url, password, newConfirmPassword);
  };

  const updateValidity = (name, email, url, password, confirmPassword) => {
    setIsValid(name.trim() !== '' && email.trim() !== '' && url.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '');
  };

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Allows letters, numbers, and underscores, 3-20 characters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Requires 8 characters, at least one digit, one lowercase, and one uppercase letter

  let userArray = JSON.parse(localStorage.getItem('userArray')) || [];

  // const userList=[];
  const handleRegister = () => {
    // Validate the form data
    if (usernameRegex.test(username) && emailRegex.test(email) && passwordRegex.test(password)) {
      // Data is valid

      // Store the data in localStorage or perform other actions
      const userData = {
        username,
        email,
        password,
      };

      userArray.push(userData);
      localStorage.setItem('userArray', JSON.stringify(userArray));
      // const jsonString = JSON.stringify(userData);
      // localStorage.setItem('userList', jsonString);
      setSuccessMessage('Registration successful');
      navigate('/login');
      console.log('Data successfully stored in localStorage.');
    } else {
      // Data did not pass validation
      console.error('Please check your input for each field:');
      if (!usernameRegex.test(username)) {
        console.error('Username must be 3-20 characters and can only contain letters, numbers, and underscores.');
      }
      if (!emailRegex.test(email)) {
        console.error('Invalid email address.');
      }
      if (!passwordRegex.test(password)) {
        console.error('Password must be at least 8 characters and contain at least one digit, one lowercase, and one uppercase letter.');
      }
    }
  }



  // const handleRegister = () => {
  //   const newUser = {
  //     email,
  //     password,
  //   };
  //   localStorage.setItem(email, JSON.stringify(newUser));
  //   setSuccessMessage('Registration successful');
  // };




  return (
    <div className='account-page'>
      <div className='image-cls'>
        <img src={RegImg} alt="wallPaper"></img>
        <p className='text-left'>SkillupAfrica Blog</p>
        <p className='text1-bottom'>The Ancient city of Rome and the history of the great city.</p>
        <p className='text2-bottom'>Olive Junior</p>
        <p className='text3-bottom'>Lead Writer, SkillupAfrica</p>
      </div>
      <div className='form-cls'>
        <h2>Create an Account</h2>
        <p>Let’s start a journey to great articles</p>
        <form>
          {/* <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='email'
            placeholder='EmailAddress'
            pattern='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i'
            value={email}
            required
            onChange={(e) => SetUserEmail(e.target.value)}
          />
          <input
            type='url'
            placeholder='Add LinkedIn Url'
            value={url}
            onChange={(e) => setUserUrl(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            minlength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={confirmPassword}
            minlength="8"
            required
            onChange={(e) => setconfirmPassword(e.target.value)}
          /> */}

          <input
            type="text"
            id='username'
            placeholder="Username"
            value={username}
            onChange={handleNameChange}
            required
          />
          <input
            type='email'
            id='email'
            placeholder='EmailAddress'
            value={email}
            onChange={handleEmailChange}
            required
          />
          {/* {!isEmailValid && <p style={{ color: 'red' }}>{emailError}</p>} */}
          <input
            type='url'
            placeholder='Add LinkedIn Url'
            value={url}
            onChange={handleUrlChange}
          />
          <input
            type="password"
            placeholder="Password"
            id='password'
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={handlePasswordChange}
            required
          />

          <input
            type="password"
            id='password'
            placeholder="ConfirmPassword"
            value={confirmPassword}
            // minlength="8"
            onChange={handleConfirmPasswordChange}
            required
          />


          <button onClick={handleRegister} disabled={!isValid}>Create on Account</button>
          {successMessage && <p>{successMessage}</p>}
          <button>sign in with google</button>
          <div>
            <span>Already have on account?</span>
            <button onClick={handleLoginButtonClick1}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
