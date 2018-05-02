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
      activeTheme: false,
      chapters: [
        {name:'Kapitel 1', themes: [
          {name: 'Thema 1', path: '/pageone',component: PageOne, questions: [
            {question: 'Fragetext Frage 1', answers: [
              {content: 'Antworttext Antwort 1', correct: false},
              {content: 'Antworttext Antwort 2', correct: true},
              {content: 'Antworttext Antwort 3', correct: false},
            ]},
            {question: 'Fragetext Frage 2', answers: [
              {content: 'Antworttext Antwort 1', correct: false},
              {content: 'Antworttext Antwort 2', correct: true}
            ]}
          ]},
          {name: 'Thema 2', path: '/pagetwo',component: PageTwo, questions: [

          ]},
        ]},
        {name:'Kapitel 2', themes: [
          {name: 'Thema 1', path: '/pagethree',component: PageOne, questions: [
            
          ]},
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

  updateLatest(theme){
    let newLatest = this.state.latest
    let vorhanden = newLatest.indexOf(theme)
    if(vorhanden != -1) newLatest.splice(vorhanden,1)
    newLatest.unshift(theme)
    if(newLatest.length > 3) newLatest.splice(0,10)
    this.setState({...this.state, latest:newLatest, activeTheme: theme})
  }

}

export default App;
