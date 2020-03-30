import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Friends from '../components/friend/Friends';
import AppDate from '../components/Date';
import Container from '@material-ui/core/Container';

export default class Dashboard extends Component {

  render () {
      return (
        <React.Fragment>
          <div style={{ textAlign: 'center'}}>
            <h1>Friends: Monday activity</h1>
          </div>
          <Container maxWidth="xl">
            <Friends />
          </Container>
        </React.Fragment>
      )
   }
}
