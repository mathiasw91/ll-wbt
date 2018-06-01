import React from "react"


class StandortUndBoden extends React.Component {


  render() {
    let tableImgWidth = "250px"
    return (
      <div>
        <h1>Standort und Boden</h1>
        <h2><i class="fa fa-leaf"></i> Einwirkung der Witterungsbedingungen</h2>
        <p>
          Das Frühjahr ist ein idealer Zeitpunkt, um ein Gemüsebeet anzulegen. Sofern kein Bodenfrost mehr herrscht, können die ersten Gemüsekulturen bereits jetzt ausgesät werden. {/* http://www.liebedeinengarten.de/inspiration/gewusst-wie/gemuesebeet-anlegen */}
        </p><p>
          Um ein Gemüsebeet anzulegen, eignet sich am besten ein sonniger Platz im Garten. Dort gedeihen die meisten Gemüsearten und bilden so ihre wertvollen Inhaltsstoffe und nicht zuletzt ihren leckeren Geschmack aus. Schattenwerfende Bäume und Sträucher sollten Sie bei der Planung des Gemüsebeetes also außen vor lassen. Ein windgeschützter, aber nicht vollständig windstiller Platz im Garten ist ideal für Gemüsebeete. Eine gute Luftzirkulation in den Gemüsebeeten ist wichtig, damit Blätter bei eventuell auftretenden Pilzkrankheiten oder viel Niederschlag schnell abtrocknen. Außerdem fühlen sich Schädlinge in windstillen Ecken ganz besonders wohl. Mit niedrigen Schnitthecken (zum Beispiel Buchshecken), einem bepflanzten Zaun, kleinen Mäuerchen und Einfriedungen verbessern Sie das Kleinklima in Ihrem Gemüsebeet und schützen es gleichzeitig vor kalten Winden.
        </p>
        <h2><i class="fa fa-leaf"></i> Logistische Voraussetzungen</h2>
        <p>
          Schon beim Anlegen des Gemüsebeetes gibt es einige Punkte zu beachten. So ist es zum Beispiel wichtig, einen Wasseranschluss in unmittelbarer Nähe zu haben, damit Sie später für die Bewässerung nur kurze Wege zurücklegen müssen. Auch der Kompost sollte nicht allzu weit weg sein. Befindet sich das Haus und besonders der Zugang zur Küche direkt neben dem Gemüsebeet, kann man auch beim Kochen noch mal schnell ein paar frische Kräuter schneiden und ist im Nu wieder am Herd.
        </p>
        <h2><i class="fa fa-leaf"></i> Bodentypen</h2>
        <table class="valign-top">
          <tr>
            <td>
              <h4>Leichter Sandboden</h4>
              <p>Ein leichter Boden kann realtiv einfach mit Kompost oder Stallmist gut aufbereitet werden.</p>
            </td>
            <td>
              <img src={'assets/sandboden.jpg'} style={{width:tableImgWidth}}/>
            </td>
            <td>
              <h4>Mittelschwerer Lehmboden</h4>
              <p>Die Aufbereitung ist bei diesen Böden eher zeit- und arbeitsintensiv.</p>
            </td>
            <td>
              <img src={'assets/lehmboden.jpg'} style={{width:tableImgWidth}}/>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Schwerer Tonboden</h4>
              <p>Die Aufbereitung ist bei diesen Böden eher zeit- und arbeitsintensiv.</p>
            </td>
            <td>
              <img src={'assets/tonboden.jpg'} style={{width:tableImgWidth}}/>
            </td>
            <td>
              <h4>Lehmiger Sand oder sandiger Lehm</h4>
              <p>Eignet sich gut für den Anbau von Gemüse.</p>
            </td>
            <td>
              <img src={'assets/sandiger-lehm.jpg'} style={{width:tableImgWidth}}/>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Lockerer Humus</h4>
              <p>Ein lockerer, humus-, sowie nährstoffreicher Boden ist am besten dazu geeignet, um ein Gemüsebeet anzulegen.</p>
            </td>
            <td>
              <img src={'assets/humus.jpg'} style={{width:tableImgWidth}}/>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}


export default StandortUndBoden
