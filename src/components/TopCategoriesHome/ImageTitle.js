import { Link } from "react-router-dom";

function ImageTitle({img,title}){
    return(
        <Link className="link-container-image-title" >
            <img src={img} alt={title} className='img-container-image-title'/>      
            <p className='title-container-image-title'>{title}</p>

        </Link>
    )
}
export default ImageTitle;