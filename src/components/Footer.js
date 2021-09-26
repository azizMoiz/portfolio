import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Instagram from '@material-ui/icons/Instagram';
import { LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#222',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<LinkedIn />}
        className={classes.root}
        href="https://www.linkedin.com/in/aziz-moiz"
        target="_blank"
      />
      <BottomNavigationAction
        icon={<Instagram />}
        className={classes.root}
        href="https://www.instagram.com/az1z.mo1z/"
        target="_blank"
      />
    </BottomNavigation>
  );
};
export default Footer;
