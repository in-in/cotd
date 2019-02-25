import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

export default class App extends Component {
  render() {
    return (
      <div className="cotd">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <Order />
          <Inventory />
        </div>
      </div>
    );
  }
}
