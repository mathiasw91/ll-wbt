import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Quizpage from './Quizpage'
import QuestionCount from './Questioncount'

const questions = [
  {question: 'Fragetext Frage 1', answers: [
    {content: 'Antworttext Antwort 1', correct: false},
    {content: 'Antworttext Antwort 2', correct: true},
    {content: 'Antworttext Antwort 3', correct: false},
  ]},
  {question: 'Fragetext Frage 2', answers: [
    {content: 'Antworttext Antwort 1', correct: false},
    {content: 'Antworttext Antwort 2', correct: true}
  ]}
]

class Quiz extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
     currentQuestion: 0,
    }
  }

  render() {
    return (
      <div id="quiz">
         {this.state.currentQuestion > (questions.length-1) && (
           <div>Finished</div>
         )}
         {this.state.currentQuestion < questions.length && (
           <div>
             <QuestionCount
                counter={this.state.currentQuestion+1}
                total={questions.length}
              />
             <Quizpage question={questions[this.state.currentQuestion]} navigateNext={this.nextQuestion.bind(this)}/>
             <Link to={this.props.location.pathname.replace('/quiz','')}>Zurück zum Lerninhalt</Link>
           </div>
         )}
      </div>
    )
  }

  nextQuestion(){
    this.setState({currentQuestion: this.state.currentQuestion+1})
  }

}


export default withRouter(Quiz)
