import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Sidebar extends React.Component {


  render() {
    return (<aside id="sidebar">
    	<div id="sidebar-navigation">
        {this.props.chapters.map(chapter =>
          <Chapter data={chapter} />
        )}
      </div>
    </aside>)
  }
}

function Chapter(props) {
  return (<div>
      <span className="sidebar-chapter">{props.data.name}</span>
      {props.data.themes.map(theme =>
        <Theme data={theme} />
      )}
  </div>)
}

function Theme(props) {
  return (<Link to={props.data.path} className="sidebar-theme">{props.data.name}</Link>)
}

export default Sidebar
