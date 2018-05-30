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
    margin: `0 0 ${grid}px 0`,
    borderRadius: '7px',
    // change background colour if dragging
    background: isDragging ? 'white' : 'white',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
    minHeight: 200,
    borderRadius: '7px',
});

class HochHuegelBeetDragnDrop extends React.Component {
    state = {
        items: [
          {id: 0, content: 'langlebig und wenig pfelegeintensiv', match: 'hochbeet'},
          {id: 1, content: 'anfällig für Wühlmäuse', match: 'huegelbeet'},
          {id: 2, content: 'schützt vor Wühlmäusen', match: 'hochbeet'},
          {id: 3, content: 'gute Durchlüftung', match: 'huegelbeet'},
          {id: 4, content: 'individuell auf Körpergröße anpassbar', match: 'hochbeet'}
        ],
        hochbeet: [],
        huegelbeet: [],
        finished: false,
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        items: 'items',
        droppable2: 'hochbeet',
        droppable3: 'huegelbeet'
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
                state = { hochbeet: items };
            }

            if (source.droppableId === 'droppable3') {
                state = { huegelbeet: items };
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
            if(result.droppable2) newState.hochbeet = result.droppable2
            if(result.droppable3) newState.huegelbeet = result.droppable3
            if(!newState.items.length) newState.finished = true
            this.setState(newState, ()=>{
              if(!newState.items.length) this.finish()
            });
        }
    };

    finish(){
      let correct = true
      let newhoch = this.state.hochbeet.map(i=>{
        if(i.match != 'hochbeet'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })
      let newhuegel = this.state.huegelbeet.map(i=>{
        if(i.match != 'huegelbeet'){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })
      this.setState({hochbeet: newhoch, huegelbeet: newhuegel})

      if(correct) this.props.onCorrectAnswer()
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div id="hochbeet-huegelbeet-quiz" className={'dnd-quiz '+(this.state.finished?'finished': '')}>
            <h2 class="question">Ordnen Sie die Eigenschaften dem passenden Beettyp zu.</h2>
            <div class="flex-wrap">
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div class="left">
                    <h2>Eigenschaften</h2>
                    <Droppable droppableId="items">
                        {(provided, snapshot) => (
                            <div
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
                  <div class="right">
                    <div>
                      <h2>Hochbeet</h2>
                      <Droppable droppableId="droppable2">
                          {(provided, snapshot) => (
                              <div
                                  ref={provided.innerRef}
                                  style={getListStyle(snapshot.isDraggingOver)}>
                                  {this.state.hochbeet.map((item, index) => (
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
                      <h2>Hügelbeet</h2>
                      <Droppable droppableId="droppable3">
                          {(provided, snapshot) => (
                              <div
                                  ref={provided.innerRef}
                                  style={getListStyle(snapshot.isDraggingOver)}>
                                  {this.state.huegelbeet.map((item, index) => (
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
            {this.state.finished == true && (<button className="btn btn-default" onClick={this.props.navigateNext}>weiter</button>)}

          </div>
        );
    }
}

export default HochHuegelBeetDragnDrop
