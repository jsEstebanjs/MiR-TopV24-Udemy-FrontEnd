import imagePlaceHolder from '../../images/placeHolderUpdateImage.jpg'
import { useState } from 'react'
function PromotionalSource({accept,id,video}){
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    console.dir(file)

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const data = new FormData()
    //       data.append(`file_1`, file)

    
    //     const res = await axios.post("http://localhost:8080/",
    //       data,
    //       {
    //         headers: {
    //           "Content-Type": "multipart/form-data"
    //         }
    //       }
    //     )
    
    //     console.log(res)
    //   }

    const readFile = (file) => {
        const reader = new FileReader()
    
        reader.onload = (e) => setImage(e.target.result)
    
        reader.readAsDataURL(file)
      }

    const handleChange=(event)=>{
        readFile(event.target.files[0])
        setFile(event.target.files)
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
                    <span>Upload File</span>
                </label>
            </div>
        </div>
    )
}
export default PromotionalSource;