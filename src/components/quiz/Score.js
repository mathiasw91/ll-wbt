import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Circle} from 'rc-progress'

  function Score(props) {
    if(props.alreadyFinished) return (
      <div id="quiz-score">
        Dieses Quiz ist bereits beendet.
        TODO Link auf nächstes Thema
        <Link className="btn btn-default" to={props.location.pathname.replace('/quiz','')}>Zum nächsten Thema</Link>
      </div>
    )

    let pctg = props.correct/props.total*100
    let circleColor = getColor(pctg/100)

    return (
      <div id="quiz-score" className="result">
        <span>Du hast {props.correct} / {props.total} Fragen richtig beantwortet!</span>
        <Circle percent={pctg} strokeWidth="4" strokeColor={circleColor}/>
        {props.remaining !== 0 && (
          <div>Es verbleiben noch {props.remaining} unbeantwortete Fragen. Wiederhole das Quiz, bis alle Fragen gelöst sind.</div>
        )}
      </div>
    )
  }

  function getColor(value){
    //value from 0 to 1
    var hue=(value*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}


  export default withRouter(Score)
