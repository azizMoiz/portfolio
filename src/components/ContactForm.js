import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Send from '@material-ui/icons/Send';
import { colorPalletes } from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: colorPalletes.strikingAndSimple.lightmagenta,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    zIndex: 1,
  },
  input: {
    color: colorPalletes.strikingAndSimple.lightmagenta,
  },
  button: {
    marginTop: '1rem',
    color: colorPalletes.strikingAndSimple.lightmagenta,
    borderColor: 'tan',
  },
  field: {
    margin: '1rem 0rem',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: colorPalletes.strikingAndSimple.lightmagenta,
    },
    '& label': {
      color: colorPalletes.strikingAndSimple.lightmagenta,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colorPalletes.strikingAndSimple.lightmagenta,
      },
      '&:hover fieldset': {
        borderColor: colorPalletes.strikingAndSimple.lightmagenta,
      },
      '&.Mui-focused fieldset': {
        color: colorPalletes.strikingAndSimple.lightmagenta,
        borderColor: colorPalletes.strikingAndSimple.lightmagenta,
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Curious? Feel free to drop a message..
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Send Email
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
