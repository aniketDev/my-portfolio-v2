import React from 'react';
import { Grid } from '@material-ui/core';
import './Timeline.scss';

const Timeline = () => {
  return (
    <Grid item container xs={12} className="timeline-container">
      <Grid item xs={2}></Grid>
      <Grid item xs={3} className="timeline-header">
        <h4>Junior Software Developer</h4>
        <p>
          March 2018 - Present <br />
          (11 months)
        </p>
      </Grid>
      <Grid item xs={1} className="timeline-icon">
        <div class="icon-container">
          <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
        </div>
      </Grid>
      <Grid item xs={4}>
        item
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Timeline;
