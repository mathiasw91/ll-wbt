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
      chapters: [
        {name:'Kapitel 1', themes: [
          {name: 'Thema 1', path: '/pageone',component: PageOne},
          {name: 'Thema 2', path: '/pagetwo',component: PageTwo},
        ]},
        {name:'Kapitel 2', themes: [
          {name: 'Thema 1', path: '/pagethree',component: PageOne},
        ]}
      ],
      latest: []
    }
  }

  render() {

    return (
      <Router>
      <div className="App">
        <Sidebar
          chapters={this.state.chapters}
          chapterClicked={this.toggleChapter.bind(this)}
        />
        <Content
          chapters={this.state.chapters}
          activeChapter={this.state.activeChapter}
          activeTheme={this.state.activeTheme}
          latest={this.state.latest}
          onChapterSelect={this.updateLatest.bind(this)}
        />
      </div>
      </Router>
    );
  }

  toggleChapter(id){
    let chapters = this.state.chapters
    chapters[id].closed = !chapters[id].closed
    this.setState({...this.state, chapters: chapters})
  }

  updateLatest(chapter){
    let newLatest = this.state.latest
    let vorhanden = newLatest.indexOf(chapter)
    if(vorhanden != -1) newLatest.splice(vorhanden,1)
    newLatest.unshift(chapter)
    if(newLatest.length > 3) newLatest.splice(0,10)
    this.setState({...this.state, latest:newLatest})
  }

}

export default App;
