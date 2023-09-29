import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../../components/similarArt/Article';
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import {data,cat} from '../../assets/local-storage/local-storage';
import Footer from '../Footer/Footer';
const SimilarArt = () => {
  let { id } = useParams();
  const currentArticle = data.find(article => article.id === parseInt(id));
  localStorage.setItem('serializedArticle', JSON.stringify(currentArticle));
  const selectedArticle = localStorage.getItem('serializedArticle');
  const similarArticle = JSON.parse(selectedArticle);
  console.log(similarArticle);
  
  const similarArticles = data.filter(article =>
    article.categories.some(category => similarArticle.categories.includes(category))
  );
  console.log('similar artcile.....')
  console.log(similarArticles);

  const mappedSimilarArticles = similarArticles.map(article => {
    return {
      image:article.imageUrl,
      title:article.title,
      content:article.content,
    };
  });
  console.log('mapped article.....')
  console.log(mappedSimilarArticles)
  

  return (
    <div>
      {currentArticle && <Article {...currentArticle} />}
      <div style={{margin:'0px 60px 0px 60px'}}>
      <hr></hr>
      <h1>Smilar Article</h1>
      <hr></hr>
      <Grid container spacing={4}>
            {similarArticles.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  display="flex"
                  direction="column"
                  key={index}
                  marginTop={5}
                  borderRadius={10}
                >
                  <Box
                    style={{
                      height: "320px",
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: 15,
                    }}
                  />
                  <p>{item.date}</p>
                  {/* <h1 onClick={handleClick} style={{cursor:'pointer'}}>{item.title}</h1> */}
                  <Link to={`/similar/${item.id}`} key={item.id}>
                      <h1>{item.title}</h1>
                    </Link>
                  <p className="limited-content">{item.content}</p>
                </Grid>
              );
            })}
          </Grid>
      </div>
      <Footer/>
    </div>
  );
};

export default SimilarArt;