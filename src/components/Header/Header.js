import React, {useState} from 'react';
import '../../css/style.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

const Header = () => {

    const [popup, setpopup] = useState(false);

  const openPopup = () => {
    setpopup(true);
  }

  const closePopup = () => {
    setpopup(false);
  }

  return (
      <div className='nav'>
        <span className='nav-span'>SkillupAfrica Blog</span>
        <Link to="home">Home</Link>
        <Link to="article">Article</Link>
        <Link to="#">About us</Link>
        <FacebookRoundedIcon className='icon'></FacebookRoundedIcon>
        <TwitterIcon className='icon'></TwitterIcon>
        <InstagramIcon className='icon' ></InstagramIcon>
        <YouTubeIcon className='icon'></YouTubeIcon>
        <button className='nav-button' onClick={openPopup}>Post your article</button>
        {popup && <Form onClose={closePopup}></Form>}
      </div>
  )
}

export default Header
