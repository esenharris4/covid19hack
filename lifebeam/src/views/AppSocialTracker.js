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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { MapsAutoComplete } from './../components/MapsAutoComplete';
import { Link , BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const AppSocialTracker = () => {
  const [count, setCount] = useState(0);
  // const [value, setValue] = useState('');
  // const { friendsAddedList } = useStoreContext();

  // const { navState } = useStoreContext();
  // const {  } = useStoreContext();

  const [state, setState] = useContext(StoreContext);

  // const handleChange = (event, newValue) => {
  //   setState({...state, navState: newValue});
  // };



  const addCount = (page) => {
    var newCount = count + 1;
    setCount(newCount);
    if ( page ) {
      setState({...state, navState: page});
    }
  }

  // const {  } = useStoreContext()

  const classes = useStyles();

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

  const recentFriends = [
    { name: 'Christie Molloy', score: 400 },
    { name: 'Felipe Silva', score: 100 },
    { name: 'Sasha Bousseina', score: 200 },
    { name: 'Tyler Inn', score: 500 },
    { name: 'Yesenia Harris', score: 500 },
    { name: 'Derrec Harris', score: 500 }
  ];

  const recentActivities = [
    { name: 'Caught train to work', score: 500 },
    { name: 'Grocery shopping at Trader Joes', score: 400 },
    { name: 'Running at Barrys Bootcamp, score: 100' },
    { name: 'Acai Bowls at Acai House', score: 200 },
    { name: 'Drinks at the Bunaglow', score: 500 },
    { name: 'Dropped mail at USPS', score: 500 }
  ];

  // const recentPlaces = [
  //   { name: 'Home', score: 400 },
  //   { name: 'Venice Beach', score: 100 },
  //   { name: 'Third Street Promenade', score: 200 },
  //   { name: 'Melrose Avenue', score: 500 },
  //   { name: 'Art District', score: 500 },
  //   { name: 'The Beverly Center', score: 500 }
  // ];

  return (
    <React.Fragment>
      <Router>
      { count == '0' &&
        <React.Fragment>
          <Box fontWeight="fontWeightMedium" fontSize={28} style={{ padding: '40px' }}>

            <AppDate/>
            <h1>Welcome back, Esen!</h1>
            <p>Please tell us what you're up to this Sunday, so that we can calculate your <span style={{ color: '#536DFE' }}>social impact score</span></p>

          </Box>
          <div style={{  position: 'fixed', bottom: '24px', right: '24px' }}>
            <Button variant="outlined" size="large" color="primary" onClick={() => addCount()}>
                Let's begin
                <ArrowForwardIcon/>
              </Button>
          </div>
        </React.Fragment>
      }

      { count == '1' &&
        <React.Fragment>
          <h1>Add friends you're seeing</h1>
          <Box fontSize={16} m={2}>
            We use this to keep track of the people you have seen for 14 days.
            We also use this to calculate your “social activity” score to track in real-time the danger level of seeing a user.
          </Box>
          <div className="app-form-container">
            <form noValidate autoComplete="off">
            <Autocomplete
              id="combo-box-demo"
              options={recentFriends}
              getOptionLabel={(option) => option.name}
              style={{ width: 600 }}
              renderInput={(params) => <TextField {...params} label="Add friends" variant="outlined" />}
            />
              <Button style={{ marginLeft: '20px' }} label="Submit" type="submit" color="primary" variant="contained">
                +
              </Button>
            </form>
          </div>
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
          <div style={{  position: 'fixed', bottom: '24px', right: '24px' }}>
            <Button variant="outlined" size="large" color="primary" onClick={() => addCount()}>
                Next
                <ArrowForwardIcon/>
              </Button>
          </div>
        </React.Fragment>
      }

      { count == '2' &&
        <React.Fragment>
          <h1>Add activities you're doing</h1>
          <Box fontSize={16} m={2}>
            We use this to keep track of the activities you have done. If you tag an account that has a dangerous social activity score, you will be notified.
            We also use this to calculate your “social activity” score to track in real-time the danger level of doing an activity.
          </Box>
          <div className="app-form-container">
            <form noValidate autoComplete="off">
            <Autocomplete
              multiple
              id="combo-box-demo"
              options={recentActivities}
              getOptionLabel={(option) => option.name}
              style={{ width: 600 }}
              renderInput={(params) => <TextField {...params} label="Add activities" variant="outlined" />}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option.score} {...getTagProps({ index })} />
                ))
              }
            />
            {/* <div className={classes.root}>
              <Chip label={option.score} variant="outlined" />
            </div> */}
              <Button style={{ marginLeft: '20px' }} label="Submit" type="submit" color="primary" variant="contained">
                +
              </Button>
            </form>
          </div>
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
          <div style={{  position: 'fixed', bottom: '24px', right: '24px' }}>
            <Button variant="outlined" size="large" color="primary" onClick={() => addCount()}>
                Next
                <ArrowForwardIcon/>
              </Button>
          </div>
        </React.Fragment>
      }

      { count == '3' &&
        <React.Fragment>
          <h1>Add places you're going</h1>
          <Box fontSize={16} m={2}>
            We use this to keep track of the places you have gone. If you tag a location that has a dangerous social activity score, you will be notified.
            We also use this to calculate your “social activity” score to track in real-time the danger level of going to a location.
          </Box>
          <div className="app-form-container">
            <form noValidate autoComplete="off">
              <MapsAutoComplete/>
              <Button style={{ marginLeft: '20px' }} label="Submit" type="submit" color="primary" variant="contained">
                +
              </Button>
            </form>
          </div>
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
          <div style={{  position: 'fixed', bottom: '24px', right: '24px' }}>
            <Button variant="outlined" size="large" color="primary" onClick={() => addCount('profile')}>
              Next
              <ArrowForwardIcon/>
              </Button>
          </div>
        </React.Fragment>
      }
      </Router>
   </React.Fragment>
  );
}

export default AppSocialTracker;
