import React from 'react'

  function AnswerOption(props) {
    let wrongClass = ''
    if(props.answerWrong) wrongClass = ' answer-wrong'

    let answerContent = props.answerContent
    if(typeof props.answerContent === 'object' && props.answerContent.type){
      if(props.answerContent.type === 'img'){
        answerContent = (<img src={props.answerContent.src} />)
      }
    }
    return (
      <li className={"answerOption "+wrongClass}>
        <input
          type="radio"
          className={"radioCustomButton"+wrongClass}
          id={'answer-'+props.value}
          checked={props.value === props.answer}
          value={props.value}
          disabled={props.disabled}
          onClick={(event)=>{
            props.onAnswerSelected(event)
          }}
        />
        <label className="radioCustomLabel" htmlFor={'answer-'+props.value}>
          {answerContent}
        </label>
      </li>
    )

  }

  export default AnswerOption
