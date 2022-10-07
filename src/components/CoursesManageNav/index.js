import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft ,MdSettings} from "react-icons/md";

function CoursesManageNav({nameCourse}){
    return(
        <div className="main-container-courses-manage-nav">
            <div className="container-back-name-course">
                <Link className="link-back-to-courses" to='/instructor/courses'><MdKeyboardArrowLeft/>Back to courses</Link>
                <p className="courses-manage-name-course">{nameCourse} react de 0 a pro</p>
            </div>
            <div className="container-save-settings">
                <button className="btn-save-settings">Save</button>
                <Link className="link-btn-settings"><MdSettings/></Link>
            </div>
        </div>
    )
}
export default CoursesManageNav;