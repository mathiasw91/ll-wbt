import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

import * as AppActions from '../flux/AppActions'

class Home extends React.Component {



  render() {
    return (<div id="home">
      <h1>Mein erstes Gemüsebeet - Einleitung</h1>
      <div id="home-boxes">
        <div id="home-start">
          <h2><i class="fa fa-leaf"></i> Einleitung</h2>
          <p>Eine gesunde und kostengünstige Alternative zum Supermarkteinkauf bietet das eigene Gemüsebeet. Allerdings fehlen vielen hierzu die nötigen Kenntnisse im Gartenbau.<br/>
            Dieses WBT liefert das nötige Grundwissen, um ein eigenes Gemüsebeet, bestehend aus verschiedenen Nutzpflanzen, zu planen, anzulegen und zu betreiben.<br/>
            Zur Zielgruppe gehört jeder, der seinen eigenen kleinen Gemüsegarten haben möchte. Es zielt auf Garten-Anfänger ab und setzt deshalb keine Vorkenntnisse im Gartenbau voraus.
          </p>

          <h2><i class="fa fa-graduation-cap"></i> Lernziele</h2>
          <p>Im ersten Kapitel lernen Sie wie man ein Beet plant und vorbereitet. Dazu gehört die Analyse des Standortes und des Bodens, sowie die Wahl einer passenden Form des Beetes. Außerdem die notwendigen Maßnahmen zur Verbesserung des Bodens.<br/>
          Im zweiten Kapitel lernen Sie ihr Beet anzulegen und zu pflegen. Dazu gehört die Auswahl und Aussaat der Pflanzen, sowie Düngung, Bewässerung und Schädlings- und Unkrautbekämpfung. Außerdem noch die Pflege und Maßnahmen nach der Ernte.</p>
          <p>Jedes Thema besteht aus Lerninhalten, gefolgt von einem Quiz. Ein Thema ist dann abgeschlossen, wenn jede Aufgabe des Quizes korrekt gelöst wurde. Sind alle Themen eines Kapitels gelöst, wird ein Bonus-Thema freigeschaltet, welches nützliche Tipps zu einer gängigen Pflanze bietet.</p>
          <p>Sind alle Themen aus beiden Kapiteln gelöst, wird das Abschlussquiz freigeschaltet. Dies dient zum Wiederholen und Festigen aller Themengebiete.</p>

          <h2><i class="fa fa-hourglass-start"></i> Bearbeitungszeit</h2>
          <p>Die Bearbeitungszeit für dieses WBT beträgt circa 60 Minuten.</p>
        </div>

      </div>
    </div>)

  }

}


export default withRouter(Home)
