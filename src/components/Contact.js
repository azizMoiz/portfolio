import React from 'react';
import ReactGA from 'react-ga';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from './ContactForm';
import Particles from './HomeParticles';
import ContactBackground from '../images/Backdrops/Northern_Lights/3804424.jpg';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    backgroundImage: `url(${ContactBackground})`,
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

const Contact = () => {
  ReactGA.pageview(window.location.pathname);
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <ContactForm />
      <Particles />
    </Box>
  );
};

export default Contact;
