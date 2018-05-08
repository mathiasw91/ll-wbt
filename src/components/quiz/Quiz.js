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
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.state.questionsTotal) {
      this.setState({ questionsTotal: nextProps.total });
    }
    this.setState({questionsAnswered: nextProps.total - nextProps.questions.length})
    if(this.updateQuestions) {
      this.setState({questions: nextProps.questions})
      this.updateQuestions = false
    }
  }


  render() {
    return (
      <div id="quiz">
        {this.state.currentQuestion >= this.state.questions.length && (
          <Score total={this.state.questionsTotal} correct={this.state.questionsAnswered}
          alreadyFinished={(this.state.questionsAnswered == this.state.questionsTotal) && this.state.currentQuestion == 0}/>
        )}
        {this.state.currentQuestion < this.state.questions.length && (
          <div>
            <QuestionCount
               counter={this.state.questionsAnswered}
               total={this.state.questionsTotal}
             />
            <Quizpage question={this.state.questions[this.state.currentQuestion]} answer={this.state.answer} answerWrong={this.state.answerWrong} setUserAnswer={this.setUserAnswer.bind(this)} navigateNext={this.nextQuestion.bind(this)}/>
          </div>
        )}
        <div style={{marginTop:"1em"}}>
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
        AppActions.setQuestionAnswered(this.state.questions[this.state.currentQuestion].id)
    }else{
      this.setState({answerWrong: true})
    }
  }

  resetQuiz(){
    AppActions.resetQuiz();
    this.updateQuestions = true
    this.setState({currentQuestion:0, answerWrong: false, answer: false})
  }

}


export default withRouter(Quiz)
