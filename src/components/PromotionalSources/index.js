import imagePlaceHolder from '../../images/placeHolderUpdateImage.jpg'
import { useState } from 'react';
import axios from 'axios';
import { addResourcesToCourse } from '../../store/CreateCourse.Slice';
import { useDispatch  } from 'react-redux';

function PromotionalSource({ accept,id,video,isCourse, handleLocalStateVideo }){
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
   const dispatch =  useDispatch()


  const handleSubmit = async (img) => {


      const data = new FormData()
      for (let i = 0; i < img.length; i++) {
        data.append(`file_${i}`, img[i], img[i].name);
      }
  
      const res = await axios.post(process.env.REACT_APP_HEROKU_URL, data, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      const typeFile = res.data.file_0.split(".")
      if(isCourse){
        dispatch(addResourcesToCourse({type: typeFile[typeFile.length - 1] , source:res.data.file_0}))
      }else{
        handleLocalStateVideo(res.data.file_0)
      }

  }



    const readFile = (file) => {
        const reader = new FileReader()
    
        reader.onload = (e) => setImage(e.target.result)
    
        reader.readAsDataURL(file)
      }

    const handleChange=(event)=>{
        readFile(event.target.files[0])
        setFile(event.target.files)
        handleSubmit(event.target.files)
    }
    return(
        <div className='main-container-promotional-source'>
            {video 
            ?
            image !== null
            ?
            <div className='source-video-promotional-source'>
              <p >Save the changes in order to complete the upload of your file. Once you save it, we will process it to ensure it works smoothly on Udemy.</p> 
            </div>

             :
             <img src={imagePlaceHolder} alt='previo-source' className='source-promotional-source'/>
            :
             <img src={image !== null ? image : imagePlaceHolder} alt='previo-source' className='source-promotional-source'/>
             }
            <div className='container-promotional-source'>
                <input id={id} type='file' accept={accept} className='input-promotional-source' onChange={handleChange}></input>
                <label htmlFor={id} className='label-input-promotional-source'>
                    <span >Upload File</span>
                </label>
            </div>
        </div>
    )
}
export default PromotionalSource;