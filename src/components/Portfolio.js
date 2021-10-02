import React from 'react';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import project1 from '../images/Projects/ultrasonic-waterproof.jpg';
import project2 from '../images/Projects/Annadil.png';
import project3 from '../images/Projects/mkassociates.png';
import project4 from '../images/Projects/nodejs.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
  },
}));

const projects = [
  {
    name: 'CoICT Water Management System',
    description: `My earliest hands on project involved solving a local water wastage problem at the college. We implemented a microcontroller based sensor and activator system that detected water levels in water tanks and controlled switching of water pumps to maintain an optimum water level in the tanks at all times`,
    image: project1,
  },
  {
    name: 'Burhani East African Sports Festival Official Website',
    description: `An online information portal for all community members. Helped keep everyone updated on the scores and standings on all categories of sports throughout the tournament`,
    image: project2,
  },
  {
    name: 'Marshal & Kurtz official website',
    description: `Marshal & Kurt Associates are certified public accountants in public practice providing accounting, auditing, tax and other consultancy services.`,
    image: project3,
  },
  {
    name: 'Node Js Backend Development',
    description: `Node.js is a JavaScript framework and a runtime environment that runs JavaScript code outside the web browser. Node.js belongs to the software category that allows developers to code applications and simultaneously run them.`,
    image: project4,
  },
];

const Portfolio = () => {
  ReactGA.pageview(window.location.pathname);
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    text="center"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
