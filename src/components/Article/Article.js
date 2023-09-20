import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import profileIcon from '../../assets/Images/profile_icon.png';
import '../../css/style.css';
import ArticleImg from '../../assets/Images/ArticleImg.png';
import { Box, Grid } from '@mui/material';

const Article = () => {
    var art = JSON.parse(localStorage.getItem("SampleArticles") || "{}");
    console.log(art);
    const art2 = art.slice(13, 19);
    return (
        <div className='article'>
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
            </div><hr></hr>
            <div className='header'>
                <img src={profileIcon} alt='profile_icon' id='profile_icon'></img>
                <p style={{ marginLeft: 10 }}>Oluwatemi Gabiel</p>
                <button className='share' style={{ marginLeft: 600 }}>share<img src='https://www.svgrepo.com/download/13662/share.svg' id='share'></img></button>
            </div>
            <div>
                <img src={ArticleImg} alt='ArtImg'></img>
            </div>
            <div className='content'>
                <h2>Ground Breaking Building is a Classic Example Architecture</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue pellentesque quis non natoque cursus et venenatis. Sit posuere ut egestas volutpat adipiscing. Elementum ante viverra dolor, a ultrices cursus. Etiam gravida turpis commodo id enim a fringilla facilisis. A elit luctus accumsan habitant sed faucibus egestas faucibus dictum. Convallis viverra dictum non fusce sapien. Donec ut semper dictum mauris. Lobortis amet, senectus interdum hendrerit convallis adipiscing. Nisl ultricies vitae sem sed. Fusce enim velit massa maecenas vestibulum ac non arcu, porttitor.</p>
                <p>Tempus vitae quis at convallis magnis nulla pellentesque in eu. Non, proin vestibulum adipiscing ullamcorper diam tristique ultricies. Sodales urna, rutrum justo, fames pellentesque morbi orci, integer. Sit eget lacus at nunc amet, ante. Faucibus ut enim, elementum venenatis penatibus non quam. Nisl, donec purus in cursus ut eget diam proin ac. Nisl sed ultrices dictum urna neque, vitae nisl. Sit amet consequat non purus nulla suspendisse consectetur. Bibendum et mattis turpis ac tincidunt.</p>
            </div>
            <div className='Similar-Articles'>
                <h1>Similar Articles</h1>
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
                                <button style={{ width: 100 }}>Read more</button>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <div className='new-Article'><button><b>Load more Articles</b></button></div><hr></hr>
        </div>
    )
}

export default Article
