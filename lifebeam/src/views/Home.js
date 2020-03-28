import React, { Component } from 'react';
import Navbar from '../components/Navbar';
export default class Home extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <Navbar/>
           <h1> connected! </h1>
        </div>
      )
   }
}
