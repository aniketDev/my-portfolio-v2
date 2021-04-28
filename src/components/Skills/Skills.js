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
import { cards } from './SkillsData';

const Skills = () => {
  return (
    <Grid container id="skills" className="skills section">
      <Grid item xs={12} className="section-heading">
        <h1>My Skills</h1>
      </Grid>
      <Grid item container xs={12} className="section-content skills__content">
        <Grid item container spacing={5}>
          {cards.map(card => (
            <Grid item xs={4} sm={4} md={3} lg={2} xl={2} key={card.title} className="card-container">
              <Card raised={true} className="card">
                {/* <CardActionArea> */}
                <CardMedia className="card__image" image={card.image} title={card.title} />
                <CardContent className="card__content">
                  <Typography variant="h5" component="h5">
                    {card.title}
                  </Typography>
                  <LinearProgress variant="determinate" value={card.value} color="secondary" />
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions className="card__actions">
                  <Button
                    href={card.link}
                    size="large"
                    target="_blank"
                    rel="noreferrer"
                    className="card__actions--button"
                  >
                    <span>{`Learn More`}</span>
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
