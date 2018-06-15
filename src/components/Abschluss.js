import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

import * as AppActions from '../flux/AppActions'

class Abschluss extends React.Component {



  render() {
    return (<div id="abschluss">
      <h1><i class="fa fa-question-circle"></i> Abschlussquiz</h1>
      <p>Das Abschlussquiz besteht aus zufällig ausgewählten Fragen aus allen Themen. Nutzen Sie es zum Wiederholen und Festigen der Lerninhalte.</p>
      <Link className="btn btn-default" style={{marginTop:"1em", marginBottom: "1em"}} to={this.props.location.pathname+'/quiz'}>zum Quiz</Link>
    </div>)

  }

}


export default withRouter(Abschluss)
