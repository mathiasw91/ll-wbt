import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    );
  }
}

export default App;
