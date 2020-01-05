import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Link
} from '@material-ui/core';
import './Contact.scss';
import { ContactData } from './ContactData';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Contact = () => {
  return (
    <Grid item container className="contact section">
      <Grid item xs={12} className="section-heading">
        <h1>Contact me</h1>
      </Grid>

      <Grid
        item
        container
        xs={12}
        spacing={10}
        className="section-content contact__content"
        justify="center"
      >
        <Grid item container xs={10} spacing={5}>
          {ContactData.map(data => (
            <Grid item xs={4} key={data.id}>
              <Card raised={true} className="card">
                <CardMedia className="card__image" image={data.image} title="title" />
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
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid item container xs={4} spacing={5} className="contact__content__footer">
          <Grid item xs={3}>
            <Link
              noWrap
              underline="none"
              key="1"
              href="#"
              onClick={event => event.preventDefault()}
              className="contact__content__footer__link"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <LinkedInIcon fontSize="large" />
          </Grid>
          <Grid item xs={3}>
            <LinkedInIcon fontSize="large" />
          </Grid>
          <Grid item xs={3}>
            <LinkedInIcon fontSize="large" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
