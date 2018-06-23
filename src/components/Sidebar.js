import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"

import * as AppActions from '../flux/AppActions'

class Sidebar extends React.Component {

  render() {
    let abschlussLocked = true
    if(this.props.chapters[0].chapterComplete && this.props.chapters[1].chapterComplete) abschlussLocked = false
    return (<aside id="sidebar">
    	<div id="sidebar-navigation">
    	<h2>Themen</h2>
        <NavLink to={`${process.env.PUBLIC_URL}/home`} className="extralink" activeClassName="active" ><i class="fa fa-angle-right"></i> Einleitung</NavLink>
        {this.props.chapters.map((chapter, index) =>
          <Chapter data={chapter} index={index}/>
        )}
        <NavLink to={`${process.env.PUBLIC_URL}/abschluss`} className={"extralink "+(abschlussLocked?'locked':'')} activeClassName="active"
        onClick={(event)=>{if(abschlussLocked)event.preventDefault()}}
        title={abschlussLocked?'Dieser Inhalt muss erst freigeschaltet werden': 'Abschlussquiz'}><i class="fa fa-angle-right"></i> Abschlussquiz</NavLink>
      </div>
      {(this.props.latest.length != 0) && (<div id="latest-themes">
        <h2><i class="fa fa-list-ul"></i> Zuletzt besucht</h2>
        {this.props.latest.map(theme=>(
          <Link to={theme.path}>{theme.name}</Link>
        ))}
      </div>)}
      <div id="sidebar-progress">
        <h2><i class="fa fa-chart-line"></i> Lernfortschritt</h2>
        {this.props.chapters.filter(c=>!c.extra).map(c=>(
          <span style={{display:"block"}}>{c.name}: {c.themes.filter(c=>c.quizComplete).length}&nbsp;/&nbsp;{c.themes.length}&nbsp;gelöst</span>
        ))}
        <button className="btn btn-default" style={{marginTop:"0.8em"}} onClick={AppActions.resetProgress}>Zurücksetzen</button>
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
  return (<NavLink exact={true} onClick={(event)=>{if(locked)event.preventDefault()}} title={locked?'Dieser Inhalt muss erst freigeschaltet werden': props.data.name} to={props.data.path} activeClassName="active"
  className={'sidebar-theme '+(props.data.quizComplete?'quiz-complete ':' ')+(locked?'locked ': ' ')+(window.location.pathname.endsWith(props.data.path+'/quiz')? 'active':'')}>{props.data.name}<Checkmark/></NavLink>)
}

function Checkmark() {
  return (<span className="checkmark">
    <div className="checkmark_circle"></div>
    <div className="checkmark_stem"></div>
    <div className="checkmark_kick"></div>
</span>)
}

export default Sidebar
