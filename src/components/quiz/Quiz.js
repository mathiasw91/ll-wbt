import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Quizpage from './Quizpage'
import QuestionCount from './Questioncount'


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
         {this.state.currentQuestion > (this.props.questions.length-1) && (
           <div>Finished</div>
         )}
         {this.state.currentQuestion < this.props.questions.length && (
           <div>
             <QuestionCount
                counter={this.state.currentQuestion+1}
                total={this.props.questions.length}
              />
             <Quizpage question={this.props.questions[this.state.currentQuestion]} navigateNext={this.nextQuestion.bind(this)}/>
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
