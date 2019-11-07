import React from 'react';
import { Grid } from '@material-ui/core';
import './Home.scss';

const Home = () => {
  const profileImage = '../../assets/images/profile-image.jpg';
  return (
    // Home Section
    <Grid container className="home" alignItems="center" alignContent="center">
      <Grid item xs={7} className="home-text-container">
        <h1>
          <span>Hello, I am</span>
          <span>Aniket Mandal</span>
        </h1>
        <p data-aos="fade-right">
          I'm a frontend web developer currently based in Bangalore <br />
          focused on writing clean, elegant, efficient and functional code.
        </p>
        <a data-aos="fade-left" href="#about">
          <button className="home-button">Get Started</button>
        </a>
      </Grid>
      <Grid item xs={5} className="profile-image-container">
        <div className="profile-image">
          <img src={profileImage} alt="profile-image" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
