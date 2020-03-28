import AppBar from '@material-ui/core/AppBar';
import React, { Component } from 'react';
export default class Navbar extends Component {
  state = {
  }

  render () {
      return (

        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>

          </Toolbar>
          </AppBar>
      )
   }
}
