import React from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Timeline = ({ data }) => {
  return (
    <Grid item container xs={12} className="timeline-container">
      <Grid item xs={1}></Grid>
      <Grid item xs={3} className="timeline-header">
        <Typography variant="h6" component="h4">
          {data.headerTitle}
        </Typography>
        <Typography variant="inherit" component="p">
          {data.headerSubtitle1} <br />
          {data.headerSubtitle2}
        </Typography>
      </Grid>
      <Grid item xs={1} className="timeline-icon">
        <div class="icon-container">
          <FontAwesomeIcon className="icon" icon={faBriefcase} size="lg" />
        </div>
      </Grid>
      <Grid item xs={6} className="timeline-content">
        <Typography variant="h6" component="h4">
          {data.contentTitle}
        </Typography>
        <List class="paragraph">
          {data.contentLists.map(list => (
            <ListItem disableGutters={true}>
              <ListItemIcon className="list-icon">
                <FontAwesomeIcon className="icon" icon={faAngleRight} size="lg" />
              </ListItemIcon>
              <ListItemText primary={list} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Timeline;
