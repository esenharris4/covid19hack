import React from 'react';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { red,green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';
import Box from '@material-ui/core/Box';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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

export const Stats = ({ time }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px', border: '1px solid #ECEFF1', width: '25%'}}>
        <TimerIcon style={{ color: '#CFD8DC', marginRight: '4px' }}/>
        <Box fontSize={12} fontFamily="fontFamily" style={{ color: '#000' }}>
          {time}
        </Box>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px', border: '1px solid #ECEFF1', width: '75%'}}>
        <FavoriteBorderIcon style={{ color: '#CFD8DC', marginRight: '4px' }}/>
        <Box fontSize={12} fontFamily="fontFamily" style={{ color: '#000' }}>
          Reported Healthy
        </Box>
      </div>
    </div>

  );
}

export default Stats;
