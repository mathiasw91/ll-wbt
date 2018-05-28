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
     currentQuestion: 0,  //Index für diese Session
     questions: props.questions,  //Fragen für diese Session
     answer: false,
     answerWrong: false,
     questionsAnswered: props.total - props.questions.length, //Anz. aller beantworteten Fragen(sessionübergreifend)
     questionsTotal: props.total, //Anz. aller Fragen(sessionübergreifend)
     questionsAnsweredSession: 0, //Anz. der richtig beantworteten Fragen der Session
     questionsTotalSession: props.questions.length, //Anz. der Fragen der Session
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.state.questionsTotal) {
      this.setState({ questionsTotal: nextProps.total });
    }
    this.setState({questionsAnswered: nextProps.total - nextProps.questions.length})
    if(this.updateQuestions) {
      this.setState({questions: nextProps.questions, questionsTotalSession: nextProps.questions.length})
      this.updateQuestions = false
    }
  }


  render() {
    var q = this.state.questions[this.state.currentQuestion]
    var CustomQuiz = q.component
    return (
      <div id="quiz">
        {this.state.currentQuestion >= this.state.questions.length && (
          <Score total={this.state.questionsTotalSession} correct={this.state.questionsAnsweredSession}
          remaining={this.state.questionsTotal-this.state.questionsAnswered}
          alreadyFinished={(this.state.questionsAnswered == this.state.questionsTotal) && this.state.currentQuestion == 0}/>
        )}
        {this.state.currentQuestion < this.state.questions.length && (
          <div>
            <QuestionCount
               counter={this.state.questionsAnswered}
               total={this.state.questionsTotal}
             />
             {CustomQuiz !== undefined && (
               <CustomQuiz navigateNext={this.nextQuestion.bind(this)} onCorrectAnswer={this.setQuestionAnswered.bind(this)}/>

             )}
             {q.component === undefined && (
               <Quizpage question={this.state.questions[this.state.currentQuestion]} answer={this.state.answer} answerWrong={this.state.answerWrong} setUserAnswer={this.setUserAnswer.bind(this)} navigateNext={this.nextQuestion.bind(this)}/>
             )}
          </div>
        )}
        <div style={{marginTop:"5em"}}>
          <Link className="btn btn-default" to={this.props.location.pathname.replace('/quiz','')}>Zurück zum Lerninhalt</Link>
          <button className="btn btn-default" style={{marginLeft:"2em"}} onClick={this.resetQuiz.bind(this)}>Dieses Quiz zurücksetzen</button>
        </div>
      </div>
    )
  }

  nextQuestion(){
    this.setState({currentQuestion: this.state.currentQuestion+1, answer: false, answerWrong: false})
  }

  setUserAnswer(answer){
    this.setState({
      answer: parseInt(answer)
    });
    if(this.state.questions[this.state.currentQuestion].answers[answer].correct){
      this.setQuestionAnswered()
    }else{
      this.setState({answerWrong: true})
    }
  }

  setQuestionAnswered(){
    this.setState({questionsAnsweredSession: this.state.questionsAnsweredSession+1})
    AppActions.setQuestionAnswered(this.state.questions[this.state.currentQuestion].id)
  }

  resetQuiz(){
    AppActions.resetQuiz();
    this.updateQuestions = true
    this.setState({currentQuestion:0, answerWrong: false, answer: false, questionsTotalSession: 0, questionsAnsweredSession: 0})
  }

}


export default withRouter(Quiz)
