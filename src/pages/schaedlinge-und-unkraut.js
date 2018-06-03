import React from "react"


class SchadelingeUndUnkraut extends React.Component {


  //https://www.augsburger-allgemeine.de/geld-leben/Statt-Bodenanalyse-Unkraeuter-zeigen-Mangel-an-id37555842.html
  //https://www.gartenhaus-gmbh.de/magazin/pflanzenschaedlinge-umweltfreundlich-bekaempfen/
  //https://www.meine-ernte.de/rund-um-den-gemuesegarten/schaedlinge/schaedlinge0000/

  state = {
    spanOpen: 'ameisen'
  }

  openSpan(item){
    this.setState({spanOpen: item})
  }

  render() {

    let spanStyle = {fontWeight: 'bold', display: 'block', marginBottom: '7px', cursor: 'pointer', color: 'rgb(6, 97, 27)'}
    let divStyle = {}
    let imgStyle = {width: '200px', float: 'left', marginRight: '10px'}
    return (
      <div>
        <h1>Schädlinge und Unkraut</h1>

        <h2><i class="fa fa-leaf"></i> Bodenbeschaffenheit deuten</h2>
        <p>Eine umfangreiche Bodenanalyse ist in der Regel für den Hobbygärtner viel zu teuer und aufwändig. Alternativ kann man das wachsende Unkraut nutzen um die Bodenbeschaffenheit zu deuten. Die gewonnenen Erkentnisse können bei der Wahl des Düngemittels helfen.</p>
        <p><b>Verdichteter Boden und Staunässe:</b> Darauf wachsen Mädesüß, Acker-Schachtelhalm, Ackerminze, Huflattich, Ackerkratzdistel, Kriechender Hahnenfuß, Quecke, Gänsefingerkraut und Breitwegerich. Ein verdichteter Boden ist weniger gut in der Lage, Wasser zu speichern. Außerdem hat dichte Erde weniger Raum für Luft und lässt Nährstoffe schlechter durch. Die Wurzeln von Pflanzen, die mit dichtem Boden nicht klarkommen, haben es auch schwerer, sich auszubreiten. </p>
        <p><b>Sauer:</b> In dieser Erde gedeihen gut Hundskamille und der Kleine Sauerampfer, aber auch Ackerminze, Hasenklee und das Schmalblättrige Weidenröschen. In solchen Böden wachsen aber auch einige beliebte Gartenpflanzen gut, etwa Heidepflanzen, Kulturheidelbeeren und Azaleen.</p>
        <p><b>Reich an Stickstoff:</b> Brennnessel, Melde, Vogelmiere, Giersch, Franzosenkraut, Kletten-Labkraut, Kohl-Gänsedistel, Gartenwolfsmilch, Hirtentäschel, Persischer Ehrenpreis und Weißer Gänsefuß finden sich hier. Stickstoff ist einer der wichtigsten Nährstoffe für Pflanzen - an sich ist der Boden also gut. Doch man darf es dann mit dem Düngen nicht übertreiben, denn das kann die Anfälligkeit für Schaderreger erhöhen.</p>
        <p><b>Stickstoffarm:</b> Wilde Möhre, Ackerfuchsschwanz, Mauerpfeffer, Breitblättriger Hohlzahn und die Rauhaarige Wicke zeigen sich auf diesem Boden. Hier kann ein stickstoffbetonter Dünger gut sein.</p>
        <p><b>Nasser Boden:</b> Ampfer, Kohldistel und Wiesenschaumkraut zeigen an, dass sich hier auch Zierpflanzen wohlfühlen werden, die viel Feuchtigkeit brauchen.</p>
        <p><b>Trockener Boden:</b> Das Wachstum von Sommer-Adonisröschen, Reiherschnabel, Mittlerer Wegerich, Kleiner Storchenschnabel und Färberkamille sind ein Hinweis auf einen guten Standort für trockenheitsliebende Zierpflanzen.</p>

        <h2><i class="fa fa-leaf"></i> Vorbeugen</h2>
        <p>Obwohl wir das Unkraut zur Untersuchung der Bodenanalyse nutzen konnten, ist es nicht in unserem Interesse, dass es sich flächendeckend ausbreitet. Um dies zu vermeiden sollte man sein Beet mulchen. Mulchen bedeutet, die betroffenen Stellen mit Grasschnitt, Stroh oder Rinde etwa 5-10cm dick abzudecken. So nimmt man dem Unkraut das Licht zum Wachsen und verhindert zusätzlich, dass sich der Samen verteilen kann. Man sollte die Mulchschicht jedoch im Sommer auftragen, und nicht im Frühjahrt, da sich dann der Boden nicht schnell genug erwärmen kann. Durch regelmäßiges Lockern der Bodenschicht mit einer Ziehhacke bis Ende Mai können Unkräuter, Ackerschnecken und andere Schädlinge dezimiert werden.</p>
        <p>Auch gegen Schädlinge kann vorgebeugt werden. Engmaschige Netze blockieren Gemüsefliegen und Kohlweißlinge. Kunststoffzäune sowie Hochbeete halten Schnecken im Zaum.</p>

        <h2><i class="fa fa-leaf"></i> Schädlinge bekämpfen</h2>
        <p>Haben sich die Schädlinge erst einmal in ihrem Beet verbreitet ist dringend Handeln erforderlich. Welche Gefahren die unterschiedlichen Schädlinge darstellen, und wie darauf zu reagieren ist wird in den folgenden Abschnitten beschrieben.</p>

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'ameisen')}>Ameisen {this.state.spanOpen == 'ameisen'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'ameisen' && (<div style={divStyle}>
          <img src={'assets/ameise.jpg'} style={imgStyle}/>
          <p>Ameisen sind im Gemüsegarten sehr nützlich, da sie abgestorbene Pflanzenteile als Biomasse in den Boden bringen, dort mit ihren Gängen für Entlüftung sorgen oder sich von Schädlingen wie Drahtwürmer, Kohlweißlingsraupen oder Schneckeneiern ernähren. In zu großer Anzahl können sie aber lästig werden.</p>
          <p>Ameisen haben einen empfindlichen Geruchssinn, den wir uns zu Hilfe machen können. So können Zimtstangen, Zitronenscheiben, Tomatenblätter, Nelken oder Chilipulver die Ameisen vertreiben.<br/> Alternativ kann man einen mit Stroh gefüllten Top mit der Öffnung nach unten neben das Nest stellen. Die Ameisen werden diesen als neues Zuhause annehmen und umziehen.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'blattläuse')}>Blattläuse {this.state.spanOpen == 'blattläuse'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'blattläuse' && (<div style={divStyle}>
          <img src={'assets/blattlaus.jpg'} style={imgStyle}/>
          <p>Die Pflanzensaft saugenden Insekten können auf mehrfache Weise zu Schäden an Ihrem Gemüse führen. Durch starkes Saugen verformen sie die Blätter. Außerdem übertagen sie Pflanzenviren und ihre Ausscheidungen dienen als Nährboden für Rußtaupilze.</p>
          <p>Bevor man direkt die Blattläuse aktiv bekämpft sollte man erstmal abwarten, ob ihre natürlichen Feinde nicht die Arbeit übernehmen. Nehmen die Blattläuse jedoch Überhand, gibt es eine Reihe von biologischen Hausmitteln, die Sie gegen die Blattläuse anwenden können.</p>
          <ul>
            <li>Die Läuse mit einem scharfen Wasserstrahl von den Pflanzen spülen.</li>
            <li>Brennesseln über Nacht in Wasser einweichen und damit die Pflanzen besprühen.</li>
            <li>Knoblauch auskochen und das Wasser unverdünnt spritzen.</li>
            <li>Schmierseife in Wasser gelöst auf die Läuse sprühen.</li>
          </ul>
          <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'erdfloehe')}>Erdflöhe {this.state.spanOpen == 'erdfloehe'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'erdfloehe' && (<div style={divStyle}>
          <img src={'assets/erdflo.jpg'} style={imgStyle}/>
          <p>Meist an kleinen runden Fraßlöchern an Radieschen, Rukola oder Kohl erkennt man die Anwesenheit von Erdflöhen, die jedoch keine Flöhe, sondern kleine Käfer sind. Während die Schäden Jungpflanzen noch durchaus gefährlich werden können, sind sie bei größeren Pflanzen zu vernachlässigen.Wichtig ist jedoch, dass Sie das Gemüse trotz der Löcher bedenkenlos verzehren können und dass es genauso gut schmeckt.</p>
          <p>Weil Erdflöhe warmen und trockenen Boden lieben, ist die Vorbeugung und Regulierung recht einfach. Wässern und hacken Sie die Stellen, an denen Erdflöhe auftreten wiederholt. Zudem mögen die Tiere keine Zwiebelgewächse - Zwiebeln, Lauch oder Knoblauch als Nachbarn können ebenfalls helfen</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'kartoffelkaefer')}>Kartoffelkäfer {this.state.spanOpen == 'kartoffelkaefer'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'kartoffelkaefer' && (<div style={divStyle}>
          <img src={'assets/kartoffelkaefer.jpg'} style={imgStyle}/>
          <p>Der Käfer und seine Larven können innerhalb kurzer Zeit das Laub der Kartoffeln im großen Stil abfressen und so zu immensen Schäden führen. Finden sie kein Kartoffellaub mehr, wandern sie auf andere Nachtschattengewächse wie Tomaten oder vor allem Auberginen weiter. Nach der Saison überwintert der Käfer im Boden, um in der neuen Saison wieder Ausschau nach Kartoffeln zu halten.</p>
          <p>Zwar ist es unangenehm, doch die einzige Methode zur Bekämpfung ist, die Käfer und Larven per Hand aufzusammeln und zu töten. Am einfachsten ist es, die eingesammelten Tiere mit einer Plastiktüte abzudecken und zu tertreten.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'nacktschnecken')}>Nacktschnecken {this.state.spanOpen == 'nacktschnecken'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'nacktschnecken' && (<div style={divStyle}>
          <img src={'assets/nacktschnecken.jpg'} style={imgStyle}/>
          <p>Insbesondere in nassen Jahren gehören Nacktschnecken zweifellos zu den lästigsten Besuchern im Gemüsegarten. Durch ihre Gefräßigkeit können sie besonders an Salat zu Ausfällen führen, doch auch Wurzeln werden von ihnen nicht verschmäht. Und Ihre Eindämmung ist leider nicht so einfach.</p>
          <p>Ein Ansatz zur Bekämpfung ist das Einrichten einer Futterstelle vor dem Beet. Das Futter kann aus Gemüseresten bestehen und die Stelle sollte durch Petersilie, Salbei oder anderen Kräutern vom Beet abgegrenzt werden. Da die Schnecken diese Pflanzen nicht mögen, ist die Hoffnung, dass sie sich am Futter satt essen und dann nicht weiter zum Gemüsebeet vordringen.<br/> Außerdem kann man auf die natürlichen Feinden wie Igel, Mäuse, Vögel, Kröten und Blindschleiche hoffen. Wenn dies alles nichts nutzt, können Sie noch auf biologische Mittel wie Ferramol von Neudorff zurückgreifen.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'schadschmetterlinge')}>Schadschmetterlinge {this.state.spanOpen == 'schadschmetterlinge'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'schadschmetterlinge' && (<div style={divStyle}>
          <img src={'assets/schadschmetterlinge.jpg'} style={imgStyle}/>
          <p>Schmetterlinge sind wegen ihrer bunten Vielfalt sehr beliebt. Allerdings gibt es auch hier aus unserer Sicht „schwarze Schafe“, die sich auch von Gemüse ernähren und damit zum Nahrungskonkurrenten werden.</p>
          <p>Bei Befall wird das Einstäuben der Blätter mit Tabakasche, Algenkalk und Knoblauchpulver empfohlen, da der jeweilige Geruch die Raupen vertreiben soll. Zu Bedenken ist hierbei jedoch, dass die Raupen meist auf eine Pflanzenfamilie spezialisiert sind und diese als Nahrung benötigen, für sie wohlriechend oder nicht. Daher ist als effektivstes Mittel das Absammeln zu nennen. Die Raupen können anschließend an Vögel verfüttert werden. Im Handel gibt es zudem biologische Mittel, die auf dem Bacillus thuringiensis oder Neem beruhen.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'voegel')}>Vögel {this.state.spanOpen == 'voegel'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'voegel' && (<div style={divStyle}>
          <img src={'assets/voegel.jpg'} style={imgStyle}/>
          <p>Oft unterschätzt, können auch Vögel im Gemüsegarten großen Schaden anrichten. So interessieren sich z.B. Krähen oder Tauben sehr für Jungpflanzen. Dementsprechend sind Vögel vor allem am Saisonbeginn ein Problem, wenn sie viele frische Pflanzungen gerade von Kohl oder Salat im Garten vorfinden.</p>
          <p>Am besten hilft dagegen ein engmaschiges Schutznetz. Die Tiere haben keine Chance hindurchzukommen. Man muss jedoch aufpassen, dass die Maschen nicht zu groß sind, denn dann kommt es immer wieder vor, dass sich kleinere Singvögel verfangen und, wenn sie nicht schnell genug gefunden werden, verenden können.</p>
        <div class="clearfix"></div></div>)}

        <span style={spanStyle} onClick={this.openSpan.bind(this, 'fliege')}>Weiße Fliege {this.state.spanOpen == 'fliege'?'':'(einblenden)'}</span>
        {this.state.spanOpen == 'fliege' && (<div style={divStyle}>
          <img src={'assets/fliege.jpg'} style={imgStyle}/>
          <p>Ein Befall von Weißer Fliege ist leicht zu erkennen. Beim Berühren der befallenen Pflanzen fliegen die weißen und etwa 1-2mm kleinen Insekten auf. Problematischer als die ausgewachsenen Insekten sind ihre Larven, die sich die meiste Zeit ihrer Entwicklung an den Blattunterseiten festsitzend mit einer Wachsschicht schützen.</p>
          <p>Wenn Sie ein Blatt mit den Larven entdecken, dann entfernen und vernichten Sie es am besten. Ansonsten kann schon ein etwas schärferer Wasserstrahl, das Begießen mit Brennnesseljauche oder eine Seifenlauge helfen.</p>
        <div class="clearfix"></div></div>)}


        <h2><i class="fa fa-leaf"></i> Unkraut bekämpfen</h2>
        <p>Das meiste Unkraut lässt sich primitiv mit einer Hacke entfernen. Dies kann zwar je nach Größe der Fläche ansträngend sein, hat jedoch den nützlichen Nebeneffekt, dass man das Kapillarsystem des Bodens an der Oberfläche unterbricht und dadurch die Verdunstung aus tieferen Bodenzonen reduziert. Das spart Gießwasser. Unkräuter mit Pfahlwurzeln wie Löwenzahn, Acker-Kratzdistel, Stumpfblättriger Ampfer oder Staudenknöterich sollten Sie tief ausstechen, damit die Wurzel komplett entfernt wird. Es gibt für diesen Zweck sehr effektive Geräte, die bequem im Stehen zu bedienen sind. Wiederholen Sie den Vorgang, falls das Unkraut doch wieder austreibt. Da es sofort welkt, kann man bei trockener und sonniger Witterung das ausgehackte Unkraut direkt als Mulchdecke liegen lassen, sofern es noch keine Samen gebildet hat.</p>

      </div>
    )
  }
}


export default SchadelingeUndUnkraut
