import React from 'react';
import { Grid, Button, Link } from '@material-ui/core';
import './Home.scss';
import artwork from '../../assets/images/artwork.webp';
import art_1 from '../../assets/images/art_paperplane.png';

const Home = () => {
  // const lg = useMediaQuery('(min-width:1280px)');
  // const md = useMediaQuery('(min-width:960px)');

  return (
    <Grid
      container
      className="home"
      alignItems="center"
      alignContent="center"
      id="home"
    >
      <img className="art1" src={art_1} alt="a"></img>
      <img className="artwork" src={artwork} alt="a"></img>
      <Grid item xs={12}>
        <div className="home-text-container">
          <h1>
            <span>Hello,</span>
            <br />
            <span>I am </span>
            <span>Aniket Mandal</span>
          </h1>
          <p>
            I'm a Front-end Web & Mobile Developer currently based in Bangalore,
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
