import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Question from './Question'
import AnswerOption from './Answeroption'


class Quizpage extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="quiz-page">
        <Question content={this.props.question.question}/>
        <ul className="answerOptions">
           {this.props.question.answers.map(this.renderAnswerOptions.bind(this))}
         </ul>
         {this.props.answer !== false && (
           <button onClick={this.props.navigateNext}>nächste Frage</button>
         )}
      </div>
    )
  }

  renderAnswerOptions(key, index) {
     return (
       <AnswerOption
         key={index}
         answerContent={key.content}
         value={index}
         answer={this.props.answer}
         answerWrong={this.props.answerWrong}
         onAnswerSelected={this.onAnswerSelected.bind(this)}
       />
     );
   }

   onAnswerSelected(event){
     this.props.setUserAnswer(event.currentTarget.value);
   }
}


export default withRouter(Quizpage)
