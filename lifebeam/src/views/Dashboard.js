import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Friends from '../components/Friends';
export default class Dashboard extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar name="Dashboard"/>
        <h1> Friends </h1>
        <Friends />

        </div>
      )
   }
}
