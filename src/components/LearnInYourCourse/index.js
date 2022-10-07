import { useState } from "react"
import InputLearn from "./InputLearn";
import { MdAdd } from "react-icons/md";

function LearnInYourCourse({title,info,minInputs}){
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
            {
                learn.map(item=>
                    <InputLearn
                    limit={true}
                    place='Example: Define the roles and responsibilities of a project manager'
                    key={item.id}
                    id={item.id}
                    deleteInput={deleteInput}
                    />
                )
            }
            <button className="add-input-learn-in-your-course" onClick={()=> SetLearn([...learn,{id:learn.length + 1}])} type='button'> <MdAdd/> Add more to your response</button>
        </div>

    )
}
export default LearnInYourCourse;