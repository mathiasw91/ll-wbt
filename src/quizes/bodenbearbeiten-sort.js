import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
// const getItems = (count, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k + offset}`,
//         content: `item ${k + offset}`
//     }));


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

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

class BodenBearbeitenSort extends React.Component {
    state = {
        items: [
          {id: 2, content: 'Lockern des Bodens'},
          {id: 1, content: 'Abtragen von Gras und Gründüngung'},
          {id: 3, content: 'Ziehen von Reihen'},
          {id: 0, content: 'Abstecken der Umrisse des Beetes'},
        ],
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
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

    finish(){
      let correct = true
      let newSorted = this.state.items.map((i, index)=>{
        if(i.id !== index){
          i.correct = false
          correct = false
        }else{
          i.correct = true
        }
        return i
      })

      this.setState({items: newSorted, finished: true, answeredWrong: !correct})

      if(correct) this.props.onCorrectAnswer()
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div id="bodenbearbeiten-quiz" className={'dnd-quiz '+(this.state.finished?'finished': '')}>
            <h2 class="question">Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.</h2>
            <div class="flex-wrap" style={{marginBottom: '15px'}}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div class="left">
                    <h2>Arbeitsschritte</h2>
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
              </DragDropContext>
            </div>
            {this.state.finished == true && this.state.answeredWrong === true &&  (
              <div className="question-feedback"><i class="fa fa-exclamation-circle"></i> Hinweis: Lies nochmal im Lernabschnitt "Boden bearbeiten" nach</div>
            )}
            {this.state.finished == true && (<button className="btn btn-default" onClick={this.props.navigateNext}>weiter</button>)}
            {this.state.finished == false && (<button className="btn btn-default" onClick={this.finish.bind(this)}>fertig</button>)}
          </div>
        );
    }
}

export default BodenBearbeitenSort
