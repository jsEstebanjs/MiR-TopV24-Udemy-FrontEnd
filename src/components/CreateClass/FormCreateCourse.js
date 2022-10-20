import InputTitleLanding from "../InputTItleLanding/index";
import ReactQuill from 'react-quill';
import PromotionalSource from "../PromotionalSources/index";
import { MdClose } from "react-icons/md";

function FormCreateCourse(){
    
    const modules = {
        toolbar: [
          ['bold', 'italic'],
          [{'list': 'ordered'}, {'list': 'bullet'}]
        ],
      }

      const mediator = (e)=>{
        // setValue(e)
        // dispatch(SetDescription(e))
      }


    return(
        
      <div className="main-container-form-create-course">
        <InputTitleLanding   id='titleClass' limitNum={80} place='Enter a Title.'>Title Class</InputTitleLanding>    
        <p className="label-input-landing">Class description</p>   
        <ReactQuill 
           // theme="snow"
           // value={state.description}
           placeholder="Add a description of your class."
           onChange={(e)=>{
               mediator(e)
           }}
           modules={modules}
          />
          <p className="label-input-landing">Video Class</p>  
          <PromotionalSource accept="video/mp4,video/x-m4v,video/*" id='class-video' video={true}/>
          <button type="button" className="btn-save-edit-class">Save</button>
          <button className="btn-edit-class-close"><MdClose/></button>
        </div>
          
       
    )
}

export default FormCreateCourse;