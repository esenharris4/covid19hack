import React from 'react';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { red,green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

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

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <flex>
        <FavoriteBorderRoundedIcon className={classes.small} style={{ color: red[500] }}/>
        <h2> 10 </h2>
      </flex>
      <flex>
        <ChatBubbleOutlineIcon className={classes.small} style={{ color: green[500] }}/>
        <h2> 10 </h2>
      </flex>
    </div>

  );
}
