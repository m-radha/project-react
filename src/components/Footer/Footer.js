import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <a>Home</a>
          <a>Articles</a>
          <span className='nav-span'>SkillupAfrica Blog</span>
          <a>About us</a>
          <a>Contact us</a>
        </div>
        <hr></hr>
        <div className='icon-container' style={{ marginRight: 205 }}>
          <FacebookRoundedIcon className='icon'></FacebookRoundedIcon>
          <TwitterIcon className='icon'></TwitterIcon>
          <InstagramIcon className='icon'></InstagramIcon>
          <YouTubeIcon className='icon'></YouTubeIcon>
        </div>
      </footer>
    </div>
  )
}

export default Footer
