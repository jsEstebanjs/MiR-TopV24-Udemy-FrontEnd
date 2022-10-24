import { useState } from "react"
import { useDispatch } from 'react-redux'
import { SetTitle } from '../../store/CreateCourse.Slice';


function InputTitleLanding({place,id,limitNum,children,action,value}){
    const dispatch = useDispatch();

    const [length,setLegth] = useState(limitNum);
    return(
        <>
        <label htmlFor={id} className='label-input-landing'>{children}</label>
        <div className="main-container-input-learn container-input-landing">
        <input  value={value} id={id} className="input-input-learn" maxLength={limitNum} type='text' placeholder={place} onChange={(e)=> {
            setLegth(limitNum - e.target.value.length)
            dispatch(action(e.target.value ))
            }}/>
        { limitNum > 0 ?<span className="num-length-input-learn">{length}</span>:null}

        </div>
        </>
    )
}
export default InputTitleLanding;