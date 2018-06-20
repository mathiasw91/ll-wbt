import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"
import Quiz from './quiz/Quiz'
import Home from './Home'
import Abschluss from './Abschluss'
import * as AppActions from '../flux/AppActions'
import FinalQuiz from './quiz/FinalQuiz'

class Content extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    if(this.props.location.pathname.endsWith('home') || this.props.location.pathname === '/' || this.props.location.pathname === process.env.PUBLIC_URL+'/'){
      return (<div id="content-wrapper" className="home-wrapper">
        <Home chapters={this.props.chapters}/>
      </div>)
    }else if(this.props.location.pathname.endsWith('abschluss/quiz')){
      return (<div id="content-wrapper" className="quiz-wrapper">
        <FinalQuiz questions={this.props.abschlussquestions}/>
      </div>)
    }else if(this.props.location.pathname.endsWith('abschluss')){
      return (<div id="content-wrapper" className="abschluss-wrapper">
        <Abschluss/>
      </div>)
    }else if(this.props.location.pathname.endsWith('quiz')){
      return (<div id="content-wrapper" className="quiz-wrapper">
        <Quiz questions={this.props.activeTheme.questions.filter(q=>!q.answered)} total={this.props.activeTheme.questions.length} chapterCompleteMsg={this.props.chapterCompleteMsg} navigateNext={this.props.navigateNext}/>  
      </div>)
    }else{
      return (<div id="content-wrapper">
        {this.props.chapters.map(chapter =>
          <Chapter data={chapter} />
        )}
        {!this.props.activeTheme.extra && (
          <Link className="btn btn-default" style={{marginTop:"1em", marginBottom: "1em"}} to={this.props.location.pathname+'/quiz'}>zum Quiz</Link>
        )}
      </div>)
    }

  }

  componentDidMount(){
    this.props.history.listen(val=>{
      let match = false
      this.props.chapters.forEach(chapter=>{
        chapter.themes.forEach(theme=>{
          if(val.pathname.includes(theme.path)) match = theme
        })
      })
      if(match){
        AppActions.updateLatest(match)
      }
    })
  }

  componentWillUnmount(){
    this.props.history.unlisten()
  }

}

function Chapter(props) {
  return (
    <div>
      {props.data.themes.map(theme =>
        <Theme data={theme} chapter={props.data}/>
      )}
    </div>
  )
}

function Theme(props) {
  return (<Route exact path={props.data.path} component={props.data.component} />)
}

export default withRouter(Content)
