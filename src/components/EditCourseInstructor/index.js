import { Link } from 'react-router-dom';
import EditCourseInstructorimg from '../../images/EditCourseInstructor.jpg';

function EditCourseInstructor({title}){
    return(
        <div className='main-container-edit-course-instructor'>
          <div className='container-img-edit-course-instructor'>
            <img src={EditCourseInstructorimg} alt className='img-edit-course-instructor'/> 
          </div>
          <div className='container-info-edit-course-instructor'>
            <p className='title-info-edit-course-instructor'>{title}</p>
                <div className='container-hover-edit-course-instructor'>
                    <Link to='' className='link-edit-course-instructor'>Edit / manage course</Link>
                </div>
          </div>
        </div>
    )
}

export default EditCourseInstructor;