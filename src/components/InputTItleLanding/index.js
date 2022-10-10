import { useState } from "react"



function InputTitleLanding({place,id,limitNum,children}){
    const [length,setLegth] = useState(limitNum);
    return(
        <>
        <label htmlFor={id} className='label-input-landing'>{children}</label>
        <div className="main-container-input-learn container-input-landing">
        <input  id={id} className="input-input-learn" maxLength={limitNum} type='text' placeholder={place} onChange={(e)=> setLegth(limitNum - e.target.value.length)}/>
        { limitNum > 0 ?<span className="num-length-input-learn">{length}</span>:null}

        </div>
        </>
    )
}
export default InputTitleLanding;