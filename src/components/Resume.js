import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { colorPalletes } from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: colorPalletes.strikingAndSimple.black,
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      // borderColor: "tomato tomato transparent transparent",
      borderColor: `${colorPalletes.strikingAndSimple.lightmagenta} ${colorPalletes.strikingAndSimple.lightmagenta} transparent transparent`,
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: `transparent transparent ${colorPalletes.strikingAndSimple.lightmagenta} ${colorPalletes.strikingAndSimple.lightmagenta}`,
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '10rem',
    margin: '0 3rem 0 3rem auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: `${colorPalletes.strikingAndSimple.darkgrey}`,
    lineHeight: 1,
    padding: '1rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: `${colorPalletes.strikingAndSimple.lightmagenta}`,
    padding: '3rem 3rem 3rem 3rem',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 5,
    textTransform: 'uppercase',
  },
  body1: {
    color: `${colorPalletes.strikingAndSimple.lightmagenta}`,
  },
  subtitle1: {
    color: 'tan',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Work Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          CURRENT
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Development
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Beem Africa
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Delivering Exceptional Mobile Experiences.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Beem offers an omni-channel communication platform that brings
            together Bulk SMS messaging, Two Way messaging, USSD and Chatbot
            solutions to engage, verify, authenticate or notify customers.
            Leverage our deep domain expertise, flexible platform and
            connectivity with mobile networks across the world to communicate
            with ease.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016/2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            BSc Telecommunications Engineering
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            The University Of Dar Es Salaam
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            College Of Information and Communications Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Acquired a wide range of theoretical knowledge on the origins of
            electromagnetic signals, its properties and how they are used in almost
            every electronic communication channel ever made.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016/2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            MICROCOMPUTER TECHNOLOGIES
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Vi Lab
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Introduced to Microcomputer (Arduino to be specific) Programming.
            which is a recent frontier and advancement in the field of embedded
            systems. Quickly build minimum viable products to demonstrate a
            commercial business idea with the help of miniature sensors and
            activators connected to a programmable interface.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017/2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            DNS & HOSTING FUNDAMENTALS
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            TZNiC
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Background to the internet, and how to set up a hosting environment
            using the famous cloud provider digital ocean. quickly deploy
            production ready hosting service on digital ocean droplets. set up
            routing for domains and secure the server by leveraging certificates
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018/2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research And Project Management
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            EGOVRIDC
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
