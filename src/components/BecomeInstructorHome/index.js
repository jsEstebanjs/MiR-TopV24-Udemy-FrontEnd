import { Link } from "react-router-dom";

function BecomeInstructorHome({title ,img,info,btn,imgMobile}){

    return(
        <div className="main-container-become-instructor">
            <div className="container-img-become-instructor">
                <img src={img} alt={title} className='img-become-instructor'/>
                <img src= {imgMobile} alt={title}className='img-become-instructor-mobile' />
            </div>
            <div className="container-info-become-instructor">
                <h3 className="title-become-instructor">{title}</h3>
                <p className="info-become-instructor">{info}</p>
                <Link className="link-become-instructor">{btn}</Link>
            </div>
        </div>
    )
}
export default BecomeInstructorHome;