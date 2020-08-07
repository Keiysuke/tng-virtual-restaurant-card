import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import MenuList from './components/MenuList';

import './css/style.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="VirtualRestaurantCard">
        <Navbar />
        <Header />
        <MenuList />
      </div>
    );
  }
}
