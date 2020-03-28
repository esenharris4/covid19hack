import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class Home extends Component {
  render () {
      return (
        <div>
        <Navbar name="Home"/>
           <h1> connected! </h1>
        </div>
      )
   }
}
