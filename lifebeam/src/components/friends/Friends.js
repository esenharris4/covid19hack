import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FriendCard from './FriendCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(30),
      height: theme.spacing(40),
    },
  },
}));
//pass a list of 'Friends' objects that will display multiple papers
  //<FavoriteBorderRounded style={{ color: green[500] }}/>
export const Friends = ({friends}) => {
  const classes = useStyles();

  return (
      <Grid container>
        <div className={classes.root}>
          <Grid item xs={3}>
            <FriendCard
              avatar="Christie"
              name="Christie Molloy"
              friendScore="300"
              time="4"
              backgroundColor="#E8F5E9"
              color="#43A047"
            />
          </Grid>
          <Grid item xs={3}>
            <FriendCard
              avatar="Esen"
              name="Esen Harris"
              friendScore="970"
              time="14"
              backgroundColor="#FFEBEE"
              color="#C62828"
            />
          </Grid>
          <Grid item xs={3}>
            <FriendCard
              avatar="Nia"
              name="Nia Harris"
              friendScore="780"
              time="8"
              backgroundColor="#FFEBEE"
              color="#C62828"
            />
          </Grid>
          <Grid item xs={3}>
            <FriendCard
              avatar="Felipe"
              name="Felipe Silva"
              friendScore="650"
              time="9"
              backgroundColor="#FFCC80"
              color="#C62828"
            />
          </Grid>
          <Grid item xs={3}>
            <FriendCard
              avatar="Sasha"
              name="Sasha Boussena"
              friendScore="500"
              time="6"
              backgroundColor="#FFCC80"
              color="#C62828"
            />
          </Grid>
          <Grid item xs={3}>
            <FriendCard
              avatar="Tyler"
              name="Tyler Inn"
              friendScore="320"
              time="12"
              backgroundColor="#E8F5E9"
              color="#43A047"
            />
          </Grid>
        </div>
      </Grid>
  );
}

export default Friends;
