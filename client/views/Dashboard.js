import React, { Component } from 'react';
import Friends from '../components/Friends';

export default class Dashboard extends Component {

  render () {
      return (
        <div>
        <h1> Friends </h1>
        <Friends />
        </div>
      )
   }
}
