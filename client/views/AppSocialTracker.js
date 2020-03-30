import React, { useContext, useState } from 'react';
// import TextField from '@material-ui/core/TextField';
import './../css/App.css';
import Button from '@material-ui/core/Button';
import AppDate from './../components/Date';
import Box from '@material-ui/core/Box';
import FriendListItem from './../components/FriendListItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {StoreContext} from './../context/StoreContext';

const AppSocialTracker = () => {
  const [count, setCount] = useState(0);

  // const {  } = useStoreContext();
  const [state, setState] = useContext(StoreContext);

  const handleSubmit = (event) => {
    const friendObject = event.target.value;
    console.log('what is friend object' + friendObject);
    setState({...state, friendsAddedList: friendObject});
  }

  return (
    <React.Fragment>
      { count == '0' &&
        <React.Fragment>
          <AppDate/>
          <Box fontSize={16}>
            Welcome! We’d love to hear about what you’re up
            to this Saturday so that we can give you your “Social Impact” score.
          </Box>
          <Button className="app-next-button" variant="contained" color="primary" onClick={() => setCount(1)}>
            Next
          </Button>
        </React.Fragment>
      }

      { count == '1' &&
        <React.Fragment>
          <AppDate/>
          <Box fontSize={32} m={1}>
            Friends you're seeing
          </Box>
          <Box fontSize={12} m={1}>
            We use this to keep track of the people you have seen for 14 days.
            We also use this to calculate your “social activity” score to track in real-time the danger level of seeing a user.
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Add friend" />
            <input type="submit" value="Add name">
            </input>
          </form>
            <Box fontSize={18} m={1}>
              Friends added
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FriendListItem
                />
              </Grid>
              <Grid item xs={12}>
                <FriendListItem/>
              </Grid>
              <Grid item xs={12}>
                <FriendListItem/>
              </Grid>
            </Grid>

            <Box fontSize={18} m={1}>
              Recommended friends
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FriendListItem
                  name="Christie Molloy"
                  score="300"
                  recommended="true"
                />
              </Grid>
              <Grid item xs={12}>
                <FriendListItem
                  name="Esen Harris"
                  score="200"
                  recommended="true"
                />
              </Grid>
            </Grid>
          <Button className="app-next-button" variant="contained" color="primary" onClick={() => setCount(2)}>
            Next
          </Button>
        </React.Fragment>
      }

      { count == '2' &&
        <React.Fragment>
          Screen 3
          <Button className="app-next-button" variant="contained" color="primary" onClick={() => setCount(3)}>
            Next
          </Button>
        </React.Fragment>
      }
    {/* <TextField
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    /> */}
   </React.Fragment>
  );
}

export default AppSocialTracker;
