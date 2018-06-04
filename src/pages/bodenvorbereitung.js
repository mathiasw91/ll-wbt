import React from "react"


class Bodenvorbereitung extends React.Component {


//https://www.mein-schoener-garten.de/gemuesebeet-651#bodenvorbereitung

  render() {
    let liStyle = {margin: '15px 10px'}
    return (
      <div>
        <h1>Bodenvorbereitung</h1>

        <h2><i class="fa fa-leaf"></i> Boden bearbeiten</h2>
        <div style={{display: 'flex'}}>
          <img src={'assets/beet-abstecken.jpg'} style={{height: '300px', marginRight: '10px'}}/>
          <div>
            <p style={{marginTop: '0px'}}>Nachdem das Gemüsebeet geplant ist geht es nun an die Umsetzung. Idealerweise beginnen Sie damit schon im Herbst, so ist das Beet fürs Frühjahr optimal vorbereitet. Bearbeiten Sie den Boden nur, wenn er trocken ist, um die Bildung von Bodenkrümeln zu vermeiden.<br/>Folgen sie diesen Arbeitsschritten:</p>
            <ol>
              <li style={liStyle}>Abstecken der Umrisse: Nutzen Sie dafür Holzstäbe und Schnüre. Manchmal macht es Sinn, die Beetform mit Kalk auf dem Boden abzustreuen.</li>
              <li style={liStyle}>Abtragen von Gras und Gründüngung mit einer Ziehhacke</li>
              <li style={liStyle}>Lockern des Bodens mit einer Grabegabel 20-30cm tief.</li>
              <li style={liStyle}>Ziehen von Reihen: Spannen Sie eine Schnur und ziehen mit einer Hacke dran entlang.</li>
            </ol>
          </div>
        </div>


        <h2><i class="fa fa-leaf"></i> Bodenverbesserung</h2>
        <p>Je nach Bodentyp gibt es unterschiedliche Maßnahmen zur Verbesserung:</p>
        <p><b>Leichte Sandböden</b> können Sie mit einigen Handvoll Gesteinsmehl verbessern.</p>
        <p><b>Lehmboden</b> wird mit Sand lockerer und durchlässiger.</p>
        <p><b>Schwere, tonige Böden</b> sollten Sie jährlich bereits im Herbst vor dem ersten Frost tiefgründig umgraben.</p>
        <p>Nachdem sie den Boden gelockert haben, wird er mit nährstoffreichem, reifem Kompost angereichert und die Oberfläche glatt gerecht. So erhalten Sie ein möglichst feinkrümeliges Beet. Da sich der Boden noch absetzt, sollte er mindestens eine Woche ruhen, bevor Sie darauf ansäen.</p>

      </div>
    )
  }
}


export default Bodenvorbereitung
