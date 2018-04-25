import React from "react"


class Sidebar extends React.Component {


  render() {
    return (<aside>
        {this.props.chapters.map(chapter =>
          <Chapter data={chapter}/>
        )}
    </aside>)
  }
}

function Chapter(props) {
  return (<div>
      <span>-{props.data.name}</span>
      {props.data.themes.map(theme =>
        <Theme data={theme} />
      )}
  </div>)
}

function Theme(props) {
  return (<span>--{props.data.name}</span>)
}

export default Sidebar
