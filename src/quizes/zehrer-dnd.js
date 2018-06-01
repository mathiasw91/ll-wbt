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

class ZehrerDnD extends React.Component {
    state = {
        items: [
          {id: 0, content: 'Gurken', match: 'stark'},
          {id: 1, content: 'Erbsen', match: 'schwach'},
          {id: 2, content: 'Kartoffeln', match: 'stark'},
          {id: 3, content: 'Salat', match: 'mittel'},
          {id: 4, content: 'Zwiebeln', match: 'mittel'},
          {id: 5, content: 'Kräuter', match: 'schwach'},
        ],
        stark: [],
        mittel: [],
        schwach: [],
        finished: false,
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        items: 'items',
        droppable2: 'stark',
        droppable3: 'mittel',
        droppable4: 'schwach'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = this.getList(source.droppableId)


            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { stark: items };
            }
            if (source.droppableId === 'droppable3') {
                state = { mittel: items };
            }
            if (source.droppableId === 'droppable4') {
                state = { schwach: items };
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
            if(result.droppable2) newState.stark = result.droppable2
            if(result.droppable3) newState.mittel = result.droppable3
            if(result.droppable4) newState.schwach = result.droppable4
            if(!newState.items.length) newState.finished = true
            this.setState(newState, ()=>{
              if(!newState.items.length) this.finish()
            });
        }
    };

    finish(){
      let correct = true
      let newstark = this.state.stark.map(i=>{
        if(i.match != 'stark'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })
      let newmittel = this.state.mittel.map(i=>{
        if(i.match != 'mittel'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })
      let newschwach = this.state.schwach.map(i=>{
        if(i.match != 'schwach'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })
      this.setState({stark: newstark, mittel:newmittel, schwach: newschwach})

      if(correct) this.props.onCorrectAnswer()
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div id="zehrer-dnd" className={'dnd-quiz '+(this.state.finished?'finished': '')}>
            <h2 class="question">Ordnen Sie die Pflanzen der Tabelle zu.</h2>
            <div style={{display:'flex',flexDirection:'column', marginBottom: '20px'}}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div class="top">
                    <h2>Pflanzen</h2>
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
                  <div class="bottom">

                    <table style={{textAlign: 'left'}}>
                      <tr>
                        <th style={{border: '3px solid #d50114', background: '#d50114'}}>Starkzehrer</th>
                        <th style={{border: '3px solid rgb(249, 172, 3)', background: 'rgb(249,172,3)'}}>Mittelzehrer</th>
                        <th style={{border: '3px solid rgb(254, 253, 5)', background: 'rgb(254,253,5)'}}>Schwachzehrer</th>
                      </tr>
                      <tr>
                        <td style={{border: '3px solid #d50114'}}>
                        <Droppable droppableId="droppable2" id="item-container">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.stark.map((item, index) => (
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
                        </td>
                        <td style={{border: '3px solid rgb(249, 172, 3)'}}>
                        <Droppable droppableId="droppable3">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.mittel.map((item, index) => (
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
                        </td>
                        <td style={{border: '3px solid rgb(254, 253, 5)'}}>
                        <Droppable droppableId="droppable4">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.schwach.map((item, index) => (
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
                        </td>
                      </tr>
                    </table>

                  </div>
              </DragDropContext>
            </div>
            {this.state.finished == true && (<button className="btn btn-default" onClick={this.props.navigateNext}>weiter</button>)}

          </div>
        );
    }
}

export default ZehrerDnD
