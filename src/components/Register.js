import React,{ useState }  from 'react';
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
  const [img, setUserImg] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleRegister = () => {
    const newUser = {
        username,
        password,
    };
    localStorage.setItem(username, JSON.stringify(newUser));
    setSuccessMessage('Registration successful');
};

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
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='email'
            placeholder='EmailAddress'
            value={email}
            onChange={(e) => SetUserEmail(e.target.value)}
          />
          <input
            type='img'
            placeholder='Add Profile picture'
            value={img}
            onChange={(e) => setUserImg(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Create on Account</button>
                {successMessage && <p>{successMessage}</p>}
          <button>sign in with google</button>
          <span>Already have on account?</span>
          <div>
            <button onClick={handleLoginButtonClick1}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
