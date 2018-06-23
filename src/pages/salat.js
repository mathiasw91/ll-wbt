import React from "react"

//https://www.knorr.com/de/Inspiration/alles-zu-salat/salatsorten.html
//https://www.lecker.de/rezepte/salatsorten
//https://www.mein-schoener-garten.de/pflanzen/gemuese/salat-5441#sorten
//https://www.mein-schoener-garten.de/gartenpraxis/nutzgaerten/salatsorten-fuer-jede-jahreszeit-29646
//https://www.mein-schoener-garten.de/gartenpraxis/nutzgaerten/salatsorten-fuer-jede-jahreszeit-29646

class Salat extends React.Component {

  state = {
    spanOpen: 'eisberg'
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
        <h1>Bonusthema - Salat</h1>

        <h2><i class="fa fa-leaf"></i> Verschiedene Sorten</h2>
        <p>Vom Frühjahr bis zum Herbst frischen Salat zu ernten gelingt leicht, wenn man alle paar Wochen neu aussät und für jeden Anbautermin die richtigen Salatsorten auswählt.</p>
        <span style={spanStyle} onClick={this.openSpan.bind(this, 'eisberg')}>Eisbergsalat {this.state.spanOpen == 'eisberg'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'eisberg' && (<div style={divStyle}>
          <img src={'assets/eisbergsalat.jpg'} style={imgStyle}/>
          <p>Ein vielfältiger Salat, mit knackigen Blättern, die beim Draufbeißen krachen und wegen des hohen Wassergehalts erfrischen. Die milden Blätter schmecken sehr neutral und lassen sich deshalb mit verschiedenen Zutaten nach belieben kombinieren. Er ist lange haltbar und hält sich im Kühlschrank bis zu einer Woche.</p>
          <p>Saison: Mai bis Oktober</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'kopf')}>Kopfsalat {this.state.spanOpen == 'kopf'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'kopf' && (<div style={divStyle}>
          <img src={'assets/kopfsalat.jpg'} style={imgStyle}/>
          <p>Der Kopfsalat wird wegen seines milden Geschmacks und seiner zarten Blätter geliebt. Er enthält einen Wasseranteil von 95 Prozent und ist deshalb sehr energiearm. Kopfsalat wird schnell welk und hält im Kühlschrank höchstens ein bis zwei Tage.</p>
          <p>Saison: Mai bis November</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'roemer')}>Römersalat {this.state.spanOpen == 'roemer'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'roemer' && (<div style={divStyle}>
          <img src={'assets/roemersalat.jpg'} style={imgStyle}/>
          <p>Unverzichtbar im Caesars Salad: Römersalat wird traditionell für den amerikanischen Salat-Klassiker verwendet. Die knackigen, würzigen Außenblätter vom Römersalat umhüllen ein helleres, mildes Herz. Die Blätter vom Römersalat dürfen nicht schlaff oder welk, das Herz muss fest geschlossen sein. Römersalat-Herzen werden auch separat verkauft. Römersalat schmeckt kräftiger als Kopfsalat und verträgt deshalb würzig-cremige Soßen und Zutaten wie Käse. Wickeln Sie Römersalat in feuchtes Küchenpapier und geben Sie den Römersalat in eine Plastiktüte oder -dose. So bleibt Römersalat im Gemüsefach des Kühlschranks bis zu fünf Tage frisch.</p>
          <p>Saison: Mai bis Oktober</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'endivie')}>Endivie {this.state.spanOpen == 'endivie'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'endivie' && (<div style={divStyle}>
          <img src={'assets/endiviensalat.jpg'} style={imgStyle}/>
          <p>Endiviensalat hat ein ausgewogenes, süßlich-bitteres Aroma und knackige, grüne Blätter. Der glatte Endiviensalat schmeckt dabei etwas weniger bitter als der krause Endiviensalat - auch Friséesalat genannt. Frischer Endiviensalat hat keine welken Blätter oder braune Schnittflächen. Zum süßlich-bitteren Endiviensalat schmecken fruchtige Dressings und herzhafte Zutaten wie Speck und Käse. In feuchtes Küchenpapier gewickelt und in einer Plastiktüte verpackt können Sie Endiviensalat ein bis zwei Tage im Kühlschrank lagern. Am besten verwenden Sie Endiviensalat aber noch am Einkaufstag.</p>
          <p>Saison: Mai bis November</p>
        <div class="clearfix"></div></div>)}



        <h2><i class="fa fa-leaf"></i> Standort und Boden</h2>
        <p>Salat stellt keine hohen Ansprüche an den Boden, nur saure Böden und zur Verschlämmung neigende schwere Böden mag er nicht. Auf leichten Sandböden müssen Sie gut wässern, aber diese Böden erwärmen sich im Frühjahr dafür auch rascher und man kann früher ernten. Idealerweise säen oder pflanzen Sie Ihren Salat in einen tiefgründig gelockerten Boden, der humusreich und stickstoffarm ist. Im Frühjahr sollten Sie dem Salat das sonnigste Beet geben, bei der Sommerkultur fühlt er sich an einem kühleren Plätzchen wohler</p>

        <h2><i class="fa fa-leaf"></i> Aussaat</h2>
        <p>Salat ist ein Lichtkeimer. Übersieben Sie deshalb das Saatgut nur sehr dünn mit Sand. Die optimale Keimtemperatur ist sortenabhängig, bei vielen Sorten kommt es bei Temperaturen über 20 Grad Celsius aber zur Keimhemmung. Liegt die Temperatur unter der optimalen Keimtemperatur, dauert es etwas länger, bis die Saat aufgeht. In den meisten Regionen kann ab Ende März/Anfang April ins Freiland ausgesät werden. Wenn Sie den ganzen Sommer über frischen Salat ernten wollen, säen Sie einfach bis in den September hinein alle 14 Tage nach. Im Sommer ist eine Schattierung des Saatbeets zu empfehlen, damit sich der Boden nicht zu stark erwärmt.</p>

        <h2><i class="fa fa-leaf"></i> Pflege</h2>
        <div style={{display: 'flex'}}>
          <img src={'assets/tomate-giessen.jpg'} style={{height: '200px',marginRight: '10px'}}/>
          <div>
          <p style={{marginTop:'0px'}}>Salat muss regelmäßig gegossen werden, denn sonst werden die Blätter hart, die Pflanzen wachsen langsam und neigen zum Schießen. Wird der Salat fester und die Köpfe beginnen sich zu schließen, sollten Sie weniger und vorsichtiger gießen, und zwar möglichst nicht über die Köpfe, sondern direkt auf die Erdoberfläche. Auf gutem Gartenboden müssen Sie den Salat nicht zusätzlich düngen. Außerdem sollten Sie auf keinen Fall vor dem Anbau Stallmist ausbringen, denn das fördert Fäulnis. Wenn Sie den Boden mulchen, bleibt er unkrautfrei und feucht. Wer nicht mulcht, muss regelmäßig hacken, um die Verdunstung zu senken.</p>

          </div>
        </div>



      </div>
    )
  }
}


export default Salat
