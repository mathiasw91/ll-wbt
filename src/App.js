import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import AppStore from './flux/AppStore'




class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      activeTheme: AppStore.getActiveTheme(),
      chapters: AppStore.getChapters(),
      latest: AppStore.getLatest(),
      chapterCompleteMsg: false,
    }
  }

  componentWillMount(){
    AppStore.on('change', ()=>{
      this.setState({
        activeTheme: AppStore.getActiveTheme(),
        chapters: AppStore.getChapters(),
        latest: AppStore.getLatest(),
        chapterCompleteMsg: AppStore.getChapterCompleteMsg(),
      })
    })
  }

  onRouteChange(){
    window.scrollTo(0,0)
  }

  render() {

    return (
      <Router onChange={this.onRouteChange.bind(this)}>
      <div className="App">
        <Sidebar
          chapters={this.state.chapters}
          latest={this.state.latest}
        />
        <Content
          chapters={this.state.chapters}
          activeChapter={this.state.activeChapter}
          activeTheme={this.state.activeTheme}
          chapterCompleteMsg={this.state.chapterCompleteMsg}
        />
      </div>
      </Router>
    );
  }

}

export default App;
