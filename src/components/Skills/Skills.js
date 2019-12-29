import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  LinearProgress
} from '@material-ui/core';
import './Skills.scss';

const Skills = () => {
  const cards = [
    {
      title: 'JavaScript',
      image: require('../../assets/images/logo/js.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'HTML5',
      image: require('../../assets/images/logo/html.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'CSS3',
      image: require('../../assets/images/logo/css.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'React js',
      image: require('../../assets/images/logo/react.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'SCSS',
      image: require('../../assets/images/logo/sass.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'jQuery',
      image: require('../../assets/images/logo/jquery.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'JavaScript',
      image: require('../../assets/images/logo/js1.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'Spring',
      image: require('../../assets/images/logo/spring.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'JAVA',
      image: require('../../assets/images/logo/java.jpg'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'JavaScript',
      image: require('../../assets/images/logo/js1.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'JavaScript',
      image: require('../../assets/images/logo/js1.png'),
      value: 80,
      link: '#aaa'
    },
    {
      title: 'JavaScript',
      image: require('../../assets/images/logo/js1.png'),
      value: 80,
      link: '#aaa'
    }
  ];
  return (
    <Grid container id="skills" className="skills section">
      <Grid item xs={12} className="section-heading">
        <h1>My Skills</h1>
      </Grid>
      <Grid item container xs={12} className="section-content skills__content">
        <Grid item container spacing={3}>
          {cards.map(card => (
            <Grid item xs={2}>
              <Card raised="true" className="card">
                <CardActionArea>
                  <CardMedia className="card__image" image={card.image} title={card.title} />
                  <CardContent className="card__content">
                    <Typography variant="h5">{card.title}</Typography>
                    <br />
                    <LinearProgress variant="buffer" value={card.value} color="secondary" />
                  </CardContent>
                </CardActionArea>
                <CardActions className="card__actions">
                  <Button href={card.link} size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
