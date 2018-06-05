import React from "react"


//http://www.garten-des-lebens.de/f1-oder-samenfest-wo-liegt-der-unterschied/
//https://www.mein-schoener-garten.de/gartenpraxis/nutzgaerten/tomaten-tipps-fuer-eine-reiche-ernte-5556
//https://www.tomaten-welt.de/tomaten/tomatensorten/

class Tomate extends React.Component {

  state = {
    spanOpen: 'kirsch'
  }

  openSpan(item){
    this.setState({spanOpen: item})
  }

  render() {

    let spanStyle = {fontWeight: 'bold', display: 'block', marginBottom: '7px', cursor: 'pointer', color: 'rgb(6, 97, 27)'}
    let divStyle = {marginBottom: '10px'}
    let imgStyle = {width: '200px', float: 'left', marginRight: '10px'}
    return (
      <div>
        <h1>Bonusthema - Tomate</h1>

        <h2><i class="fa fa-leaf"></i> Verschiedene Arten</h2>
        <p>Das Sortenregister führt über 3.800 verschiedene Tomatensorten. Um die Sortenvielfalt zu gliedern, werden Tomaten in verschiedene Gruppen unterteilt. Die Übergänge zwischen den Gruppen sind fließend und die Tomatensorten fallen immer in mehrere Kategorien.<br/>Hier sind einige der gängisten Sorten im Gemüsebeet:</p>
        <span style={spanStyle} onClick={this.openSpan.bind(this, 'kirsch')}>Kirschtomate {this.state.spanOpen == 'kirsch'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'kirsch' && (<div style={divStyle}>
          <img src={'assets/kirschtomate.jpg'} style={imgStyle}/>
          <p>Die Kirschtomate hat sehr kleine Früchte, die nur bis zu 20g wiegen. Der Geschmack ist meist sehr süß, die Form kann rund, oval oder länglich sein. Es gibt sie in rot, gelb und orange. Besoders süße Sorte, die hauptsächlich für den Verzehr durch Kinder gedacht sind werden auch Naschtomate genannt.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'fleisch')}>Fleischtomate {this.state.spanOpen == 'fleisch'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'fleisch' && (<div style={divStyle}>
          <img src={'assets/fleischtomate.jpg'} style={imgStyle}/>
          <p>Die Fleischtomate hat große Früchte mit vielen Kammern. Fleischtomaten sind spätreifend und brauchen sehr viel Wärme und Sonnenlicht. Fleischtomaten eigenen sich sehr gut zum aushüllen für Grillgerichte.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'rispen')}>Rispentomate {this.state.spanOpen == 'rispen'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'rispen' && (<div style={divStyle}>
          <img src={'assets/rispentomate.jpg'} style={imgStyle}/>
          <p>Bei der Rispentomate bleiben die Früchte auch ausgereift noch lange an der Rispe hängen, ohne abzufallen. Deshalb ist es möglich mit der Ernte zu warten, bis alle Früchte einer Rispe reif sind. Bei der Rispentomate muss daher seltener gepflückt werden und die voll ausgereifte Früchte sind bei der Ernte somit sehr geschmackvoll. Die Früchte kommen typischerweise noch an der Rispe hängend in den Handel.</p>
        <div class="clearfix"></div></div>)}



        <h2><i class="fa fa-leaf"></i> Saatgut</h2>
        <p>Bei Saatgut unterscheidet man zwischen den traditionellen samenfesten Arten und dem neu aufkommenden F1 Arten. Samenfeste Sorten wurden über mehrere Jahre auf bestimmte Eigenschaften gezüchtet. Pflanzt man ihr Saatgut, so erhält man wieder Pflanzen mit den selben Eigenschaften. Hat man diese geerntet, kann man aus den Früchten das Saatgut für die nächste Saat benutzen, sie sind damit nachbaufähig. F1 sind sogenannte Hybride-Züchtungen. Dafür werden zwei Sorten gekreuzt, zwecks Kombinierung von Eigenschaften nach belieben.</p>
        <p>Die F1 Sorten locken durch ihre Vielfalt an Eigenschaften, haben jedoch den Nachteil, dass man jedes Jahr wieder in das teure Saatgut investieren muss.</p>

        <h2><i class="fa fa-leaf"></i> Standort und Boden</h2>
        <p>Gönnen Sie den Tomaten einen möglichst sonnigen Platz in nährstoffreicher Erde. Drei bis fünf Liter Kompost pro Quadratmeter, nach der Bodenvorbereitung ausgestreut, sichern die Grundversorgung mit Nährstoffen und verbessern den Humusgehalt des Bodens. Auch wenn Tomatenpflanzen sich untereinander gut vertragen: Wechseln Sie jährlich das Beet! Stehen die Pflanzen stets an derselben Stelle, können sich Bodenschädlinge wie Wurzelälchen und die Erreger der Korkwurzelkrankheit vermehren.</p>

        <h2><i class="fa fa-leaf"></i> Aussaat</h2>
        <p>Da Tomaten keinen Frost vertragen, sollten Sie mit dem Auspflanzen ins Freie sicherheitshalber bis zum 20. Mai warten, denn dann sind die Eisheiligen vorbei. Wer früh ernten will, kann die Setzlinge in milden Lagen auch schon Ende April ins Freiland auspflanzen und bei Nachtfrostgefahr mit einer Folienhaube abdecken. Nehmen Sie die Abdeckung gleich morgens wieder ab und achten Sie darauf, dass die Folienhaube Abstandsringe und Luftlöcher besitzt. Vermeiden Sie unbedingt den Kontakt zwischen Blättern und Folie, denn das erhöht die Gefahr einer Pilzinfektion.</p>

        <h2><i class="fa fa-leaf"></i> Pflege</h2>
        <div style={{display: 'flex'}}>
          <img src={'assets/tomate-giessen.jpg'} style={{height: '200px',marginRight: '10px'}}/>
          <div>
          <p style={{marginTop:'0px'}}>Tomaten brauchen viele Nährstoffe. Düngen Sie die Pflanzen ab Beginn der Blütenbildung alle 14 Tage mit einem kaliumreichen Tomatendünger (Fachhandel) oder geben Sie etwas selbst hergestellte Brennnessel- oder Beinwelljauche ins Gießwasser. Beim Wässern gilt: Nie abwarten, bis der Boden völlig ausgetrocknet ist. Nicht nur die Früchte dünnschaliger Sorten wie ‘Yellow Pearshaped’ oder ‘Berner Rose’ platzen sonst leicht auf. Gießen Sie vor allem die überdachten Tomaten regelmäßig, in heißen Perioden auch täglich. Am besten wässern Sie am frühen Morgen. Solange die Erde noch kühl ist, sollte man temperiertes Wasser verwenden.</p>

          </div>
        </div>



      </div>
    )
  }
}


export default Tomate
