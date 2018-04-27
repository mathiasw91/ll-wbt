import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Question from './Question'


class Quiz extends React.Component {

  render() {
    return (
      <div>
        <Question content="Some question"/>
        <Link to={this.props.location.pathname.replace('/quiz','')}>Zurück zum Lerninhalt</Link>
      </div>
    )
  }

}


export default withRouter(Quiz)
