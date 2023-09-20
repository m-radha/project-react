// import React, { useState } from 'react';

// function PasswordValidation() {
//   const [password, setPassword] = useState('');
//   const [isPasswordValid, setIsPasswordValid] = useState(true);

//   const handlePasswordChange = (event) => {
//     const newPassword = event.target.value;
//     setPassword(newPassword);
//     validatePassword(newPassword);
//   };

//   const validatePassword = (password) => {
//     const criteria = {
//       minLength: password.length >= 8,
//       uppercase: /[A-Z]/.test(password),
//       lowercase: /[a-z]/.test(password),
//       number: /\d/.test(password),
//       specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
//     };

//     const isValid = Object.values(criteria).every((criterion) => criterion === true);
//     setIsPasswordValid(isValid);
//   };

//   return (
//     <div>
//       <input
//         type="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       {!isPasswordValid && <p className="error" style={{ color: 'red' }}>Password does not meet criteria use one Uppercase,lowercase,special character and number</p>}
//     </div>
//   );
// }

// export default PasswordValidation;


import React, { useState } from 'react';

function Password() {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    const criteria = {
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
    };

    const errors = [];

    if (!criteria.minLength) {
      errors.push('Password must be at least 8 characters long.');
    }
    if (!criteria.uppercase) {
      errors.push('Password must contain at least one uppercase letter.');
    }
    if (!criteria.lowercase) {
      errors.push('Password must contain at least one lowercase letter.');
    }
    if (!criteria.number) {
      errors.push('Password must contain at least one number.');
    }
    if (!criteria.specialChar) {
      errors.push('Password must contain at least one special character.');
    }

    setPasswordErrors(errors);
    setIsPasswordValid(errors.length === 0);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="error-list">
        {!isPasswordValid && (
          <p className="error">Password does not meet criteria:</p>
        )}
        <ul>
          {passwordErrors.map((error, index) => (
            <li key={index} className="error" style={{ color: 'red' }}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Password;


/* REGISTER */

// import React, { useState } from 'react';
// import './style.css';
// import RegImg from '../Images/RegImg.png';
// import { useNavigate } from "react-router-dom";

// const Register = () => {

//   const navigate = useNavigate();

//   const handleLoginButtonClick1 = () => {
//     navigate('/login');
//   };

//   const [username, setUsername] = useState('');
//   const [email, SetUserEmail] = useState('');
//   const [url, setUserUrl] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setconfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isValid, setIsValid] = useState(false);
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const [isPasswordValid, setIsPasswordValid] = useState(true);
//   const [passwordErrors, setPasswordErrors] = useState([]);


//   const handleNameChange = (event) => {
//     const newName = event.target.value;
//     setUsername(newName);
//     updateValidity(newName, email, url, password, confirmPassword);
//   };

//   const handleEmailChange = (event) => {
//     const newEmail = event.target.value;
//     SetUserEmail(newEmail);
//     validateEmail(newEmail);
//     updateValidity(username, newEmail, url, password, confirmPassword);
//   };

//   const validateEmail = (email) => {
//     const isValid = isValidEmail(email);
//     setIsEmailValid(isValid);
//     if (!isValid) {
//       setEmailError('Please enter a valid email address.');
//     } else {
//       setEmailError('');
//     }
//   };

//   const isValidEmail = (email) => {
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailPattern.test(email);
//   };


//   const handleUrlChange = (event) => {
//     const newUrl = event.target.value;
//     setUserUrl(newUrl);
//     updateValidity(username, email, newUrl, password, confirmPassword);
//   };

//   const handlePasswordChange = (event) => {
//     const newPassword = event.target.value;
//     setPassword(newPassword);
//     validatePassword(newPassword);
//     updateValidity(username, email, url, newPassword, confirmPassword);
//   };

//   const validatePassword = (password) => {
//     const criteria = {
//       minLength: password.length >= 8,
//       uppercase: /[A-Z]/.test(password),
//       lowercase: /[a-z]/.test(password),
//       number: /\d/.test(password),
//       specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
//     };

//     const errors = [];

//     if (!criteria.minLength) {
//       errors.push('Password must be at least 8 characters long.');
//     }
//     if (!criteria.uppercase) {
//       errors.push('Password must contain at least one uppercase letter.');
//     }
//     if (!criteria.lowercase) {
//       errors.push('Password must contain at least one lowercase letter.');
//     }
//     if (!criteria.number) {
//       errors.push('Password must contain at least one number.');
//     }
//     if (!criteria.specialChar) {
//       errors.push('Password must contain at least one special character.');
//     }

//     setPasswordErrors(errors);
//     setIsPasswordValid(errors.length === 0);
//   };


//   const handleConfirmPasswordChange = (event) => {
//     const newConfirmPassword = event.target.value;
//     setconfirmPassword(newConfirmPassword);
//     updateValidity(username, email, url, password, setconfirmPassword);
//   };

//   const updateValidity = (name, email, url, password, confirmPassword) => {
//     setIsValid(name.trim() !== '' && email.trim() !== '' && url.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '');
//   };



//   const handleRegister = () => {
//     const newUser = {
//       email,
//       password,
//     };
//     localStorage.setItem(email, JSON.stringify(newUser));
//     setSuccessMessage('Registration successful');
//   };




//   return (
//     <div className='account-page'>
//       <div className='image-cls'>
//         <img src={RegImg} alt="wallPaper"></img>
//         <p className='text-left'>SkillupAfrica Blog</p>
//         <p className='text1-bottom'>The Ancient city of Rome and the history of the great city.</p>
//         <p className='text2-bottom'>Olive Junior</p>
//         <p className='text3-bottom'>Lead Writer, SkillupAfrica</p>
//       </div>
//       <div className='form-cls'>
//         <h2>Create an Account</h2>
//         <p>Let’s start a journey to great articles</p>
//         <form>
//           {/* <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             required
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type='email'
//             placeholder='EmailAddress'
//             pattern='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i'
//             value={email}
//             required
//             onChange={(e) => SetUserEmail(e.target.value)}
//           />
//           <input
//             type='url'
//             placeholder='Add LinkedIn Url'
//             value={url}
//             onChange={(e) => setUserUrl(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             minlength="8"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={confirmPassword}
//             minlength="8"
//             required
//             onChange={(e) => setconfirmPassword(e.target.value)}
//           /> */}

//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type='email'
//             placeholder='EmailAddress'
//             value={email}
//             onChange={handleEmailChange}
//             onBlur={() => validateEmail(email)}
//             required
//           />
//           {!isEmailValid && <p style={{ color: 'red' }}>{emailError}</p>}
//           <input
//             type='url'
//             placeholder='Add LinkedIn Url'
//             value={url}
//             onChange={handleUrlChange}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             // minlength="8"
//             onChange={handlePasswordChange}
//             required
//           />

//           <div className="error-list">
//             {!isPasswordValid && (
//               <p className="error"><b>Password does not meet criteria:</b></p>
//             )}
//             <ul>
//               {passwordErrors.map((error, index) => (
//                 <li key={index} className="error" style={{ color: 'red' }}>{error}</li>
//               ))}
//             </ul>
//           </div>

//           <input
//             type="password"
//             placeholder="ConfirmPassword"
//             value={confirmPassword}
//             minlength="8"
//             onChange={handleConfirmPasswordChange}
//             required
//           />


//           <button onClick={handleRegister} disabled={!isValid}>Create on Account</button>
//           {successMessage && <p>{successMessage}</p>}
//           <button>sign in with google</button>
//           <div>
//             <span>Already have on account?</span>
//             <button onClick={handleLoginButtonClick1}>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Register