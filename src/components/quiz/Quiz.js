import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Quizpage from './Quizpage'
import QuestionCount from './Questioncount'
import Score from './Score'
import * as AppActions from '../../flux/AppActions'


class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     currentQuestion: 0,
     answer: false,
     answerWrong: false,
     questionsAnswered: [],
     questionTotal: props.questions.length
    }
  }


  render() {
    return (
      <div id="quiz">
        <button onClick={this.resetQuiz.bind(this)}>Dieses Quiz zurücksetzen</button>
         {this.state.currentQuestion > (this.state.questionTotal-1) && (
           <Score total={this.state.questionTotal} correct={this.state.questionsAnswered.length}/>
         )}
         {this.state.currentQuestion < this.props.questions.length && (
           <div>
             <QuestionCount
                counter={this.state.currentQuestion+1}
                total={this.props.questions.length}
              />
             <Quizpage question={this.props.questions[this.state.currentQuestion]} answer={this.state.answer} answerWrong={this.state.answerWrong} setUserAnswer={this.setUserAnswer.bind(this)} navigateNext={this.nextQuestion.bind(this)}/>
             <Link to={this.props.location.pathname.replace('/quiz','')}>Zurück zum Lerninhalt</Link>
           </div>
         )}
      </div>
    )
  }

  nextQuestion(){
    this.setState({currentQuestion: this.state.currentQuestion+1, answer: false, answerWrong: false}, ()=>{
      if(this.state.currentQuestion > this.props.questions.length-1){
        this.state.questionsAnswered.forEach(q=>{
          AppActions.setQuestionAnswered(q)
        })
      }
    })
  }

  setUserAnswer(answer){
    this.setState({
      answer: parseInt(answer)
    });
    if(this.props.questions[this.state.currentQuestion].answers[answer].correct){
        let qa = this.state.questionsAnswered
        qa.push(this.props.questions[this.state.currentQuestion].id)
        this.setState({questionsAnswered: qa})
    }else{
      this.setState({answerWrong: true})
    }
  }

  resetQuiz(){
    AppActions.resetQuiz();
    this.setState({currentQuestion:0, answerWrong: false, answer: false, questionsAnswered: []})
  }

}


export default withRouter(Quiz)
