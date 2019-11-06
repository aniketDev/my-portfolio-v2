import React from 'react';
import Grid from '@material-ui/core/Grid';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Home />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Services />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
