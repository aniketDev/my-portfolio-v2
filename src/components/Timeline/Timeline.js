import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  return (
    <Grid item container xs={12} className="timeline-container">
      <Grid item xs={1}></Grid>
      <Grid item xs={3} className="timeline-header">
        <Typography variant="h6" component="h4">
          Junior Software Developer
        </Typography>
        <p>
          March 2018 - Present <br />
          (11 months)
        </p>
      </Grid>
      <Grid item xs={1} className="timeline-icon">
        <div class="icon-container">
          <FontAwesomeIcon className="icon" icon={faBriefcase} size="lg" />
        </div>
      </Grid>
      <Grid item xs={6} className="timeline-content">
        <Typography variant="h6" component="h4">
          Balihans Software Pvt. Ltd., Bangalore
        </Typography>
        <ul class="paragraph">
          <Typography variant="body" component="li">
            Single-handedly designing and developing the front-end part of the company's own product
            which is a web application software called Qnabu, leading career management and school
            automation tool.
          </Typography>
          <Typography variant="body" component="li">
            Design websites, layouts, web app interfaces and more.
          </Typography>
          <Typography variant="body" component="li">
            Researching different software programs and libraries.
          </Typography>
          <Typography variant="body" component="li">
            Maintaining software documentation.
          </Typography>
        </ul>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Timeline;
