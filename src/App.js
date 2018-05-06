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
    }
  }

  componentWillMount(){
    AppStore.on('change', ()=>{
      this.setState({
        activeTheme: AppStore.getActiveTheme(),
        chapters: AppStore.getChapters(),
        latest: AppStore.getLatest(),
      })
    })
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
          latest={this.state.latest}
        />
      </div>
      </Router>
    );
  }

}

export default App;
