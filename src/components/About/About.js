import React, { useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import './About.scss';

const About = () => {
  const aboutRef = useRef(null);

  return (
    <Grid container className="about section" id="about" innerRef={aboutRef}>
      <Grid item xs={12} className="section-heading">
        <h1>
          About Me
          {/* <span>Let Me Introduce</span> */}
        </h1>
      </Grid>

      <Grid item xs={12} className="section-content about__content">
        <Typography variant="inherit" component="p">
          Hi there! I'm Aniket Mandal. I'm a professional <strong>Frontend Developer</strong> with
          <strong> 2+ years</strong> of professional experience.
        </Typography>
        <Typography variant="inherit" component="p">
          After passing my M.Tech I started my job as a Project Coordinator in a company named
          Innova Unified Management Services Pvt. Ltd. in Kolkata where I found my passion for web
          development. Soon I decided to change my career and came to Bangalore. Here I started my
          job as a Frontend Web Developer in a startup named Balihans Software Pvt. Ltd. I started
          designing and developing the company's own product called Qnabu. As I am the only one
          responsible for designing and developing front end part of the entire application, I
          learned a lot of things by myself and became a passionate web developer. After finishing
          the project and deploying it in production I was looking for working in different domains
          and started working in Primesoft IP Solutions Pvt. Ltd. as a Software Engineer. I'm
          currently working in this organization for almost 1 year. During this time period I've
          worked there in a banking project and other projects using various tools and technologies
          like Angular 5, Ionic 3, React js and Backbone js.
        </Typography>
        <Typography variant="inherit" component="p">
          I try to learn new things each and every day and I feel a day without learning something
          new is a day wasted.
        </Typography>

        <button className="download">Download CV</button>
      </Grid>
    </Grid>
  );
};

export default About;
