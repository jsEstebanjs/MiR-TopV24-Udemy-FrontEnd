import { useState } from "react"
import { BiTrashAlt } from "react-icons/bi";

function InputLearn({limit,place,id,deleteInput}){
    const [length,setLegth] = useState(160);
    return(
        <div className="main-container-input-learn">
        { limit ?
        <>
        <input className="input-input-learn" maxLength={160} type='text' placeholder={place} onChange={(e)=> setLegth(160 - e.target.value.length)}/>
        <span className="num-length-input-learn">{length}</span> </> : <input  type='text' placeholder={place}/> }
        {length < 160 ?<button type="button" className="btn-trash-input" onClick={()=>deleteInput(id)}><BiTrashAlt/></button> : null}
        </div>
    )
}
export default InputLearn;