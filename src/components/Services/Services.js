import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Link
} from '@material-ui/core';
import './Services.scss';
import { ServicesData } from './ServicesData';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <Grid item xs={4} key={data.id} className="card">
              <Link
                color="textSecondary"
                underline="none"
                variant="inherit"
                href={data.url}
                className="card__link"
              >
                <div className="icon">
                  <img alt="" src={data.image} />
                </div>
                <div className="content">
                  <Typography className="content__title" variant="h5" component="h5">
                    {data.title}
                  </Typography>
                  <div className="content__text">{data.description}</div>
                  <div className="content__button">
                    <Typography component="span">Read more</Typography>
                    <ArrowRightAltIcon />
                    {/* <FontAwesomeIcon icon="long-arrow-alt-right" size="lg" /> */}
                  </div>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
