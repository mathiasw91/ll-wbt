import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import PageOne from './pages/Pageone'

const chapters = [
  {name:'Kapitel 1', themes: [
    {name: 'Thema 1', page: PageOne},
    {name: 'Thema 2', page: PageOne},
  ]},
  {name:'Kapitel 2', themes: [
    {name: 'Thema 1', page: PageOne},
  ]}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeChapter: 0,
      activeTheme: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          chapters={chapters}
        />
        <Content
          chapters={chapters}
          activeChapter={this.state.activeChapter}
          activeTheme={this.state.activeTheme}
        />
      </div>
    );
  }
}

export default App;
