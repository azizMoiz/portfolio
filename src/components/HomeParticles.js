import React from 'react';
import { Particles as ReactParticles } from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import { colorPalletes } from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: 'fixed',
    opacity: '0.3',
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 110,
            density: {
              enable: true,
              value_area: 720,
            },
          },
          color: { value: '#ffffff' },
          shape: {
            type: 'star',
            stroke: {
              width: 0,
              color: colorPalletes.sleekAndFuturistic.creamer,
            },
            polygon: { nb_sides: 5 },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 110,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 1,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.1 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
