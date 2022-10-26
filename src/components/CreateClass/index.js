import ModalClass from "./ModalClass"; /* create class */
import { DragDropContext ,Droppable , Draggable} from '@hello-pangea/dnd';
import { useDispatch , useSelector} from "react-redux";
import { FaBars } from "react-icons/fa";
import { Reorder } from "../../store/CreateCourse.Slice";


const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

function CreateClass(){

    const dispatch = useDispatch()
    const classesFromCourse = useSelector((state) => state.CreateCourse.classes)
    console.log("clases",classesFromCourse)

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
          const items = reorder(classesFromCourse, source.index , destination.index)

          dispatch(Reorder({items,seccion:"class"}))
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
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(draggableProvided)=>(
                          <div
                          className="main-container-class-edit-modal"
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}

                          >

                         <ModalClass
                         titleClass={item.classTitle}
                         id={item._id}
                         description={item.classDescription}
                         urlVideo={item.classVideo}
                         isActive={item.classIsActive}
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
