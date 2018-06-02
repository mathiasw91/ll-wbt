import React from "react"


class FormDesBeetes extends React.Component {


//https://www.mein-schoener-garten.de/gemuesebeet-651#laenge-breite
//https://www.selbstversorgerland.de/garten/boden-naehrstoffe/gemuesebeet-anlegen-1740

  render() {
    return (
      <div>
        <h1>Form des Beetes</h1>
        <h2><i class="fa fa-leaf"></i> Länge und Breite</h2>
        <p>Grundsätzlich hat man bei der Gestaltung des Gemüsebeetes alle Freiheiten. Für eine leichte Pflege empfiehlt es sich jedoch, das Beet rechteckig anzulegen und die Pflanzen in Reihen anzuordnen. In jedem Fall sollte man Laufwege einplanen, um leicht an die Pflanzen zu gelangen. Eine Breite von ca. 120cm beitet sich an, damit man von allen Seiten bequem mit einer Armlänge arbeiten kann und nicht auf die bepflanzte Fläche treten muss. Der Hauptweg sollte mit mindestens 60cm breit genug sein, um ihn mit einem Schubkarren zu befahren. Für die Nebenwege sind 30cm ausreichend. Baut man das Beet an einem Berg, so bietet sich eine Ausrichtung quer zum Hang an, damit dass Regenwasser abfließen kann.</p>

        <h2><i class="fa fa-leaf"></i> Benötigte Größe</h2>
        <p>Die Anzahl und Größe der Gemüsebeete hängt davon ab, wie viel Gemüse man genötigt. Es gelten folgende Richtwerte (pro Person):</p>
        <ul>
          <li>Totale Selbstversorgung: mindestens 80m&sup2;</li>
          <li>Überwiegende Selbstversorgung: 40-80m&sup2;</li>
          <li>Teilweise Selbstversorgung: 20-40m&sup2;</li>
          <li>Ergänzende Versorbung: 1-20m&sup2;</li>
        </ul>

        <h2><i class="fa fa-leaf"></i> Beeteinfassung</h2>
        <p>Eine Einfassung um das gesamte Beet beitet Schutz vor Schädlingen und hält zusätzlich die Erde im Beet. Für maximalen Schutz empfiehlt sich eine Einfassung aus Beton- oder Naturstein, welche jedoch teurer sein können. Zu naturnahren Gärten passen Einfassungen aus Holz oder Flechtzäune aus Weiden. Die Einfassung sollte mindestens 20cm tief in den Boden eingegraben werden. Für die Trittwege auf dem Beet kann man Gehwegplatten oder Rindmulch benutzen.</p>

        <h2><i class="fa fa-leaf"></i> Beettypen</h2>
        <p style={{marginBottom: '0px'}}>Vor allem auf schweren Böden lohnt es sich, den Anbau des Gemüses eine Etage höher zu legen. Dabei gibt es mehrere Möglichkeiten:</p>
        <div style={{display:'flex'}}>
          <div style={{paddingRight: '10px'}}>
            <h3 style={{margin: '7px 0px'}}>Hügelbeet</h3>
            <img src={'assets/huegelbeet.jpg'} style={{float: 'left', marginRight: '15px'}} />
            <p class="no-margin-top">Ein Hügelbeet besteht im Kern aus Gestrüpp, darüber folgen umgedrehte Grassoden, Laub sowie eine Schicht grober Kompost oder Stallmist. Die Grundfläche sollte etwa 1,50 Meter breit und fünf Meter lang sein. Ein Vorteil des Hügelbeetes ist, dass das Hügelinnere im Vergleich zum Boden gut durchlüftet ist und die Wurzeln nicht im Wasser stehen. Außerdem müssen Sie sich bei der Pflege des Beetes weniger tief bücken als bei ebenerdigen Reihenbeeten. Nachteile des Hügelbeetes sind Wühlmäuse, die sich gern im Innern der Wölbung aufhalten sowie die Tatsache, dass Sie das Beet häufiger gießen müssen, weil Wasser aus tieferen Bodenschichten fehlt.</p>
          </div>
          <div>
            <h3 style={{margin: '7px 0px'}}>Hochbeet</h3>
            <img src={'assets/hochbeet.jpg'} style={{float: 'left', marginRight: '15px'}} />
            <p class="no-margin-top">Ein Hochbeet wird ähnlich geschichtet wie ein Hügelbeet. Aus langlebigem Lärchen-, Eichen-, oder Robinienholz gebaut, ist das Hochbeet nicht nur praktisch, sondern auch ein Hingucker im Garten. Im Innern der Holzwand sollte eine Noppenfolie angebracht werden, die die Konstruktion vor Feuchtigkeit schützt. Am Boden halten ein engmaschiges Gitter oder Hohllochziegel Wühlmäuse fern. Wenn Sie das Beet so befüllen wie das Hügelbeet, müssen Sie immer wieder Erde und Kompost nachfüllen, da sich die Schichten mit der Zeit absenken. Ein großer Vorteil des Hochbeetes ist der individuelle Zuschnitt auf die Wünsche des Gärtners. Eine Höhe von 70 bis 90 Zentimetern hat sich für ein rückenschonendes Arbeiten bewährt – sie kann aber individuell an die eigene Körpergröße angepasst werden. Ein Hochbeet erfordert zwar einen einmaligen Zeit- und Kostenaufwand, ist dann aber relativ langlebig und wenig pflegeintensiv.</p>
          </div>
        </div>


      </div>
    )
  }
}


export default FormDesBeetes
