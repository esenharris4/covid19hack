import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
import './../App.css';
import Button from '@material-ui/core/Button';
import AppDate from './../components/Date';
import Box from '@material-ui/core/Box';
import FriendListItem from './../components/FriendListItem';

const AppSocialTracker = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      { count == '0' &&
        <React.Fragment>
          <AppDate/>
          <Box fontSize={16}>
            Welcome! We’d love to hear about what you’re up
            to this Saturday so that we can give you your “Social Impact” score.
          </Box>
          <Button variant="contained" color="primary" onClick={() => setCount(1)}>
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
          <FriendListItem/>
          <Button variant="contained" color="primary" onClick={() => setCount(2)}>
            Next
          </Button>
        </React.Fragment>
      }
      { count == '2' &&
        <React.Fragment>
          Screen 3
          <Button variant="contained" color="primary" onClick={() => setCount(3)}>
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
