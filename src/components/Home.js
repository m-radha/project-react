import React from 'react';
import '../components/style.css';
import { Box, Grid } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import picture1 from '../Images/picture1.png';
import pic2 from '../Images/pic2.png';


const Home = () => {
  var article = JSON.parse(localStorage.getItem("articles") || "{}");
  console.log(article);
  const art1 = article.slice(0, 6);
  const art2 = article.slice(6, 12);
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
        <Grid container spacing={4}>
          {art1.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} display="flex" direction='column' key={index}>
                <Box
                  style={{
                    height: "320px",
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <h1>{item.title}</h1>
                <p>{item.description}</p>

              </Grid>
            )
          })}
        </Grid>
        <div className='new-Article'><button><b>Load more Articles</b></button></div><hr></hr>
      </div>


      <div className='Tech-updates'>
        <h1>Tech Updates</h1>
        <hr></hr>
        <Grid container spacing={4}>
          {art2.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} display="flex" direction='column' key={index}>
                <Box
                  style={{
                    height: "320px",
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <h1>{item.title}</h1>
                <p>{item.description}</p>

              </Grid>
            )
          })}
        </Grid>

        <div className='new-Article'><button><b>Load more Articles</b></button></div>
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

export default Home;
