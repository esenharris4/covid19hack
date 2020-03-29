import React, { useContext, useState } from 'react';
// import TextField from '@material-ui/core/TextField';
import './../App.css';
import Button from '@material-ui/core/Button';
import AppDate from './../components/Date';
import Box from '@material-ui/core/Box';
import FriendListItem from './../components/FriendListItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {StoreContext} from './../context/StoreContext';
import {useStoreContext} from './../context/reducers';

const AppSocialTracker = () => {
  const [count, setCount] = useState(0);
  // const [value, setValue] = useState('');
  // const { friendsAddedList } = useStoreContext();


  // const {  } = useStoreContext();
  const [state, setState] = useContext(StoreContext);

  // const handleSubmit = (event) => {
  //   const friendObject = event.target.value;
  //   console.log('what is friend object' + JSON.stringify(friendObject));
  //   setState({...state, friendsAddedList: friendObject});
  //   event.preventDefault();
  // }

  // const handleChange = (event) => {
  //   setState({...state, friendsAddedList: event.target.value});
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   // console.log(friendsAddedList);
  // }

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
          <Box fontSize={32} m={1}>
            Add friends
          </Box>
          <Box fontSize={12} m={1}>
            We use this to keep track of the people you have seen for 14 days.
            We also use this to calculate your “social activity” score to track in real-time the danger level of seeing a user.
          </Box>
          <div className="app-form-container">
            <form noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Name"
                // onChange={handleChange}
              />
              <Button label="Submit" type="submit" color="secondary" variant="contained">
                ADD
              </Button>
            </form>
          </div>
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
                  score="600"
                  recommended="true"
                />
              </Grid>
              <Grid item xs={12}>
                <FriendListItem
                  name="Esen Harris"
                  score="100"
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
   </React.Fragment>
  );
}

export default AppSocialTracker;
