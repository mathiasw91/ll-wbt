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
import HochHuegelBeetDragnDrop from '../quizes/hochhuegelbeet-dragndrop'
import BodenBearbeitenSort from '../quizes/bodenbearbeiten-sort'
import ZehrerDnD from '../quizes/zehrer-dnd'
import mittelschwererlehmboden from '../assets/quiz/lehmboden.jpg'
import tonboden from '../assets/quiz/tonboden.jpg'
import sandigerlehmboden from '../assets/quiz/sandiger-lehm.jpg'
import humusboden from '../assets/quiz/humus.jpg'


class AppStore extends EventEmitter {
  constructor(){
    super()

    this.chapters = [
      {name:'Planen und Vorbereiten', themes: [
        {name: 'Standort und Boden', path: process.env.PUBLIC_URL + '/standort-und-boden',component: StandortUndBoden, questions: [
          {id: 0, question: 'Wann ist der ideale Zeitpunkt, ein eigenes Gemüsebeet anzulegen?',
            feedback: 'Sobald der Bodenfrost vorrüber ist, können die ersten Gemüsekulturen ausgesät werden.', answers: [
            {content: 'Frühling.', correct: true},
            {content: 'Sommer', correct: false},
            {content: 'Herbst', correct: false},
            {content: 'Winter', corret: false}
          ]},
          {id: 1, question: 'Ein möglichst windstiller Platz unter schattenwerfenden Bäumen ist die ideale Lage für ein Gemüsebeet.',
          feedback: 'Gemüse gedeiht am besten unter Sonne. Windstille Ecken ziehen Schädlinge an.', answers: [
            {content: 'Richtig', correct: false},
            {content: 'Falsch', correct: true},
            // {content: {type: 'img', src: testimg}, correct: true}
          ]},
          {id: 2, question: 'Welches der folgenden Bilder zeigt einen Tonboden?',
          feedback: 'Tonboden ist leicht glänzend und matschig.', answers:[
            {content: {type: 'img', src: mittelschwererlehmboden}, correct: false},
            {content: {type: 'img', src: tonboden}, correct: true},
            {content: {type: 'img', src: sandigerlehmboden}, correct: false},
            {content: {type: 'img', src: humusboden}, correct: false}
          ]}
        ]},
        {name: 'Form des Beetes', path: process.env.PUBLIC_URL + '/form-des-beetes',component: FormDesBeetes, questions: [
          {id: 0, question: 'Welche Maßnahme hilft zum Schutz vor Schädlingen?',
          feedback: 'Eine Einfassung schirmt das Beet nach außen ab und bietet somit eine Barriere für viele Tiere.', answers: [
            {content: 'Eine rechteckige Form des Beetes', correct: false},
            {content: 'Die Pflanzen in Reihen anzuordnen', correct: false},
            {content: 'Das gesamte Beet einfassen', correct: true},
            {content: 'Trittwege aus Platten oder Rindmulch anzulegen', correct: false}
          ]},
          {id: 1, component: HochHuegelBeetDragnDrop}
        ]},
        {name: 'Bodenvorbereitung', path: process.env.PUBLIC_URL + '/bodenvorbereitung',component: Bodenvorbereitung, questions: [
          {id: 0, question: 'Wodurch kann die Bildung von Bodenkrümeln vermiden werden?',
          feedback: 'Die Krümel entstehen durch das Trocknen der Erde', answers: [
            {content: 'Den Boden nur im feuchten Zustand bearbeiten', correct: false},
            {content: 'Den Boden nur im trockenden Zustand bearbeiten', correct: true}
          ]},
          {id: 1, question: 'Welcher Bodentyp kann durch Zugabe von Sand verbessert werden?',
          feedback: 'Der Sand macht den Boden lockerer und durchlässiger', answers: [
            {content: 'Leichte Sandböden', correct: false},
            {content: 'Lehmboden', correct: true},
            {content: 'Schwere, tonige Böden', correct: false}
          ]},
          {id: 2, component: BodenBearbeitenSort}
        ]},
      ]},
      {name:'Anlegen und Pflegen', themes: [
        {name: 'Auswahl der Pflanzen', path: process.env.PUBLIC_URL + '/auswahl-der-pflanzen',component: AuswahlDerPflanzen, questions: [
          {id: 0, question: 'Für welche Böden eigenet sich die vierjährige Fruchtfolge besonders?', multiple: true, answers: [
            {content: 'Sandige Böden', correct: true},
            {content: 'Böden die viel Feuchtigkeit erhalten', correct: false},
            {content: 'Böden die wenig Feuchtigkeit erhalten', correct: false},
            {content: 'Ständig kranke Böden', correct: true}
          ]},
          {id: 1, question: 'Was versteht man unter Mischkultur?', answers: [
            {content: 'Die Pflanzen farblich gemischt anzubauen', correct: false},
            {content: 'Ein zeitlich gebundenes Rotationssystem beim Anbau', correct: false},
            {content: 'Unterschiedliche Gemüsearten kombiniert anzubauen', correct: true},
            {content: 'Die Pflanzen auf unterschiedliche Beete aufzuteilen', correct: false}
          ]},
          {id: 2, component: ZehrerDnD},

        ]},
        {name: 'Aussaat und Bepflanzung', path: process.env.PUBLIC_URL + '/aussaat-und-bepflanzung',component: AussaatUndBepflanzung, questions: [
          {id: 0, question: 'Wie erfährt man den richtigen Zeitpunkt um eine Gemüseart auszusäen?',
          feedback: 'Auf der Saattüte findet man hilfreiche Informationen zur Aussaat der Gemüseart.', answers: [
            {content: 'Der Zeitpunkt wann man aussät ist egal', correct: false},
            {content: 'Man sät zu erst eine kleine Menge zum Testen aus. Dies wiederholt man so lange, bis die Pflanzen anschlagen.', correct: false},
            {content: 'Alle Gemüsearten werden im Frühjahr gesät', correct: false},
            {content: 'Der Termin ist auf der Saattüte nachzulesen', correct: true}
          ]},
          {id: 1, question: 'Welche der folgenden Hinweise zum Säen sind korrekt?',
          multiple: true, answers: [
            {content: 'Der empfohlene Abstand zwischen den Samen ist zu beachten', correct: true},
            {content: 'Je mehr Saatgut auf einer Stelle liegt, desto höher die Erfolgschancen', correct: false},
            {content: 'Ein frisch ausgesäter Samen verträgt noch nicht viel Feuchtigkeit und ist deshalb möglichst trocken zu halten', correct: false},
            {content: 'Feuchte Säcke auf dem Saatbeet schützen vor Austrocknung', correct: true}
          ]},
          {id: 2, question: 'Welche der folgenden Pflanzen müssen besonders tief eingepflanzt werden?', multiple: true,
          feedback: 'Lauch und Tomate setzt man tiefer. Sellerie, Salat und Paprika müssen höher im Beet stehen.', answers: [
            {content: 'Lauch', correct: true},
            {content: 'Paprika', correct: false},
            {content: 'Salat', correct: false},
            {content: 'Sellerie', correct: false},
            {content: 'Tomate', correct: true}
          ]}
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
