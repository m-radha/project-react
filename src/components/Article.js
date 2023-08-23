import React from 'react';
import '../components/style.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import picture1 from '../Images/picture1.png';
import pic2 from '../Images/pic2.png';
import pic3 from '../Images/pic3.png';
import pic4 from '../Images/pic4.png';
import pic5 from '../Images/pic5.png';
import pic6 from '../Images/pic6.png';
import pic7 from '../Images/pic7.png';
import pic8 from '../Images/pic8.png';
import pic9 from '../Images/pic9.png';
import pic10 from '../Images/pic10.png';
import pic11 from '../Images/pic11.png';
import pic12 from '../Images/pic12.png';
import pic13 from '../Images/pic13.png';

const Article = () => {
  return (
    <div>
      <div className='nav'>
        <span className='nav-span'>SkillupAfrica Blog</span>
        <a href='#'>Home</a>
        <a href='#'>Articles</a>
        <a href='#'>About us</a>
        <FacebookRoundedIcon className='icon'></FacebookRoundedIcon>
        <TwitterIcon className='icon'></TwitterIcon>
        <InstagramIcon className='icon'></InstagramIcon>
        <YouTubeIcon className='icon'></YouTubeIcon>
        <button className='nav-button'>Post your article</button>
      </div>
      <div>
        <img src={picture1} alt='f-art'></img>
        <div className='left-box'>
          <h1 className='h1-tag'>Prepare for the Future</h1>
          <p className='p-tag'>Learning a new skill is important and here at skillup  africa we help train student in various digital skills</p>
          <button>Read more</button>
        </div>
      </div>
      <div className='Latest-Articles'>
        <h1>Latest Articles</h1>
        <hr></hr>
        <div className='images-flexbox'>
          <img src={pic2} alt='pic2'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic3} alt='pic3'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic4} alt='pic4'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic5} alt='pic5'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic6} alt='pic6'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic7} alt='pic7'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='new-Article'><button><b>Load more Articles</b></button></div><hr></hr>
      </div>


      <div className='Tech-updates'>
        <h1>Tech Updates</h1>
        <hr></hr>
        <div className='images-flexbox'>
          <img src={pic8} alt='pic2'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic9} alt='pic3'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic10} alt='pic4'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic11} alt='pic5'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic12} alt='pic6'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='images-flexbox'>
          <img src={pic13} alt='pic7'></img><br></br>
          <span><b>How to build a successfully business in Nigeria</b></span><br></br>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing</span>
        </div>
        <div className='new-Article'><button><b>Load more Articles</b></button></div><hr></hr>
      </div>
      <footer>
        <div>
          <a>Home</a>
          <a>Articles</a>
          <span className='nav-span'>SkillupAfrica Blog</span>
          <a>About us</a>
          <a>Contact us</a>
        </div>
        <hr></hr>
        <div className='icon-container'>
          <FacebookRoundedIcon className='icon'></FacebookRoundedIcon>
          <TwitterIcon className='icon'></TwitterIcon>
          <InstagramIcon className='icon'></InstagramIcon>
          <YouTubeIcon className='icon'></YouTubeIcon>
        </div>
      </footer>


    </div>
  )
}

export default Article;
