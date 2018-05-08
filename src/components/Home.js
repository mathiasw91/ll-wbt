import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

import * as AppActions from '../flux/AppActions'

class Home extends React.Component {



  render() {
    return (<div id="home">
      <h1>Übersicht</h1>
      <div id="home-boxes">
        <div id="home-start">
          <h2>Einleitung</h2>
          <p>Eine gesunde und kostengünstige Alternative zum Supermarkteinkauf bietet das eigene Gemüsebeet. Allerdings fehlen vielen hierzu die nötigen Kenntnisse im Gartenbau.<br/>
            Dieses WBT liefert das nötige Grundwissen, um ein eigenes Gemüsebeet, bestehend aus verschiedenen Nutzpflanzen, zu planen, anzulegen und zu betreiben.<br/>
            Zur Zielgruppe gehört jeder, der seinen eigenen kleinen Gemüsegarten haben möchte. Es zielt auf Garten-Anfänger ab und setzt deshalb keine Vorkenntnisse im Gartenbau voraus.
          </p>
          <p>Im WBT gibt es praktische Lerninhalte, welche parallel zur Arbeit am Beet als Anleitung genutzt werden können, und theoretische Lerninhalte, welche unabhängig bearbeitet werden können.</p>
          <p>Sie lernen, wie man ein Beet plant und vorbereitet. Dazu gehört die Analyse des Standortes und des Bodens, sowie die Wahl einer passenden Form des Beetes. Außerdem die notwendigen Maßnahmen zur Verbesserung des Bodens.<br/>
          Sie lernen, ihr Beet anzulegen und zu pflegen. Dazu gehört die Auswahl und Aussaat der Pflanzen, sowie Düngung, Bewässerung und Schädlings- und Unkrautbekämpfung. Außerdem noch die Pflege und Maßnahmen nach der Ernte.<br/>
          Zusätzlich werden Ihnen Informationen und Hinweise zu ausgewählten gängigen Pflanzen vermittelt.</p>
        </div>
        <div id="home-sidebar">
          <h2>Lernfortschritt</h2>
          {this.props.chapters.map(c=>(
            <span style={{display:"block"}}>{c.name}: {c.themes.filter(c=>c.quizComplete).length}&nbsp;/&nbsp;{c.themes.length}&nbsp;gelöst</span>
          ))}
          <button className="btn btn-default" style={{marginTop:"0.8em"}} onClick={AppActions.resetProgress}>Zurücksetzen</button>
          <h2>Letzte Kapitel</h2>
          {(this.props.latest.length != 0) && (<div id="latest-themes">
            {this.props.latest.map(theme=>(
              <Link to={theme.path}>{theme.name}</Link>
            ))}
          </div>)}
        </div>
      </div>
    </div>)

  }

}


export default withRouter(Home)
