import React from 'react'
import {withRouter, Link} from 'react-router-dom'

  function Score(props) {
    if(props.alreadyFinished) return (
      <div id="quiz-score">
        Dieses Quiz ist bereits beendet.
        TODO Link auf nächstes Thema
        <Link to={props.location.pathname.replace('/quiz','')}>Zum nächsten Thema</Link>
      </div>
    )
    return (
      <div id="quiz-score">
        {props.correct} / {props.total} Fragen richtig beantwortet!
        <Link to={props.location.pathname.replace('/quiz','')}>Zurück zum Lerninhalt</Link>
      </div>
    )
  }


  export default withRouter(Score)
