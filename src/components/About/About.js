import React from 'react';
import { Grid } from '@material-ui/core';

const About = () => {
  return (
    <Grid container className="about" alignItems="center" alignContent="center">
      <div className="about__heading section-heading">
        <h1>
          About Me<span>Let Me Introduce</span>
        </h1>
      </div>
      <div className="about__images">
        <div className="image__container">
          <img src="/assets/images/img1.jpg" alt="" className="img--1" data-aos="fade-right" />
          <img src="/assets/images/img2.jpg" alt="" className="img--2" data-aos="fade-left" />
          <img src="/assets/images/img3.jpg" alt="" className="img--3" data-aos="fade-up" />
        </div>
      </div>
      <div className="about__info" data-aos="fade-up">
        <p className="paragraph">
          Hi there, I am Aniket Mandal. I am a professional front-end web developer with 1+ years of
          professional experience.
        </p>
        <p className="paragraph">
          After passing my M.Tech I started my job as a Project Coordinator in a company named IUMS
          Pvt. Ltd. back in Kolkata. There I find my passion for web development. Soon I changed my
          career and came all the way to Bangalore. Here I started my job as a Front-end Web
          Developer in a startup named Balihans Software Pvt. Ltd. I started designing and
          developing the company's own product named Qnabu. As I am the only one responsible for
          designing and developing front end part of the entire application, I learned a lot of
          things by myself and became a passionate web developer.
        </p>
        <p className="paragraph">
          I try to learn new things each and every day and I feel a day without learning anything
          new is a day wasted.
        </p>
        <a href="https://drive.google.com/uc?authuser=0&id=1W3hs08YNID8hJLBdFikxskHGN769rceY&export=download">
          <button className="download">Download CV</button>
        </a>
      </div>
    </Grid>
  );
};

export default About;
