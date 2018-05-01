import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Sidebar extends React.Component {

  render() {
    return (<aside id="sidebar">
    	<div id="sidebar-navigation">
        {this.props.chapters.map((chapter, index) =>
          <Chapter data={chapter} clickhandler={this.props.chapterClicked} index={index}/>
        )}
      </div>
    </aside>)
  }
}

function Chapter(props) {
  return (<div>
      <span className={"sidebar-chapter "+(!props.data.closed?'open':'')} onClick={()=>{props.clickhandler(props.index)}}>{props.data.name}</span>
      {(!props.data.closed) && (props.data.themes.map(theme =>
        <Theme data={theme} />
      ))}
  </div>)
}

function Theme(props) {
  return (<Link to={props.data.path} className="sidebar-theme">{props.data.name}<Checkmark/></Link>)
}

function Checkmark() {
  return (<span class="checkmark">
    <div class="checkmark_circle"></div>
    <div class="checkmark_stem"></div>
    <div class="checkmark_kick"></div>
</span>)
}

export default Sidebar
