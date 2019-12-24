import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './Home.scss';

const Home = () => {
  const profileImage = require('../../assets/images/profile-image.jpg');
  return (
    <Grid container className="home" alignItems="center" alignContent="center">
      <Grid item xs={7}>
        <div className="home-text-container">
          <h1>
            <span>Hello, I am</span>
            <span>Aniket Mandal</span>
          </h1>
          <p>
            I'm a frontend web developer currently based in Bangalore <br />
            focused on writing clean, elegant, efficient and functional code.
          </p>
          <Button size="large" variant="contained" className="home-button">
            Get Started
          </Button>
        </div>
      </Grid>
      <Grid item xs={5} className="profile-image-container">
        <div className="profile-image">{/* <img src={profileImage} alt="profile-image" /> */}</div>
      </Grid>
    </Grid>
  );
};

export default Home;
