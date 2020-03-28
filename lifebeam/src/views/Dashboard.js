import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Friends from '../components/friends/Friends';
export default class Dashboard extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <h1> Friends </h1>
        <Friends />
        </div>
      )
   }
}
