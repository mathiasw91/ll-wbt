import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Circle} from 'rc-progress'
import * as AppActions from '../../flux/AppActions'

  function Score(props) {
    if(props.alreadyFinished) return (
      <div id="quiz-score">
        <p>Dieses Quiz ist bereits abgeschlossen.</p>
      </div>
    )

    let pctg = props.correct/props.total*100
    let circleColor = getColor(pctg/100)

    if(props.chapterCompleteMsg) AppActions.resetChapterCompleteMsg()

    return (
      <div id="quiz-score" className="result">
        <h1>Auswertung</h1>
        {props.chapterCompleteMsg && (
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{fontSize: '48px', color: 'rgb(6, 97, 27)'}}><i class="fa fa-exclamation"></i></div>
            <div style={{fontSize: '24px', margin: '20px'}} dangerouslySetInnerHTML={{__html: props.chapterCompleteMsg}}></div>
          </div>
        )}
        <div style={{display:'flex', alignItems:'center'}}>
          <div style={{fontSize: '24px', marginLeft: '20px'}}>
            <p>Sie haben {props.correctSession} Fragen richtig beantwortet!</p>
            <p>Das ergibt folgenden Gesamtfortschritt:</p>
            <div className="score-icons">
              {Array(props.total).fill(1).map((el, i) =>
                <Icn filled={(i+1) <= props.correct} />
              )}
            </div>
            {props.remaining !== 0 && (
              <div>Es verbleiben noch {props.remaining} unbeantwortete Fragen. Wiederhole das Quiz, bis alle Fragen gelöst sind.</div>
            )}
            {props.remaining === 0 && (
              <div>
                <p>Damit wurde das Quiz erfolgreich abgeschlossen.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  function Icn(props){
    let f = 'unfilled'
    if(props.filled) f = 'filled'
    return (<i class={"fa fa-leaf "+f}></i>)
  }

  function getColor(value){
    //value from 0 to 1
    var hue=(value*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}


  export default withRouter(Score)
