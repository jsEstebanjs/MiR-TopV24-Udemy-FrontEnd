import { useState } from "react"
import { BiTrashAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Delete } from '../../store/CourseLearners.Slice';
import { useDispatch } from 'react-redux'




function InputLearn({limit,place,id,limitNum,obj,seccion,minInputsNum}){
    const [length,setLegth] = useState(limitNum);
    const dispatch = useDispatch()


    return(
        <div className="main-container-input-learn">
        { limit 
        ?
        <>
        <input className="input-input-learn" maxLength={limitNum} type='text' placeholder={place} onChange={(e)=> {
            setLegth(limitNum - e.target.value.length)
            dispatch(obj({id:id,value:e.target.value}))
            }}/>
        <span className="num-length-input-learn">{length}</span>
        </> 
        :
        <input  maxLength={limitNum} className="input-input-learn" type='text' placeholder={place} onChange={(e)=> {
            setLegth(limitNum - e.target.value.length)
            dispatch(obj({id:id,value:e.target.value}))
            }}/> }
        <button type="button" className="btn-trash-input" onClick={()=>dispatch(Delete({seccion,minInputsNum,id}))}><BiTrashAlt/></button> 
        <button type="button" className="btn-bars-input" ><FaBars/></button>
        </div>
    )
}
export default InputLearn;