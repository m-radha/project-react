import React, { useState } from 'react';
import '../../css/style.css';
import { Box, Grid } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import picture1 from '../../assets/Images/picture1.png';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';



const Home = () => {

  const [popup, setpopup] = useState(false);

  const openPopup = () => {
    setpopup(true);
  }

  const closePopup = () => {
    setpopup(false);
  }


  var article = JSON.parse(localStorage.getItem("articles") || "{}");
  console.log(article);
  const art1 = article.slice(24,32);
  const art2 = article.slice(6, 12);
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className='nav'>
        <span className='nav-span'>SkillupAfrica Blog</span>
        <Link to="home">Home</Link>
        <Link to="article">Article</Link>
        <Link to="#">About us</Link>
        <FacebookRoundedIcon className='icon'></FacebookRoundedIcon>
        <TwitterIcon className='icon'></TwitterIcon>
        <InstagramIcon className='icon' ></InstagramIcon>
        <YouTubeIcon className='icon'></YouTubeIcon>
        {/* <img src={facebookIcon} alt='facebook' className='s-m-icons'></img>
        <img src={instagramIcon} alt='twitter' className='s-m-icons'></img>
        <img src={twitterIcon} alt='instagram' className='s-m-icons'></img>
        <img src={youtubeIcon} alt='youtube' className='s-m-icons'></img> */}

        <button className='nav-button' onClick={openPopup}>Post your article</button>
        {popup && <Form onClose={closePopup}></Form>}
      </div>
      <div>
        <img src={picture1} alt='f-art'></img>
        <div className='left-box'>
          <h1 className='h1-tag'>Prepare for the Future</h1>
          <p className='p-tag'>Learning a new skill is important and here at skillup  africa we help train student in various digital skills</p>
          <button className='nav-button'>Read more...</button>
        </div>
      </div>
      <div className='all-art-container' style={{ padding: '30px 30px' }}>
        <div className='Latest-Articles'>
          <h1>Latest Articles</h1>
          <hr></hr>

          <Grid container spacing={4}>
            {art1.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} display="flex" direction='column' key={index} marginTop={5} borderRadius={10}>
                  <Box
                    style={{
                      height: "320px",
                      backgroundImage: `url(${item.url})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                  <p>{item.date}</p>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  {/* <Like></Like>
                  <Comment></Comment> */}
                </Grid>
              )
            })}
          </Grid>
          <div className='new-Article' style={{ marginBottom: 50 }}><button><b>Load more Articles</b></button></div><hr></hr>
        </div>


        <div className='Tech-updates'>
          <h1 style={{ marginTop: 20 }}>Tech Updates</h1>
          <hr></hr>
          <Grid container spacing={4}>
            {art2.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} display="flex" direction='column' key={index} marginTop={5}>
                  <Box
                    style={{
                      height: "320px",
                      backgroundImage: `url(${item.url})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                  <p>{item.date}</p>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>

                </Grid>
              )
            })}
          </Grid>

          <div className='new-Article'><button><b>Load more Articles</b></button></div>
        </div>
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

export default Home;
