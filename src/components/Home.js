import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

class Home extends React.Component {

  render() {
    return (<div id="home">
      {(this.props.latest.length != 0) && (<div id="latest-themes">
        Zu letzt bearbeitete Themen:
        {this.props.latest.map(theme=>(
          <Link to={theme.path}>{theme.name}</Link>
        ))}
      </div>)}
    </div>)

  }

}


export default withRouter(Home)
