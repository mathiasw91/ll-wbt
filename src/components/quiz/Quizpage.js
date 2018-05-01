import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Question from './Question'
import AnswerOption from './Answeroption'


class Quizpage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      answer: false
    }
  }

  render() {
    return (
      <div className="quiz-page">
        <Question content={this.props.question.question}/>
        <ul className="answerOptions">
           {this.props.question.answers.map(this.renderAnswerOptions.bind(this))}
         </ul>
         {this.state.answer !== false && (
           <button onClick={this.nextQuestion.bind(this)}>nächste Frage</button>
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
         answer={this.state.answer}
         onAnswerSelected={this.onAnswerSelected.bind(this)}
       />
     );
   }

   setUserAnswer(answer) {
    this.setState({
      answersCount: this.state.answerContent +1,
      answer: parseInt(answer)
    });
  }

   onAnswerSelected(event){
     this.setUserAnswer(event.currentTarget.value);
   }

   nextQuestion(){
     this.setState({answer: false})
     this.props.navigateNext()
   }
}


export default withRouter(Quizpage)
