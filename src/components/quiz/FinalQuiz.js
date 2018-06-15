import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Quizpage from './Quizpage'
import QuestionCount from './Questioncount'
import Score from './Score'
import * as AppActions from '../../flux/AppActions'
import QuizpageMultiple from './QuizpageMultiple'


class FinalQuiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     currentQuestion: 0,  //Index für diese Session
     questions: props.questions,  //Fragen für diese Session
     answer: false,
     answerWrong: false,
     questionsAnswered: 0, //Anz. der richtig beantworteten Fragen der Session
     questionsTotal: props.questions.length,
     wrongThemes: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.updateQuestions) {
      this.setState({questions: nextProps.questions, questionsTotal: nextProps.questions.length})
      this.updateQuestions = false
    }
  }


  render() {
    var q = this.state.questions[this.state.currentQuestion]
    var CustomQuiz
    if(q) CustomQuiz = q.component
    return (
      <div id="quiz">
        {this.state.currentQuestion >= this.state.questions.length && (
          <div id="quiz-score" className="result">
              <h1>Auswertung</h1>
              {this.state.questionsAnswered == this.state.questionsTotal && (
                <div>
                  <span>Super! Sie haben alle Fragen richtig beantwortet!<br/>
                  Sie sind bereit ihr erstes eigenes Gemüsebeet anzulegen.</span>
                </div>
              )}
              {this.state.questionsAnswered != this.state.questionsTotal && (
                <div>
                  <span>Sie haben {this.state.questionsAnswered} / {this.state.questionsTotal} Fragen richtig beantwortet!<br/>
                  Schauen Sie sich folgende Themen nochmal an:</span>
                  <ul>
                    {this.state.wrongThemes.map(t=>(
                      <li>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        )}
        {this.state.currentQuestion < this.state.questions.length && (
          <div>
            <QuestionCount
               counter={this.state.currentQuestion}
               total={this.state.questionsTotal}
               text={'beantwortet'}
             />
             {CustomQuiz !== undefined && (
               <CustomQuiz navigateNext={this.nextQuestion.bind(this)} onCorrectAnswer={this.setQuestionAnswered.bind(this)} onWrongAnswer={this.setQuestionAnsweredWrong.bind(this)}/>

             )}
             {(q.component === undefined && q.multiple === true) && (
               <QuizpageMultiple question={this.state.questions[this.state.currentQuestion]} onCorrectAnswer={this.setQuestionAnswered.bind(this)} onWrongAnswer={this.setQuestionAnsweredWrong.bind(this)} navigateNext={this.nextQuestion.bind(this)}/>
             )}
             {(q.component === undefined && q.multiple !== true) && (
               <Quizpage question={this.state.questions[this.state.currentQuestion]} answer={this.state.answer} answerWrong={this.state.answerWrong} setUserAnswer={this.setUserAnswer.bind(this)} navigateNext={this.nextQuestion.bind(this)}/>
             )}
          </div>
        )}
        <div style={{marginTop:"5em"}}>
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
      let wt = this.state.wrongThemes
      wt.push(this.state.questions[this.state.currentQuestion].theme)
      this.setState({answerWrong: true, wrongThemes: wt})
    }
  }

  setQuestionAnswered(){
    let newq = this.state.questions
    newq[this.state.currentQuestion].questionsAnswered = true
    this.setState({questionsAnswered: this.state.questionsAnswered+1, questions: newq})
  }

  setQuestionAnsweredWrong(){
    let wt = this.state.wrongThemes
    wt.push(this.state.questions[this.state.currentQuestion].theme)
    this.setState({wrongThemes: wt})
  }

  resetQuiz(){
    AppActions.resetAbschlussquiz();
    this.updateQuestions = true
    this.setState({currentQuestion:0, answerWrong: false, answer: false, questionsTotal: 0, questionsAnswered: 0, wrongThemes: []})
  }

}


export default withRouter(FinalQuiz)
