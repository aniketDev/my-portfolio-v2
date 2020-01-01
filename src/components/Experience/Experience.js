import React from 'react';
import { Grid } from '@material-ui/core';
import './Experience.scss';
import Timeline from '../Timeline/Timeline';

const Experience = () => {
  return (
    <Grid container id="experience" className="experience section">
      <Grid item xs={12} className="section-heading">
        <h1>My Experience</h1>
      </Grid>
      <Grid item container xs={12} className="section-content experience__content">
        <Timeline />
      </Grid>
    </Grid>
  );
};

export default Experience;
