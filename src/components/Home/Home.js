import React from 'react';
import { Grid, Button, Link } from '@material-ui/core';
import './Home.scss';
import artwork from '../../assets/images/artwork.png';
import art_1 from '../../assets/images/art_paperplane.png';

const Home = () => {
  return (
    <Grid container className="home" id="home">
      <img className="art1" src={art_1} alt="a"></img>
      <img className="artwork" src={artwork} alt="a"></img>
      <Grid item xs={12}>
        <div className="home-text-container">
          <div className="introName">
            <span>Hello, </span>
            {/* <br /> */}
            <span>I'm </span>
            {/* <div className="nameWrapper">
              <img src={code_tag_open} alt="code-tag-open" />
              <span>Aniket Mandal</span>
              <img src={code_tag_close} alt="code-tag-close" />
            </div> */}
            <div className="nameWrapper">
              <span>Aniket Mandal</span>
            </div>
          </div>
          <p>
            I'm a <span>Front-end Web & Mobile Developer</span> currently based in Bangalore,
            <br />
            focused on writing clean, optimized, efficient and functional code.
          </p>
          <Link href="#about" underline="none">
            <Button size="large" variant="contained" className="home-button">
              Get Started
            </Button>
          </Link>
        </div>
      </Grid>
      {/* <Grid item xs={5} className="profile-image-container">
        <div className="profile-image"></div>
      </Grid> */}
    </Grid>
  );
};

export default Home;
