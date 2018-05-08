import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"
import Quiz from './quiz/Quiz'
import Home from './Home'
import * as AppActions from '../flux/AppActions'

class Content extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    if(this.props.location.pathname.endsWith('home') || this.props.location.pathname === '/'){
      return (<div id="content-wrapper" className="home-wrapper">
        <Home latest={this.props.latest} chapters={this.props.chapters}/>
      </div>)
    }else if(this.props.location.pathname.endsWith('quiz')){
      return (<div id="content-wrapper" className="quiz-wrapper">
        <Quiz questions={this.props.activeTheme.questions.filter(q=>!q.answered)} />
      </div>)
    }else{
      return (<div id="content-wrapper">
        {this.props.chapters.map(chapter =>
          <Chapter data={chapter} />
        )}
        <Link className="btn btn-default" style={{marginTop:"1em"}} to={this.props.location.pathname+'/quiz'}>zum Quiz</Link>
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
        <Theme data={theme}/>
      )}
    </div>
  )
}

function Theme(props) {
  return (<Route exact path={props.data.path} component={props.data.component} />)
}

export default withRouter(Content)
