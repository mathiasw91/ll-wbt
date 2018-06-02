import React from "react"


class AuswahlDerPflanzen extends React.Component {
  state = {
    tableVisible: false
  }

//https://www.mein-schoener-garten.de/gemuesebeet-651#mischkultur

  toggleTable(){
    this.setState({tableVisible: !this.state.tableVisible})
  }

  render() {
    return (
      <div>

        <h1>Auswahl der Pflanzen</h1>
        <h2><i class="fa fa-leaf"></i> Mischkultur</h2>
        <p>Baut man nur eine Art Pflanze an, wird der Boden einseitig ausgelaugt und Schädlinge und Krankheiten können sich rasant verbeiten. Deshalb ist es zwingend ratsam unterschiedliche Gemüsearten zu kombinieren, so dass diese nebeneinander gedeihen und voneinander profitieren können. Diese harmonische Pflanzengemeinschaft bezeichnet man als Mischkultur.  Sie eignet sich besonders für kleine Gärten, in denen ein richtiger Fruchtwechsel zu aufwändig wäre. Für eine erfolgreiche Mischkultur ist es wichtig die Eigenschaften seiner Pflanzen zu kennen. <br />Als Hilfe dient folgende Tabelle: <span onClick={this.toggleTable.bind(this)} style={{fontWeight: 'bold', color: 'rgb(6, 97, 27)'}}>{this.state.tableVisible? 'ausblenden':'einblenden'}</span></p>
        {this.state.tableVisible === true && (<img src={'assets/Mischkultur-Tabelle.jpg'} />)}

        <h2><i class="fa fa-leaf"></i> Fruchtwechsel und Fruchtfolge</h2>
        <p>Fruchtwechsel und Fruchtfolge bezeichnet ein zeitlich gebundenes Rotationssystem, bei dem die Gemüsearten jedes Jahr ein Beet weiter wandern. Man unterscheidet die Pflanzen zwischen Stark-, Mittel- und Schwachzehrern. Auf einem gut gedüngten Gemüsebeet wachsen im ersten Jahr die Starkzehrer, im zweiten die Mittel- und im dritten Jahr die Schwachzehrer. So wird sichergestellt, dass Pflanzen aus der selben Familie nicht in zwei aufeinanderfolgenden Jahren im selben Beet wachsen. Sonst ist die Gefahr groß, dass der Boden einseitig auslaugt, denn verwandte Pflanzen haben oft einen ähnlichen Nährstoffbedarf.</p>

        <table style={{width:'100%', textAlign: 'left'}}>
          <tr>
            <th style={{border: '3px solid #d50114', background: '#d50114'}}>Starkzehrer</th>
            <th style={{border: '3px solid rgb(249, 172, 3)', background: 'rgb(249,172,3)'}}>Mittelzehrer</th>
            <th style={{border: '3px solid rgb(254, 253, 5)', background: 'rgb(254,253,5)'}}>Schwachzehrer</th>
          </tr>
          <tr>
            <td style={{border: '3px solid #d50114'}}>
              <ul>
                <li>Kohl</li>
                <li>Gurken</li>
                <li>Kartoffeln</li>
                <li>Lauch</li>
                <li>Sellerie</li>
              </ul>
            </td>
            <td style={{border: '3px solid rgb(249, 172, 3)'}}>
              <ul>
                <li>Zwiebeln</li>
                <li>Möhren</li>
                <li>Salat</li>
                <li>Spinat</li>
                <li>Radieschen</li>
                <li>Kohlrabi</li>
              </ul>
            </td>
            <td style={{border: '3px solid rgb(254, 253, 5)'}}>
              <ul>
                <li>Bohnen</li>
                <li>Erbsen</li>
                <li>Kräuter</li>
              </ul>
            </td>
          </tr>
        </table>



        <p>Es gibt sowohl zwei-, drei- als auch vierjährige Fruchtfolgen. Bei der dreijährigen Fruchtfolge bieten sich drei Gemüsebeete an, auf denen die drei Gruppen im jährlichen Wechsel rotieren. Bei der vierjährigen Fruchtfolge, die sich besonders für sandige oder ständig kranke Böden (verursacht durch zum Beispiel Kohlhernie) eignet, wird der Garten in vier Beete oder Quartiere eingeteilt. Das Prinzip bleibt unverändert, außer dass Sie Gründüngungspflanzen wie Phacelia, Buchweizen oder andere Arten, die mit keiner Gemüseart verwandt sind, im vierten Beet säen, auf das dann im kommenden Jahr die Starkzehrer folgen. Sowohl bei der Mischkultur als auch bei der Fruchtfolge ist es unbedingt ratsam, dass Sie sich die Belegung der Beete und die angebauten Gemüsearten in einem Gartentagebuch festhalten. So wissen Sie im kommenden Jahr noch genau, wann Sie welches Gemüse auf welchem Beet kultiviert haben.</p>
        <img src={'assets/fruchtfolge.png'} style={{float:'left', marginRight: '10px'}}/>
        <span>Die Grafik zeit eine vierjährige Fruchtfolge. <br/>(Quelle: https://www.mein-schoener-garten.de)</span><div class="clearfix"></div>


      </div>
    )
  }
}


export default AuswahlDerPflanzen
