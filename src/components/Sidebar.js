import React from "react"


class Sidebar extends React.Component {


  render() {
    return (<aside id="sidebar">
    	<div id="sidebar-navigation">
        {this.props.chapters.map(chapter =>
          <Chapter data={chapter}/>
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
  return (<span className="sidebar-theme">{props.data.name}</span>)
}

export default Sidebar
