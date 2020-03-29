import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FriendCard from './FriendCard';
import Grid from '@material-ui/core/Grid';

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
    <Grid container spacing={2}>
      <div className={classes.root}>
        <Grid item xs={3}>
          <FriendCard
            avatar="Christie"
            name="Christie Molloy"
            friendScore="300"
            time="4"
          />
        </Grid>
        <Grid item xs={3}>
          <FriendCard
            avatar="Esen"
            name="Christie Molloy"
            friendScore="300"
            time="4"
          />
        </Grid>
        <Grid item xs={3}>
          <FriendCard
            avatar="Nia"
            name="Christie Molloy"
            friendScore="300"
            time="4"
          />
        </Grid>
        <Grid item xs={3}>
          <FriendCard
            avatar="Felipe"
            name="Christie Molloy"
            friendScore="300"
            time="4"
          />
        </Grid>
        <Grid item xs={3}>
          <FriendCard
            avatar="Sasha"
            name="Christie Molloy"
            friendScore="300"
            time="4"
          />
        </Grid>
        <Grid item xs={3}>
          <FriendCard
            avatar="Tyler"
            name="Christie Molloy"
            friendScore="300"
            time="4"
          />
        </Grid>
      </div>
    </Grid>
  );
}

export default Friends;
