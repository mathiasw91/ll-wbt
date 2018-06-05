import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"

import * as AppActions from '../flux/AppActions'

class Sidebar extends React.Component {

  render() {
    return (<aside id="sidebar">
      <h2><Link to={`${process.env.PUBLIC_URL}/home`}><i class="fa fa-angle-right"></i> Zur Übersicht</Link></h2>
    	<div id="sidebar-navigation">
    	<h2>Themen</h2>
        {this.props.chapters.map((chapter, index) =>
          <Chapter data={chapter} index={index}/>
        )}
      </div>
    </aside>)
  }
}

function Chapter(props) {
  return (<div>
      <span className={"sidebar-chapter "+(!props.data.closed?'open ':'')+(props.data.chapterComplete?'quiz-complete':'')} onClick={()=>{AppActions.toggleChapter(props.index)}}>{props.data.name}</span>
      {(!props.data.closed) && (props.data.themes.map(theme =>
        <Theme data={theme} />
      ))}
  </div>)
}

function Theme(props) {
  let locked = props.data.extra && !props.data.unlocked
  return (<NavLink exact={true} onClick={(event)=>{if(locked)event.preventDefault()}} title={locked?'Dieser Inhalt muss erst freigeschaltet werden': props.data.name} to={props.data.path} activeClassName="active" className={'sidebar-theme '+(props.data.quizComplete?'quiz-complete ':'')+(locked?'locked': '')}>{props.data.name}<Checkmark/></NavLink>)
}

function Checkmark() {
  return (<span className="checkmark">
    <div className="checkmark_circle"></div>
    <div className="checkmark_stem"></div>
    <div className="checkmark_kick"></div>
</span>)
}

export default Sidebar
