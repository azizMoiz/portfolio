import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Particles from './HomeParticles';
import HomeBackground from '../images/Backdrops/Northern_Lights/1638490.jpg';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(${HomeBackground})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'fixed',
    height: '100%',
    width: '100%',
    overflow: 'hidden !important',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.homeContainer}>
      <Header />
      <Particles />
    </Box>
  );
};

export default Home;
