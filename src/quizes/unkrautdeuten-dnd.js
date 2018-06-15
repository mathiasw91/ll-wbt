import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
// const getItems = (count, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k + offset}`,
//         content: `item ${k + offset}`
//     }));

// a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//
//     return result;
// };

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    borderRadius: '7px',
    width: '200px',
    // change background colour if dragging
    background: isDragging ? 'white' : 'white',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    minHeight: 200,
    borderRadius: '7px',

});

class Unkrautdeutendnd extends React.Component {
    state = {
        items: [
          {id: 0, content: 'Sommer-Adonisröschen, Reiherschnabel, Mittlerer Wegerich, Kleiner Storchenschnabel und Färberkamille', match: 'trocken'},
          {id: 2, content: 'Hundskamille und der Kleine Sauerampfer, aber auch Ackerminze, Hasenklee und das Schmalblättrige Weidenröschen', match: 'sauer'},
          {id: 3, content: 'Brennnessel, Melde, Vogelmiere, Giersch, Franzosenkraut, Kletten-Labkraut, Kohl-Gänsedistel, Gartenwolfsmilch, Hirtentäschel, Persischer Ehrenpreis und Weißer Gänsefuß', match: 'stickstoffreich'},
        ],
        verdichtet: [],
        sauer: [],
        stickstoffreich: [],
        stickstoffarm: [],
        nass: [],
        trocken: [],
        finished: false,
        answeredWrong: false,
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        items: 'items',
        droppable3: 'sauer',
        droppable4: 'stickstoffreich',
        droppable7: 'trocken'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        if(this.getList(destination.droppableId).length){return;}

        if (source.droppableId === destination.droppableId) {
            const items = this.getList(source.droppableId)


            let state = { items };

            if (source.droppableId === 'droppable3') {
                state = { sauer: items };
            }
            if (source.droppableId === 'droppable4') {
                state = { stickstoffreich: items };
            }
            if (source.droppableId === 'droppable7') {
                state = { trocken: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            let newState = this.state
            if(result.items) newState.items = result.items
            if(result.droppable3) newState.sauer = result.droppable3
            if(result.droppable4) newState.stickstoffreich = result.droppable4
            if(result.droppable7) newState.trocken = result.droppable7
            if(!newState.items.length) newState.finished = true
            this.setState(newState, ()=>{
              if(!newState.items.length) this.finish()
            });
        }
    };

    finish(){
      let correct = true



      let newsauer = this.state.sauer.map(i=>{
        if(i.match != 'sauer'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })
      let newstickstoffreich = this.state.stickstoffreich.map(i=>{
        if(i.match != 'stickstoffreich'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })

      let newtrocken = this.state.trocken.map(i=>{
        if(i.match != 'trocken'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })

      this.setState({sauer:newsauer, stickstoffreich:newstickstoffreich, trocken:newtrocken, answeredWrong: !correct})

      if(correct){
        this.props.onCorrectAnswer()
      }else{
        if(this.props.onWrongAnswer) this.props.onWrongAnswer()
      }
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div id="unkrautdeuten-dnd" className={'dnd-quiz '+(this.state.finished?'finished': '')}>
            <h2 class="question">Ordnen Sie das Unkraut den Bodeneigenschaften zu.</h2>
            <div style={{display:'flex',flexDirection:'column', marginBottom: '20px'}}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div class="left">
                    <h2>Unkraut</h2>
                    <Droppable droppableId="items">
                        {(provided, snapshot) => (
                            <div id='item-container'
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {this.state.items.map((item, index) => (
                                    <Draggable
                                        isDragDisabled={this.state.finished}
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                className={"dnd-item "+(item.correct? 'right':'wrong')}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                  </div>
                  <div class="right" style={{display: 'flex'}}>

                      <div>
                        <h2>Sauer</h2>
                        <Droppable droppableId="droppable3">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.sauer.map((item, index) => (
                                        <Draggable
                                            isDragDisabled={this.state.finished}
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className={"dnd-item "+(item.correct? 'right':'wrong')}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}>
                                                    {item.content}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                      </div>

                      <div>
                        <h2>Reich an Stickstoff</h2>
                        <Droppable droppableId="droppable4">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.stickstoffreich.map((item, index) => (
                                        <Draggable
                                            isDragDisabled={this.state.finished}
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className={"dnd-item "+(item.correct? 'right':'wrong')}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}>
                                                    {item.content}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                      </div>
                  <div>
                        <h2>Trockener Boden</h2>
                        <Droppable droppableId="droppable7">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.trocken.map((item, index) => (
                                        <Draggable
                                            isDragDisabled={this.state.finished}
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className={"dnd-item "+(item.correct? 'right':'wrong')}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}>
                                                    {item.content}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                      </div>

                  </div>
              </DragDropContext>
            </div>
            {this.state.finished == true && this.state.answeredWrong === true &&  (
              <div className="question-feedback"><i class="fa fa-exclamation-circle"></i> Hinweis: Lies nochmal im Lernabschnitt "Bodenbeschaffenheit deuten" nach</div>
            )}
            {this.state.finished == true && (<button className="btn btn-default" onClick={this.props.navigateNext}>weiter</button>)}

          </div>
        );
    }
}

export default Unkrautdeutendnd
