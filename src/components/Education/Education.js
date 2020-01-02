import React from 'react';
import { Grid } from '@material-ui/core';
import Timeline from '../Timeline/Timeline';
import educationData from './education.json';

const Education = () => {
  return (
    <Grid container id="education" className="education section">
      <Grid item xs={12} className="section-heading">
        <h1>My Education</h1>
      </Grid>
      <Grid item container xs={12} className="section-content education__content">
        {educationData.map(data => (
          <Timeline key={data.headerTitle} data={data} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Education;
