import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { colorPalletes } from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: colorPalletes.sleekAndFuturistic.creamer,
    width: theme.spacing(27),
    height: theme.spacing(27),
    margin: theme.spacing(2),
  },
  title: {
    color: colorPalletes.sleekAndFuturistic.creamer,
  },
  subtitle: {
    color: colorPalletes.strikingAndSimple.lightmagenta,
    // textTransform: 'uppercase',
  },
  typedContainer: {
    backgroundImage: '../images/Backdrops/3287315.jpg',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 2,
  },
  cardContainer: {
    background: colorPalletes.sleekAndFuturistic.redish,
    maxWidth: 345,
    margin: '3rem auto',
    padding: 21,
    borderRadius: 21,
    raised: true,
  },
}));

const Header = () => {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Box className={classes.typedContainer}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <Typography className={classes.title} variant="h4">
            <Typed strings={['Aziz Moiz']} typeSpeed={20} />
          </Typography>
          <CardContent>
            <Typography className={classes.subtitle} variant="h5">
              <Typed
                strings={[
                  'Solopreneur',
                  'Telecoms Engineer',
                  'Software Developer',
                  'DevOps Engineer',
                  'Tech Enthusiast',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Header;
