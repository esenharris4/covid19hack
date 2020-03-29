import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Sasha from './../../images/avatar-5.jpg';
import Tyler from './../../images/avatar-3.jpg';
import Felipe from './../../images/avatar-4.jpg';
import Nia from './../../images/avatar-2.jpg';
import Esen from './../../images/avatar-1.jpg';
import Christie from './../../images/avatar-0.jpg';
import './avatar.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function ImageAvatars({avatar}) {
  const classes = useStyles();

  const who = (avatar) => {
    if (avatar == 'Christie') {
      return Christie
    }
    else if( avatar == 'Esen') {
      return Esen
    }
    else if(avatar == 'Nia') {
      return Nia
    }
    else if(avatar == 'Tyler') {
      return Tyler
    }
    else if(avatar == 'Felipe') {
      return Felipe
    }
    else {
      return Sasha
    }
  }

  return (
    <div className="app-avatar-position">
      <Avatar alt="Christie Molloy" src={who(avatar)} className={classes.large} />
    </div>
  );
}
