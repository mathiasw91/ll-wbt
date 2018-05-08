import {EventEmitter} from 'events'
import Dispatcher from './Dispatcher'
import PageOne from '../pages/Pageone'
import PageTwo from '../pages/Pagetwo'

class AppStore extends EventEmitter {
  constructor(){
    super()

    this.chapters = [
      {name:'Planen und Vorbereiten', themes: [
        {name: 'Standort und Boden', path: '/standort-und-boden',component: PageOne, questions: [
          {id: 0, question: 'Fragetext Frage 1', answers: [
            {content: 'Antworttext Antwort 1', correct: false},
            {content: 'Antworttext Antwort 2', correct: true},
            {content: 'Antworttext Antwort 3', correct: false},
          ]},
          {id: 1, question: 'Fragetext Frage 2', answers: [
            {content: 'Antworttext Antwort 1', correct: false},
            {content: 'Antworttext Antwort 2', correct: true}
          ]}
        ]},
        {name: 'Form des Beetes', path: '/form-des-beetes',component: PageOne, questions: [
        ]},
        {name: 'Bodenvorbereitung', path: '/bodenvorbereitung',component: PageOne, questions: [
        ]},
      ]},
      {name:'Anlegen und Pflegen', themes: [
        {name: 'Auswahl der Pflanzen', path: '/auswahl-der-pflanzen',component: PageOne, questions: [
        ]},
        {name: 'Aussaat und Bepflanzung', path: '/aussaat-und-bepflanzung',component: PageOne, questions: [
        ]},
        {name: 'Düngen und Bewässern', path: '/duengen-und-bewaessern',component: PageOne, questions: [
        ]},
        {name: 'Schädlinge und Unkraut', path: '/schaedlinge-und-unkraut',component: PageOne, questions: [
        ]},
        {name: 'Nach der Ernte', path: '/nach-der-ernte',component: PageOne, questions: [
        ]}
      ]},
      {name:'Gängige Pflanzen', themes: [
        {name: 'Tomate', path: '/tomate',component: PageOne, questions: [
        ]},
        {name: 'Salat', path: '/salat',component: PageOne, questions: [
        ]},
        {name: 'Gurke', path: '/gurke',component: PageOne, questions: [
        ]},
        {name: 'Erdbeere', path: '/erdbeere',component: PageOne, questions: [
        ]}
      ]}
    ]
    this.activeTheme = this.chapters[0].themes[0]
    this.latest = []
  }

  toggleChapter(id){
    this.chapters[id].closed = !this.chapters[id].closed
    this.emit('change')
  }

  updateLatest(theme){
    let vorhanden = this.latest.indexOf(theme)
    if(vorhanden != -1) this.latest.splice(vorhanden,1)
    this.latest.unshift(theme)
    if(this.latest.length > 3) this.latest.splice(0,10)
    this.activeTheme = theme
    this.emit('change')
  }

  setQuestionAnswered(questionId){
    let activeIndexes = this.getActiveChapterAndThemeIndex()
    if(activeIndexes.chapter !== false && activeIndexes.theme !== false ){
      let question = this.getQuestionById(activeIndexes.chapter, activeIndexes.theme, questionId)
      if(question) question.answered = true
    }
    let unanswered = this.chapters[activeIndexes.chapter].themes[activeIndexes.theme].questions.filter(q=>!q.answered)
    if(unanswered.length == 0) this.chapters[activeIndexes.chapter].themes[activeIndexes.theme].quizComplete = true
    this.emit('change')
  }

  resetQuiz(){
    let activeIndexes = this.getActiveChapterAndThemeIndex()
    if(activeIndexes.chapter !== false && activeIndexes.theme !== false){
      this.chapters[activeIndexes.chapter].themes[activeIndexes.theme].questions.forEach(q=>{
        q.answered = false
      })
      this.chapters[activeIndexes.chapter].themes[activeIndexes.theme].quizComplete = false
    }
    this.emit('change')
  }

  //helper functions
  getActiveChapterAndThemeIndex(){
    let activeChapterIndex = false
    let activeThemeIndex = false
    this.chapters.forEach((chapter,i)=>{
      chapter.themes.forEach((theme,j)=>{
        if(theme === this.activeTheme){
          activeChapterIndex = i
          activeThemeIndex = j
        }
      })
    })
    return {chapter: activeThemeIndex, theme: activeThemeIndex}
  }

  getQuestionById(chapterId, themeId, questionId){
    return this.chapters[chapterId].themes[themeId].questions.filter(q=>q.id==questionId)[0]
  }

  getChapters(){
    return this.chapters
  }

  getActiveTheme(){
    return this.activeTheme
  }

  getLatest(){
    return this.latest
  }


  handleActions(action){
    switch(action.type){
      case 'TOGGLE_CHAPTER': {
        this.toggleChapter(action.id)
        break
      }
      case 'UPDATE_LATEST': {
        this.updateLatest(action.theme)
        break
      }
      case 'SET_QUESTION_ANSWERED': {
        this.setQuestionAnswered(action.id)
        break
      }
      case 'RESET_QUIZ': {
        this.resetQuiz()
        break
      }
    }
  }

}

const appStore = new AppStore
Dispatcher.register(appStore.handleActions.bind(appStore))

export default appStore
