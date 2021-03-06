import React from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  faBriefcase,
  faAngleRight,
  faUniversity,
  faSchool,
  faLongArrowAltRight,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelopeOpen,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  fab,
  faBriefcase,
  faAngleRight,
  faUniversity,
  faSchool,
  faLongArrowAltRight,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelopeOpen,
  faBars
);

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", "Open Sans", sans-serif'
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <Grid container direction="column" className="portfolio">
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
            <Work />
          </Grid>
          <Grid item xs={12}>
            <Services />
          </Grid>
          <Grid item xs={12}>
            <Contact />
          </Grid>
          {/* <Grid item xs={12}>
          <Footer />
        </Grid> */}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
