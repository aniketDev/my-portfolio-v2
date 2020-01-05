import React from 'react';
import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import './Services.scss';
import { ServicesData } from './ServicesData';

const Services = () => {
  return (
    <Grid item container className="services section">
      <Grid item xs={12} className="section-heading">
        <h1>My Services</h1>
      </Grid>

      <Grid item container xs={12} justify="center">
        <Grid item xs={8}>
          <Typography component="p" paragraph={true} align="center">
            Aliquip proident consequat commodo quis aute aute et. Eu adipisicing velit fugiat
            reprehenderit enim aute. Irure deserunt in in ullamco nulla quis. Nulla commodo
            exercitation consequat ut enim qui minim elit esse quis elit.
          </Typography>
        </Grid>
      </Grid>

      <Grid item container xs={12} className="section-content services__content" justify="center">
        <Grid item container xs={10} spacing={5}>
          {ServicesData.map(data => (
            <Grid item xs={4} key={data.id}>
              <Card raised={true} className="card">
                <CardActionArea>
                  <CardMedia className="card__image" image={data.image} title={data.title} />
                  <CardContent className="card__content">
                    <Typography
                      gutterBottom
                      variant="h5"
                      align="center"
                      className="card__content__header"
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      paragraph={true}
                      component="p"
                      align="center"
                      className="card__content__details"
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
