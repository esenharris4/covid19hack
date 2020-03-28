import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from './avatar'
import Stats from './stats'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(30),
      height: theme.spacing(45),
    },
  },
}));
//pass a list of 'Friends' objects that will display multiple papers
  //<FavoriteBorderRounded style={{ color: green[500] }}/>
export const Friends = ({friends}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Avatar />
        <h3>Christie  Molloy</h3>
        <h6> Christie will have to make this nicer </h6>
        <Stats />
      </Paper>
    </div>
  );
}

export default Friends;
