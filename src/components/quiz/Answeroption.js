import React from 'react'

  function AnswerOption(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
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
