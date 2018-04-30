import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"
import Quiz from './quiz/Quiz'
import Home from './Home'

class Content extends React.Component {

  render() {
    if(this.props.location.pathname.endsWith('home') || this.props.location.pathname === '/'){
      return (<div id="content-wrapper" className="home-wrapper">
        <Home latest={this.props.latest}/>
      </div>)
    }else if(this.props.location.pathname.endsWith('quiz')){
      return (<div id="content-wrapper" className="quiz-wrapper">
        <Quiz />
      </div>)
    }else{
      return (<div id="content-wrapper">
        {this.props.chapters.map(chapter =>
          <Chapter data={chapter} />
        )}
        <Link to={this.props.location.pathname+'/quiz'}>zum Quiz</Link>
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
        this.props.onChapterSelect(match)
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
