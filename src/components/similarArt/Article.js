// Article.js
import React from 'react';
import '../../css/style.css';
import Header from '../Header/Header';



const Article = ({ title,content , imageUrl}) => {
  return (
    <div>
      <Header/>
      <img src={imageUrl} alt='img' className='art-img' style={{borderRadius:20}}/>
        <h2 style={{marginLeft: 60}}>{title}</h2>
      <p className='art-img'>{content}</p>
    </div>
  );
};

export default Article;