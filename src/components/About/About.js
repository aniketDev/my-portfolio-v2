import React from 'react';
import { Grid, Typography, useMediaQuery, Link } from '@material-ui/core';
import './About.scss';

const About = () => {
  const years = new Date().getFullYear() - 2018;
  const months = new Date().getMonth() + 1;
  const xs = useMediaQuery('(max-width: 959px)');
  const md = useMediaQuery('(min-width: 960px)');

  return (
    <Grid container className="about section" id="about">
      <Grid item xs={12} className="section-heading">
        <h1>
          About Me
          {/* <span>Let Me Introduce</span> */}
        </h1>
      </Grid>

      <Grid container item xs={12} className="about__content">
        {xs ? (
          <Grid item xs={12} lg={4} className="about__content__image">
            <div className="profile-image"></div>
          </Grid>
        ) : null}

        <Grid item xs={12} md={8} lg={8} className="about__content__text">
          <Typography variant="inherit" component="p">
            Hi there! My name is Aniket Mandal. I'm a professional
            <strong>&nbsp;Front-end Developer</strong>&nbsp;with&nbsp;
            <strong>{`${years} years and ${months} ${months > 1 ? "months" : "month"}`}</strong>
            &nbsp;of professional experience.
          </Typography>
          <Typography variant="inherit" component="p">
            After passing my M.Tech I started my job as a Project Coordinator in
            a company named Innova Unified Management Services Pvt. Ltd. in
            Kolkata where I found my passion for web development. Soon I decided
            to change my career and came to Bangalore. Here I started my job as
            a Front-end Web Developer in a startup named Balihans Software Pvt.
            Ltd. I started designing and developing the company's own product
            called Qnabu. As I am the only one responsible for designing and
            developing front end part of the entire application, I learned a lot
            of things by myself and became a passionate web developer. After
            finishing the project and deploying it in production I was looking
            for working in different domains and started working in Primesoft IP
            Solutions Pvt. Ltd. as a Software Engineer. I'm currently working in
            this organization for almost 1 year. During this time period I've
            worked there in a banking project and other projects using various
            tools and technologies like Angular 5, Ionic 3, React js.
          </Typography>
          <Typography variant="inherit" component="p">
            I try to learn new things each and every day and I feel a day
            without learning something new is a day wasted.
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
          <Grid item xs={12} md={4} lg={4} className="about__content__image">
            <div className="profile-image"></div>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default About;
