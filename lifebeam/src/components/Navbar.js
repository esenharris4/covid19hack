import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import LocationOnIcon from '@material-ui/icons/Dashboard';
import {StoreContext} from './../context/StoreContext';
import {useStoreContext} from './../context/reducers';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar = ({ name }) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState('');
  
  const { navState } = useStoreContext();
  // const {  } = useStoreContext();

  const [state, setState] = useContext(StoreContext);

  const handleChange = (event, newValue) => {
    setState({...state, navState: newValue});
  };

console.log(name);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <BottomNavigation value={navState} onChange={handleChange} className={classes.root}>
          <Box fontWeight="fontWeightBold" fontSize={18} className="app-logo">
            Social Tracker
          </Box>
          <BottomNavigationAction label="Activity" value="activity" icon={<DirectionsRunIcon />}/>
          <BottomNavigationAction label="Dashboard" value="dashboard" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}

export default Navbar;
