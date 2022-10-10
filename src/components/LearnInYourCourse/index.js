import { useState } from "react"
import InputLearn from "./InputLearn";
import { MdAdd } from "react-icons/md";
import { DragDropContext ,Droppable , Draggable} from '@hello-pangea/dnd';


const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
}
function LearnInYourCourse({title,info,minInputs,limit,place,limitNum}){
    const [learn,SetLearn] = useState(minInputs);
    const deleteInput=(id)=>{
        if(learn.length !== minInputs.length){
            const input = learn.filter(item=> item.id !== id);
            SetLearn(input)
        }
    }
    return(
        <div className="main-container-learn-in-your-course">
            <h3 className="title-learn-in-your-course">{title}</h3>
            <p className="info-learn-in-your-course">{info}</p>
            <DragDropContext 
                onDragEnd={(result) => {
                const {source,destination} = result;
                if(!destination){
                    return
                }
                if(source.index === destination.index 
                    && source.droppableId === destination.droppableId
                   ){
                    return
                    }
                SetLearn((preLearn) => 
                reorder(preLearn , source.index , destination.index)
                )
            }}
            >
            <Droppable droppableId="inputs">
            {(droppableProvided)=>(
            <div
            className="container-learn-in-your-course" 
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            >
            {learn.map((item,index)=>(
                <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(draggableProvided)=>(
                  <div  className="drag-drop-input" {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps} ref={draggableProvided.innerRef}>
                    <InputLearn
                    limit={limit}
                    place={place}
                    id={item.id}
                    limitNum={limitNum}
                    deleteInput={deleteInput}
                    />
                  </div>
                    )}
                </Draggable>
                ))}
                {droppableProvided.placeholder}
                </div>
            )}
            </Droppable>
            </DragDropContext>
            <button className="add-input-learn-in-your-course" onClick={()=> SetLearn([...learn,{id:learn.length + 1}])} type='button'> <MdAdd/> Add more to your response</button>
        </div>

    )
}
export default LearnInYourCourse;