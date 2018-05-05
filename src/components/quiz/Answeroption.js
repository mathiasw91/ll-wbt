import React from 'react'

  function AnswerOption(props) {
    let wrongClass = ''
    if(props.answerWrong) wrongClass = ' answer-wrong'
    return (
      <li className="answerOption">
        <input
          type="radio"
          className={"radioCustomButton"+wrongClass}
          name="radioGroup"
          id={'answer-'+props.value}
          checked={props.value === props.answer}
          value={props.value}
          disabled={props.answer !== false}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={'answer-'+props.value}>
          {props.answerContent}
        </label>
      </li>
    )
  }

  export default AnswerOption
