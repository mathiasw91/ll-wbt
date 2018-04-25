import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class Content extends React.Component {

  render() {
    let activeTheme = this.props.chapters[this.props.activeChapter].themes[this.props.activeTheme]
    const SpecificPage = activeTheme.page

    return (<Router><div id="content-wrapper">
      {this.props.chapters.map(chapter =>
        <Chapter data={chapter} />
      )}
    </div></Router>)
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
  console.log(props.data.path)
  return (<Route exact path={props.data.path} component={props.data.component} />)
}

export default Content
