import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ReadMoreIcon from '@material-ui/icons/AppsTwoTone';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import Rocket from '@material-ui/icons/SatelliteTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/Avatars/Aziz8.jpeg';
import { colorPalletes } from '../styles/colors';

import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: colorPalletes.strikingAndSimple.darkgrey,
    margin: 0,
  },
  arrow: {
    color: colorPalletes.strikingAndSimple.lightmagenta,
  },
  title: {
    color: colorPalletes.strikingAndSimple.darkmagenta,
    margin: 'auto',
  },
  menuSliderContainer: {
    width: 250,
    background: colorPalletes.strikingAndSimple.darkgrey,
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  { listIcon: <AssignmentInd />, listText: 'Resume', listPath: '/resume' },
  { listIcon: <Apps />, listText: 'Portfolio', listPath: '/portfolio' },
  { listIcon: <ContactMail />, listText: 'Contact', listPath: '/contact' },
  { listIcon: <Rocket />, listText: 'NASA Picture Of The Day', listPath: '/nasa' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState('Welcome');

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Aziz Moiz" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => {
              setOpen(false);
              setHeading(item.listText);
            }}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <ReadMoreIcon className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              {heading}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Divider />
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
