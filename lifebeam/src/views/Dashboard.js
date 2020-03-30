import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Friends from '../components/friends/Friends';
import AppDate from '../components/Date';

export default class Dashboard extends Component {
  state = {
  }

  render () {
      return (
        <React.Fragment>
          <div style={{ textAlign: 'center'}}>
            <h1>Friends: Sunday activity</h1>
          </div>
          <div style={{ display: 'flex', paddingLeft: '10%'}}>
            <Friends />
          </div>
        </React.Fragment>
      )
   }
}
