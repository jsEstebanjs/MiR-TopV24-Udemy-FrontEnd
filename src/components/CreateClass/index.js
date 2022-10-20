import ModalClass from "./ModalClass";
import { DragDropContext ,Droppable , Draggable} from '@hello-pangea/dnd';

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

function CreateClass(){

    const prueba = ["1","2","3"]

    return(

      <div className="main-container-create-class">
        <div className="container-btn-title-create-course">
          <h3 className="create-class-title">Your classes</h3>
          <button type="button" className="create-class-btn">Create class</button>
        </div>
        <DragDropContext onDragEnd={(result)=>{
          const { source,destination } = result;
          if(!destination){
            return;
          }

          if(source.index === destination.index && source.droppableId === destination.droppableId){
            return;
          }
          // const items = reorder(clasess , source.index , destination.index)
                
          // dispatch(Reorder({items}))
        }

        } >
            <Droppable droppableId="class">
              {
                (droppableProvided)=>(
                  <div {...droppableProvided.droppableProps}
                   className="container-class-edit"
                   ref={droppableProvided.innerRef}
                   >
                    {prueba.map((item,index)=>(
                      <Draggable key={item} draggableId={item} index={index}>
                        {(draggableProvided)=>(
                         <ModalClass 
                         {...draggableProvided.draggableProps}
                         ref={draggableProvided.innerRef}
                         {...draggableProvided.dragHandleProps}
                         />
                    )}
                      </Draggable>
                    ))}

                  {droppableProvided.placeholder}
                  </div>
                )
              }
              </Droppable>
        </DragDropContext>

      


      </div>

    )
}

export default CreateClass;