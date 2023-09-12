import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const AddPost = () => {
    return (
        <div className='ui main center'>
            <div className='nav'>
                <span className='nav-span'>SkillupAfrica Blog</span>
                <a href='#'>Home</a>
                <a href='#'>Article</a>
                <a href='#'>About us</a>

                <FacebookRoundedIcon className='icon'></FacebookRoundedIcon>
                <TwitterIcon className='icon'></TwitterIcon>
                <InstagramIcon className='icon'></InstagramIcon>
                <YouTubeIcon className='icon'></YouTubeIcon>
                <button className='nav-button'>Post your article</button>
            </div>
            <div style={{ marginLeft: 200 }}>
                <p><b>post a new article</b></p>
                <form className='ui form'>
                    <div className='field'>
                        <label>Title</label>
                        <input type='text' id='title' placeholder='Blog Title' style={{ width: 500 }}></input>
                    </div>
                    <div className='field'>
                        <label>Image url</label>
                        <input type='url' id='img-url' placeholder='Image Url'></input>
                    </div>
                    <div className='field'>
                        <label>Content</label>
                        <textarea placeholder='Blog content'></textarea>
                    </div>
                    <button className='ui button black' style={{ width: 100 }}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost
