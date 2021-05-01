import React from 'react';
import { Grid, Typography, useMediaQuery, Link } from '@material-ui/core';
import './About.scss';

const About = () => {
  const years = new Date().getFullYear() - 2018;
  const months = new Date().getMonth() + 1;
  const md = useMediaQuery('(min-width: 1280px)');

  return (
    <Grid container className="about section" id="about">
      <Grid item xs={12} className="section-heading">
        <h1>
          About Me
          {/* <span>Let Me Introduce</span> */}
        </h1>
      </Grid>

      <Grid container item xs={12} className="about__content">
        {!md ? (
          <Grid item xs={12} lg={4} className="about__content__image">
            <div className="profile-image"></div>
          </Grid>
        ) : null}

        <Grid item xs={12} lg={8} className="about__content__text">
          <Typography variant="inherit" component="p">
            Hey there!
          </Typography>
          <Typography variant="inherit" component="p">
            My name is <strong>Aniket Mandal</strong>. I'm a professional
            <strong>&nbsp;Front-end Developer</strong>&nbsp;with&nbsp;
            <strong>{`${years} years and ${months} ${months > 1 ? 'months' : 'month'}`}</strong>
            &nbsp;of professional experience.
          </Typography>
          <Typography variant="inherit" component="p">
            After M.Tech, I started my job as a Project Coordinator in Kolkata. I came to Bangalore where I started my
            job as a Junior Software Developer in a startup named <strong>Balihans Software Pvt. Ltd</strong>. I started
            designing and developing the company's own product, online school management system using
            <strong> Java, Spring, HTML, CSS , Bootstrap</strong>. After finishing the project I started working in
            <strong> Primesoft IP Solutions Pvt. Ltd.</strong> as a Software Engineer. There I've worked on a banking
            project and other projects using various tools and technologies like
            <strong> Angular 5, Ionic 3, React js</strong>. I'm currently working in
            <strong> Valtech India Pvt. Ltd. as a Software Engineer</strong> on <strong>ZEE5 Web PWA</strong> using
            libraries like
            <strong> React and Redux</strong> etc.
          </Typography>
          <Typography variant="inherit" component="p">
            I try to learn new things each and every day and I feel a day without learning something new is a day
            wasted.
          </Typography>

          <button className="download">
            <Link
              href="https://drive.google.com/file/d/1tvZO82WIk24I-bDuqSs9LAt6cS6trUcR/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </Link>
          </button>
        </Grid>
        {md ? (
          <Grid item xs={12} lg={4} className="about__content__image">
            <div className="profile-image"></div>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default About;
