import React from 'react'
import {Line} from 'rc-progress'

  function QuestionCount(props) {
    let pct = (props.counter-1)/props.total*100
    return (
      <Line percent={pct} strokeWidth="1" strokeColor="green" />
    )
  }

  export default QuestionCount
