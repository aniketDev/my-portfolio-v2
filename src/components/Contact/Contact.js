import React from 'react';
import { Grid, Card, CardContent, Link } from '@material-ui/core';
import './Contact.scss';
import { ContactData } from './ContactData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <Grid item container className="contact section" id="contact">
      <Grid item xs={12} className="contact__heading">
        <h1>
          Contact
          <span>Get In Touch</span>
        </h1>
      </Grid>

      <Grid item container xs={12} className="section-content contact__content" justify="center">
        <Grid item container xs={10} spacing={5}>
          {ContactData.map(data => (
            <Grid item xs={4} key={data.id}>
              <Card raised={true} className="card">
                <CardContent className="card__content">
                  <div className="card__content__icon">
                    <FontAwesomeIcon className="icon" icon={data.icon} />
                  </div>
                  <div className="card__content__title">{data.title}</div>
                  <div className="card__content__details">{data.description}</div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid item container xs={6} className="contact__content__footer" justify="center">
          <Grid item xs={3}>
            <Link noWrap target="_blank" underline="none" href="https://github.com/aniketDev/">
              <FontAwesomeIcon className="icon" icon={['fab', 'github-square']} />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              noWrap
              target="_blank"
              underline="none"
              href="https://www.linkedin.com/in/aniketmandal9/"
            >
              <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              noWrap
              target="_blank"
              underline="none"
              href="https://www.hackerrank.com/aniketmandal9"
            >
              <FontAwesomeIcon className="icon" icon={['fab', 'hackerrank']} />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link noWrap target="_blank" underline="none" href="https://codepen.io/aniketDev/">
              <FontAwesomeIcon className="icon" icon={['fab', 'codepen']} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
