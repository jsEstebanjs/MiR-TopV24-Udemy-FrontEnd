import { useState } from "react"
import { BiTrashAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";


function InputLearn({limit,place,id,deleteInput,limitNum}){
    const [length,setLegth] = useState(limitNum);
    return(
        <div className="main-container-input-learn">
        { limit 
        ?
        <>
        <input className="input-input-learn" maxLength={limitNum} type='text' placeholder={place} onChange={(e)=> setLegth(limitNum - e.target.value.length)}/>
        <span className="num-length-input-learn">{length}</span>
        </> 
        :
        <input  maxLength={limitNum} className="input-input-learn" type='text' placeholder={place} onChange={(e)=> setLegth(limitNum - e.target.value.length)}/> }
        <button type="button" className="btn-trash-input" onClick={()=>deleteInput(id)}><BiTrashAlt/></button> 
        <button type="button" className="btn-bars-input" ><FaBars/></button>
        </div>
    )
}
export default InputLearn;