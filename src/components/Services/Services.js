import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import './Services.scss';
import { ServicesData } from './ServicesData';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Services = () => {
  return (
    <Grid item container className="services section" id="service">
      <Grid item xs={12} className="section-heading">
        <h1>My Services</h1>
      </Grid>

      <Grid item container xs={12} justify="center">
        <Grid item xs={8}>
          <Typography component="p" paragraph={true} align="center">
            In my 2 years of experience I've learned many technologies and never stopped learning
            new skills. With that knowledge and experience bellow are the services I can offer for
            you.
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
                target="_blank"
              >
                <div className="icon">
                  <img alt="" src={data.image} />
                </div>
                <div className="content">
                  <Typography className="content__title" variant="h4" component="h4">
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
