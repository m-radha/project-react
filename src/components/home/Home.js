import React from "react";
import "../../css/style.css";
import { Box, Grid } from "@mui/material";
import picture1 from "../../assets/Images/picture1.png";
import { Link } from "react-router-dom";
import { cat, data } from "../../assets/local-storage/local-storage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {

  const articleData = localStorage.getItem("articles") || null;
  if (!articleData) {
    localStorage.setItem("articles", JSON.stringify(data));
  }

  const articleCat = localStorage.getItem("catogories") || null;
  if (!articleCat) {
    localStorage.setItem("catogories", JSON.stringify(cat));
  }

  const article = JSON.parse(localStorage.getItem("articles") || "{}");
  const art1 = article.slice(0, 5);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div>
        <img src={picture1} alt="f-art"></img>
        <div className="left-box">
          <h1 className="h1-tag">Prepare for the Future</h1>
          <p className="p-tag">
            Learning a new skill is important and here at skillup africa we help
            train student in various digital skills
          </p>
          <button className="nav-button">Read more...</button>
        </div>
      </div>
      <div className="all-art-container" style={{ padding: "30px 30px" }}>
        <div className="Latest-Articles">
          <h1>Latest Articles</h1>
          <hr></hr>

          <Grid container spacing={4}>
            {art1.map((item, index) => {
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
          <div className="new-Article" style={{ marginBottom: 50 }}>
            <button>
              <b>Load more Articles</b>
            </button>
          </div>
          <hr></hr>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
