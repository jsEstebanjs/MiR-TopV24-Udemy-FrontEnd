import { Link } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";

function Student(){
    return(
        <div className="main-container-profile-student">
            <Link className="link-student">Student</Link>
            <span className="icon-notificacion"><MdOutlineNotificationsNone/></span>
        <div className="container-profile-student">
            <Link to='' className="link-profile-student">
                <span />
                EC
            </Link>
            <div className="container-hover-profile-student">

        </div>
            </div>
        </div>
    )
}
export default Student;