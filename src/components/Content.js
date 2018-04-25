import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class Content extends React.Component {

  render() {
    let activeTheme = this.props.chapters[this.props.activeChapter].themes[this.props.activeTheme]
    const SpecificPage = activeTheme.page

    return (<div id="content-wrapper">
      {this.props.chapters.map(chapter =>
        <Chapter data={chapter} />
      )}
    </div>)
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

export default Content
