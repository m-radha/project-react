import React from 'react';
import './style.css';
const Home = () => {
  return (
    <div className='account-page'>
      <div className='image-cls'>
        <img src="https://wallpaperaccess.com/full/17495.jpg" alt="wallPaper"></img>
        <p className='text-left'>SkillupAfrica Blog</p>
        <p className='text1-bottom'>The Ancient city of Rome and the history of the great city.</p>
        <p className='text2-bottom'>Olive Junior</p>
        <p className='text3-bottom'>Lead Writer, SkillupAfrica</p>
      </div>
      <div className='form-cls'>
        <h2>Create an Account</h2>
        <p>Let’s start a journey to great articles</p>
        <form>
            <input type='text' placeholder='Name'></input>
            <input type='email' placeholder='EmailAddress'></input> 
            <input type='img' placeholder='Add Profile picture'></input>    
            <input type='password' placeholder='Password'></input>    
            <input type='password' placeholder='Confirm Password'></input>    
            <button>Create On Account</button>
            <button>sign up with google</button>
            <span>Already have on accout?</span>
            <a href='#'>Log In</a>
        </form>
      </div>
    </div>
  )
}

export default Home
