import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import PageOne from './pages/Pageone'
import PageTwo from './pages/Pagetwo'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeChapter: 0,
      activeTheme: 0,
      chapters: [
        {name:'Kapitel 1', themes: [
          {name: 'Thema 1', path: '/pageone',component: PageOne},
          {name: 'Thema 2', path: '/pagetwo',component: PageTwo},
        ]},
        {name:'Kapitel 2', themes: [
          {name: 'Thema 1', path: '/pagethree',component: PageOne},
        ]}
      ]
    }
  }

  render() {

    return (
      <Router>
      <div className="App">
        <Sidebar
          chapters={this.state.chapters}
        />
        <Content
          chapters={this.state.chapters}
          activeChapter={this.state.activeChapter}
          activeTheme={this.state.activeTheme}
        />
      </div>
      </Router>
    );
  }

  toggleChapter(id){
    let chapters = this.state.chapters
    chapters[id].open = !chapters[id].open
    this.setState({...this.state, chapters: chapters})
  }
}

export default App;
