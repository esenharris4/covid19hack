import React from 'react';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { red,green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import TimerIcon from '@material-ui/icons/Timer';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export const Stats = ({ friendScore, time }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
      <LocalHospitalIcon className={classes.small} style={{ color: '#B388FF' }}/>
        <Box fontSize={24} fontFamily="fontFamily" m={1}>
          {friendScore}
        </Box>
      </div>
      <div>
        <TimerIcon className={classes.small} style={{ color: '#B388FF' }}/>
        <Box fontSize={24} fontFamily="fontFamily" m={1}>
          {time}
        </Box>
      </div>
    </div>

  );
}

export default Stats;
