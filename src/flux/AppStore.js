import {EventEmitter} from 'events'
import Dispatcher from './Dispatcher'
import PageOne from '../pages/Pageone'
import PageTwo from '../pages/Pagetwo'
import StandortUndBoden from '../pages/standort-und-boden'
import FormDesBeetes from '../pages/form-des-beetes'
import testimg from '../assets/bg_salad.jpg'
import Bodenvorbereitung from '../pages/bodenvorbereitung'
import AuswahlDerPflanzen from '../pages/auswahl-der-pflanzen'
import AussaatUndBepflanzung from '../pages/aussaat-und-bepflanzung'
import DuengenUndNachwaessern from '../pages/duengen-und-nachwaessern'
import SchadelingeUndUnkraut from '../pages/schaedlinge-und-unkraut'
import NachDerErnte from '../pages/nach-der-ernte'

class AppStore extends EventEmitter {
  constructor(){
    super()

    this.chapters = [
      {name:'Planen und Vorbereiten', themes: [
        {name: 'Standort und Boden', path: process.env.PUBLIC_URL + '/standort-und-boden',component: StandortUndBoden, questions: [
          {id: 0, question: 'Wann ist der ideale Zeitpunkt, ein eigenes Gemüsebeet anzulegen?',
            feedback: 'some feedback', answers: [
            {content: 'Im Herbst, damit es im Frühjahr bereit ist zum Einsatz.', correct: false},
            {content: 'Im Frühjahr, sobald kein Bodenfrost mehr herrscht.', correct: true},
            {content: 'Im Sommer, da es in dieser Zeit auch am meisten regnet.', correct: false},
          ]},
          {id: 1, question: 'Warum ist es wichtig, dass der Ort für das Gemüsebeet sonnig und nicht ganz windstill ist?', answers: [
            {content: 'Die Pflanzen brauchen viel Sonne um gut wachsen zu können. Ohne Wind würden sie allerdings vertrocknen, da es zu heiß wird.', correct: false},
            {content: 'Luftzirkulation sorgt dafür, dass die Pflanzen immer mit genug Kohlenstoffdioxid versorgt werden, was für die Photosynthese – genau wie ausreichend Sonnenlicht – essentiell ist.', correct: false},
            {content: 'Schädlinge und Pilze mögen Windstille, deswegen ist ein wenig Luftzirkulation sehr gut.', correct: true}
            // {content: {type: 'img', src: testimg}, correct: true}
          ]}
        ]},
        {name: 'Form des Beetes', path: process.env.PUBLIC_URL + '/form-des-beetes',component: FormDesBeetes, questions: [
          {id: 0, type: 'dragNDrop'},
          {id: 1, question: 'normale textfrage', answers:[
            {content: 'Antwort richtig', correct: true},
            {content: 'Antwort falsch', correct: false}
          ]}
        ]},
        {name: 'Bodenvorbereitung', path: process.env.PUBLIC_URL + '/bodenvorbereitung',component: Bodenvorbereitung, questions: [
        ]},
      ]},
      {name:'Anlegen und Pflegen', themes: [
        {name: 'Auswahl der Pflanzen', path: process.env.PUBLIC_URL + '/auswahl-der-pflanzen',component: AuswahlDerPflanzen, questions: [
        ]},
        {name: 'Aussaat und Bepflanzung', path: process.env.PUBLIC_URL + '/aussaat-und-bepflanzung',component: AussaatUndBepflanzung, questions: [
        ]},
        {name: 'Düngen und Bewässern', path: process.env.PUBLIC_URL + '/duengen-und-bewaessern',component: DuengenUndNachwaessern, questions: [
        ]},
        {name: 'Schädlinge und Unkraut', path: process.env.PUBLIC_URL + '/schaedlinge-und-unkraut',component: SchadelingeUndUnkraut, questions: [
        ]},
        {name: 'Nach der Ernte', path: process.env.PUBLIC_URL + '/nach-der-ernte',component: NachDerErnte, questions: [
        ]}
      ]},
      {name:'Gängige Pflanzen', themes: [
        {name: 'Tomate', path: process.env.PUBLIC_URL + '/tomate',component: PageOne, questions: [
        ]},
        {name: 'Salat', path: process.env.PUBLIC_URL + '/salat',component: PageOne, questions: [
        ]},
        {name: 'Gurke', path: process.env.PUBLIC_URL + '/gurke',component: PageOne, questions: [
        ]},
        {name: 'Erdbeere', path: process.env.PUBLIC_URL + '/erdbeere',component: PageOne, questions: [
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
    if(this.latest.length > 3) this.latest.splice(3,1)
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

  resetProgress(){
    this.chapters.forEach(c=>{
      c.themes.forEach(t=>{
        t.questions.forEach(q=>{
          q.answered = false
        })
        t.quizComplete = false
      })
    })
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
    return {chapter: activeChapterIndex, theme: activeThemeIndex}
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
      case 'RESET_PROGRESS': {
        this.resetProgress()
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
