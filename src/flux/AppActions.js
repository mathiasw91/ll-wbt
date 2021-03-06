import Dispatcher from './Dispatcher'

export function toggleChapter(id){
  Dispatcher.dispatch({
    type: 'TOGGLE_CHAPTER',
    id,
  })
}

export function updateLatest(theme){
  Dispatcher.dispatch({
    type: 'UPDATE_LATEST',
    theme,
  })
}

export function setQuestionAnswered(id){
  Dispatcher.dispatch({
    type: 'SET_QUESTION_ANSWERED',
    id,
  })
}

export function resetProgress(){
  Dispatcher.dispatch({
    type: 'RESET_PROGRESS',
  })
}

export function resetQuiz(){
  Dispatcher.dispatch({
    type: 'RESET_QUIZ',
  })
}

export function resetChapterCompleteMsg(){
  Dispatcher.dispatch({
    type: 'RESET_CHAPTER_COMPLETE_MSG',
  })
}

export function resetAbschlussquiz(){
  Dispatcher.dispatch({
    type: 'RESET_ABSCHLUSSQUIZ',
  })
}
