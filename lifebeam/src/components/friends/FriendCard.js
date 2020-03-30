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


export const FriendCard = ({ avatar, name, friendScore, time, backgroundColor, color }) => {

  console.log('what is' + backgroundColor);
  return (
      <Paper elevation={3} style={{ borderRadius: '0'}}>
        <Avatar
          avatar={avatar}
        />
        <h3>{name}</h3>
        <div style={{ display: 'flex', width: '100%', textAlign: 'center', paddingBottom: '32px', justifyContent: 'space-around'}}>
          <div style={{ backgroundColor: backgroundColor, color: color, width: '150px', padding: '8px', borderRadius: '50px'}}>
            {friendScore} social score
          </div>
        </div>
        <Stats
          friendScore={friendScore}
          time={time}
        />
      </Paper>
  );
}

export default FriendCard;
