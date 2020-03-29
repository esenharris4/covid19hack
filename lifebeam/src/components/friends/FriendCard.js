import React from 'react';
// import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
// import { red,green } from '@material-ui/core/colors';
// import { makeStyles } from '@material-ui/core/styles';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import TimerIcon from '@material-ui/icons/Timer';
// import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Avatar from './avatar'
import Stats from './stats'


export const FriendCard = ({ avatar, name, friendScore, time }) => {

  return (
      <Paper elevation={3}>
        <Avatar
          avatar={avatar}
        />
        <h3>{name}</h3>
        <Stats
          friendScore={friendScore}
          time={time}
        />
      </Paper>
  );
}

export default FriendCard;
