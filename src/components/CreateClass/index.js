import ModalClass from "./ModalClass"; /* create class */
import { DragDropContext ,Droppable , Draggable} from '@hello-pangea/dnd';
import { useDispatch , useSelector} from "react-redux";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import FormCreateCourse from "./FormCreateCourse";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

function CreateClass(){
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const classesFromCourse = useSelector((state) => state.CreateCourse.classes)
  const handleNewCourse = ()=> {
    setIsVisible((isVisible) => !isVisible)
  }

  return(

    <div className="main-container-create-class">
      {isVisible
      ? <FormCreateCourse isDelete={false}/>
      : null
      }
      <div className="container-btn-title-create-course">
        <h3 className="create-class-title">Your classes</h3>
        <button type="button" onClick={handleNewCourse} className="create-class-btn">Create class</button>
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
                  {classesFromCourse.map((item,index)=>(
                    <Draggable key={item} draggableId={item} index={index}>
                      {(draggableProvided)=>(
                        <div
                        className="main-container-class-edit-modal"
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}

                        >

                        <ModalClass
                        />
                        <span
                        className="btn-class-edit-modal"
                        {...draggableProvided.dragHandleProps}
                        ><FaBars /></span>
                        </div>
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
