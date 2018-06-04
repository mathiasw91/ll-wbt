import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Circle} from 'rc-progress'

  function Score(props) {
    if(props.alreadyFinished) return (
      <div id="quiz-score">
        Dieses Quiz ist bereits beendet.
      </div>
    )

    let pctg = props.correct/props.total*100
    let circleColor = getColor(pctg/100)

    return (
      <div id="quiz-score" className="result">
        <h1>Auswertung</h1>
        <div style={{display:'flex', alignItems:'center'}}>
          <Circle percent={pctg} strokeWidth="4" strokeColor={circleColor}/>
          <div style={{fontSize: '24px', marginLeft: '20px'}}>
            <span >Sie haben {props.correct} / {props.total} Fragen richtig beantwortet!</span>
            {props.remaining !== 0 && (
              <div>Es verbleiben noch {props.remaining} unbeantwortete Fragen. Wiederhole das Quiz, bis alle Fragen gelöst sind.</div>
            )}
            {props.remaining === 0 && (
              <div>Damit wurde das Quiz erfolgreich abgeschlossen.</div>
            )}
          </div>
        </div>
      </div>
    )
  }

  function getColor(value){
    //value from 0 to 1
    var hue=(value*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}


  export default withRouter(Score)
