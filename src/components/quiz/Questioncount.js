import React from 'react'
import {Line} from 'rc-progress'

  function QuestionCount(props) {
    let pct = props.counter/props.total*100
    return (<div>
      <Line percent={pct} strokeWidth="1" strokeColor="green" />
      <div className="text-progress">{props.counter} von {props.total} Fragen {props.text? props.text : 'gelöst'}</div>
    </div>)
  }

  export default QuestionCount
