import React from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = ({ data }) => {
  return (
    <Grid item container xs={12} className="timeline-container">
      <Grid item xs={1}></Grid>
      <Grid item xs={3} className="timeline-header">
        <Typography variant="h4" component="h4">
          {data.headerTitle}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {data.headerSubtitle1}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {data.headerSubtitle2}
        </Typography>
      </Grid>
      <Grid item xs={1} className="timeline-icon">
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={data.icon} size="lg" />
        </div>
      </Grid>
      <Grid item xs={6} className="timeline-content">
        <Typography variant="h4" component="h4">
          {data.contentTitle}
        </Typography>
        <List className="paragraph">
          {data.contentLists.length > 1 ? (
            data.contentLists.map(list => (
              <ListItem disableGutters={true} key={list}>
                <ListItemIcon className="list-icon">
                  <FontAwesomeIcon className="icon" icon="angle-right" size="lg" />
                </ListItemIcon>
                <ListItemText primary={list} className="list-item-text" />
              </ListItem>
            ))
          ) : (
            <ListItemText primary={data.contentLists[0]} className="list-item-text" />
          )}
        </List>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Timeline;
