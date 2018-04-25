import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import PageOne from './pages/Pageone'
import PageTwo from './pages/Pagetwo'

const chapters = [
  {name:'Kapitel 1', themes: [
    {name: 'Thema 1', path: '/pageone',component: PageOne},
    {name: 'Thema 2', path: '/pagetwo',component: PageTwo},
  ]},
  {name:'Kapitel 2', themes: [
    {name: 'Thema 1', path: '/pagethree',component: PageOne},
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
      <Router>
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
      </Router>
    );
  }
}

export default App;
