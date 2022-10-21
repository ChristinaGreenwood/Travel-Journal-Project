import React, { Component } from 'react';
import Navbar from './Navbar';
import Travel from './Travel';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Travel />
      </div>
    );
  }
}