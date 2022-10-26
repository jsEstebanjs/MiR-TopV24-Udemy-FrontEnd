import InputTitleLanding from "../InputTItleLanding/index";
import ReactQuill from 'react-quill';
import PromotionalSource from "../PromotionalSources/index";
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { SetClassTitle , SetClassDescription } from '../../store/CreateCourse.Slice';
import { useState } from "react";


function FormCreateCourse({titleClass,id,description,urlVideo,isActive}){
    const dispatch = useDispatch()
    const [value,setValue] = useState("");
    const [length,setLegth] = useState(80);
    

    const modules = {
        toolbar: [
          ['bold', 'italic'],
          [{'list': 'ordered'}, {'list': 'bullet'}]
        ],
      }

      const mediator = (e)=>{
        setValue(e)
        dispatch(SetClassDescription({_id:id,classDescription:e}))
      }


    return(
        
      <div className="main-container-form-create-course">
        <label htmlFor="titleClass" className='label-input-landing'>Title Class</label>
        <div className="main-container-input-learn container-input-landing">
        <input  value={titleClass} id="titleClass" className="input-input-learn" maxLength={80} type='text' placeholder='Enter a Title.' onChange={(e)=> {
            setLegth(80 - e.target.value.length)
            dispatch(SetClassTitle({_id:id,classTitle:e.target.value}))
            }}/>

        <span className="num-length-input-learn">{length}</span>

        </div>
        <p className="label-input-landing">Class description</p>   
        <ReactQuill 
           // theme="snow"
           value={description}
           placeholder="Add a description of your class."
           onChange={(e)=>{
               mediator(e)
           }}
           modules={modules}
          />
          <p className="label-input-landing">Video Class</p>  
          <PromotionalSource accept="video/mp4,video/x-m4v,video/*" id='class-video' video={true}/>
          <div className="container-form-create-course-btns">
            <button type="button" className="btn-save-edit-class">Save</button>
            <button type="button" className="btn-save-edit-class-delete">Delete</button>
          </div>

          <button className="btn-edit-class-close"><MdClose/></button>
        </div>
          
       
    )
}

export default FormCreateCourse;