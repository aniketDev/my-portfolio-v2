import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './Home.scss';

const homeImage = require('../../assets/images/OBJECTS.png');

const Home = () => {
  return (
    <Grid container className="home" alignItems="center" alignContent="center" id="home">
      <Grid item xs={12}>
        <img className="home-image" src={homeImage} alt="a"></img>
        <div className="home-text-container">
          <h1>
            <span>Hello, I am</span>
            <span>Aniket Mandal</span>
          </h1>
          <p>
            I'm a frontend web developer currently based in Bangalore, <br />
            focused on writing clean, elegant, efficient and functional code.
          </p>
          <Button size="large" variant="contained" className="home-button">
            Get Started
          </Button>
        </div>
      </Grid>
      {/* <Grid item xs={5} className="profile-image-container">
        <div className="profile-image"></div>
      </Grid> */}
    </Grid>
  );
};

export default Home;
