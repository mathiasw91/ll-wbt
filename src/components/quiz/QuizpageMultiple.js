import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Question from './Question'
import AnswerOption from './Answeroption'


class QuizpageMultiple extends React.Component {

  state = {
    answered: false,
    answers: [],
  }

  constructor(props){
    super(props)

  }

  componentWillReceiveProps(newprops){
    if(this.props.question.id != newprops.question.id) this.setState({answered: false, answers: []})
  }


  finish(){
    let correct = true
    this.props.question.answers.forEach((key, index)=>{
      let answered = this.state.answers.filter(i=>index == i)
      let answerWrong = true
      if(key.correct){
        if(answered[0] === undefined) correct = false
      } else{
        if(answered[0] !== undefined) correct = false
      }
  })

    this.setState({answered: true})
    if(correct) this.props.onCorrectAnswer()
  }

  render() {
    return (
      <div className={"quiz-page multiple "+(this.state.answered?'answered':'')}>
        <Question content={this.props.question.question}/>
        <ul className="answerOptions">
           {this.props.question.answers.map(this.renderAnswerOptions.bind(this))}
         </ul>
         {this.state.answered !== false && this.props.answerWrong === true && this.props.question.feedback && (
           <div className="question-feedback"><i class="fa fa-exclamation-circle"></i> Hinweis: {this.props.question.feedback}</div>
         )}
         {this.state.answered === false && (
           <button className="btn btn-default" onClick={this.finish.bind(this)}>fertig</button>
         )}
         {this.state.answered !== false && (
           <button className="btn btn-default" onClick={this.props.navigateNext}>weiter</button>
         )}
      </div>
    )
  }

  renderAnswerOptions(key, index) {
    let answered = this.state.answers.filter(i=>index == i)
    let answerWrong = true
    let answer = false
    if(this.state.answered){
      if(key.correct){
        if(answered[0] !== undefined) answerWrong = false
      } else{
        if(answered[0] === undefined) answerWrong = false
      }

    }else{
      answerWrong = false
    }

    if(answered[0] !== undefined){
      answer = parseInt(answered[0])
    }

     return (
       <AnswerOption
         key={index}
         answerContent={key.content}
         value={index}
         answer={answer}
         answerWrong={answerWrong}
         disabled={this.state.answered}
         onAnswerSelected={this.onAnswerSelected.bind(this)}
       />
     );
   }

   onAnswerSelected(event){
     let newAnswers = this.state.answers
     let vorhanden = newAnswers.indexOf(event.currentTarget.value)
     if(vorhanden != -1){
       newAnswers.splice(vorhanden,1)
     }else{
        newAnswers.push(event.currentTarget.value)
     }
     this.setState({answers: newAnswers})
   }
}


export default withRouter(QuizpageMultiple)
