import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from './avatar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(30),
      height: theme.spacing(45),
    },
  },
}));
//pass a list of 'Friends' objects that will display multiple papers
export const Friends = ({friends}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Avatar />
      </Paper>
    </div>
  );
}

export default Friends;
