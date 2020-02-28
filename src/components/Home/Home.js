import React from 'react';
import { Grid, Button, useMediaQuery, Link } from '@material-ui/core';
import './Home.scss';

const Home = () => {
  const homeImage = require('../../assets/images/OBJECTS.png');
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Grid container className="home" alignItems="center" alignContent="center" id="home">
      <Grid item xs={12}>
        {matches ? <img className="home-image" src={homeImage} alt="a"></img> : null}

        <div className="home-text-container">
          <h1>
            <span>Hello, I am</span>
            <span>Aniket Mandal</span>
          </h1>
          <p>
            I'm a frontend web developer currently based in Bangalore, <br />
            focused on writing clean, elegant, efficient and functional code.
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
