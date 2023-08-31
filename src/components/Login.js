import React, { useState } from 'react';
import './style.css';
import LoginImg from '../Images/LoginImg.png';
import { useNavigate } from "react-router-dom";


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
        const storedUser = localStorage.getItem(email);
        if (storedUser) {
            const storedPassword = JSON.parse(storedUser).password;
            if (storedPassword === password) {
                // Implement successful login behavior
                // setErrorMessage('');
                navigate('/home');
            } else {
                alert('Invalid credentials');
            }
        } else {
            alert('User not found,Kindly register');
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
                    <button>sign in with google</button>
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
                    <button onClick={handleLogin}>Login</button>
                    {/* {errorMessage &&
                     <p>{errorMessage}</p>} */}
                    <div>
                        <span>Not registered yet?</span>
                        <button onClick={handleLoginButtonClick2}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
