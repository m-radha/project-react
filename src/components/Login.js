import React, { useState } from 'react';
import './style.css';
import LoginImg from '../Images/LoginImg.png';
import { useNavigate } from "react-router-dom";
import GooglIcon from '../Images/icons8-google.svg';
const Login = () => {

    const navigate = useNavigate();
    const handleLoginButtonClick2 = () => {
        navigate('/register');
    };

    // const [username, setUsername] = useState('');
    const [email, SetUserEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const abc = JSON.parse(localStorage.getItem('userArray'));
        // console.log(abc)
        const isPresent = abc.find((item) => item.email === email)
        if (!isPresent) {
            alert('user not found')
        }
        else {
            if (isPresent.password === password) {
                navigate('/home');
            } else {
                alert('Invalid password');
            }
        }


    };

    return (
        <div className='account-page'>
            <div className='image-cls'>
                <img src={LoginImg} alt="wallPaper"></img>
                <p className='text-left'>SkillupAfrica Blog</p>
                <p className='text1-bottom'>The Ancient city of Rome and the history of the great city.</p>
                <p className='text2-bottom'>Olive Junior</p>
                <p className='text3-bottom'>Lead Writer, SkillupAfrica</p>
            </div>
            <div className='form-cls'>
                <h2>Welcome Back!</h2>
                <p>Welcome back, please enter your details</p>
                <form >
                    <button style={{ display: 'flex', alignItems: 'center',padding:'5px 10px',borderRadius:5}}>
                        <img src={GooglIcon} alt="Sign in with Google" style={{height:20,marginRight:5,marginLeft:25}}/>
                        Sign in with Google
                    </button>

                    <h3>or</h3>
                    {/* <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    /> */}
                    <input
                        type='email'
                        placeholder='EmailAddress'
                        pattern='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i'
                        value={email}
                        required
                        onChange={(e) => SetUserEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#">Forgot Password?</a>
                    <button onClick={handleLogin} style={{ backgroundColor: ' #2F2E41', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 5 }}>Login</button>
                    {/* {errorMessage &&
                     <p>{errorMessage}</p>} */}
                    <div>
                        <span>Not registered yet?</span>
                        <button onClick={handleLoginButtonClick2} style={{marginLeft:10}}>Create on Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
