import { Link } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";

function Student(){
    return(
        <div className="main-container-profile-student">
            <Link to='/'className="link-student">Student</Link>
            <span className="icon-notificacion"><MdOutlineNotificationsNone/></span>
        <div className="container-profile-student">
            <Link to='' className="link-profile-student">
                <span />
                EC
            </Link>
            <div className="main-container-hover-profile-student">
                <div  className="container-hover-profile-student">
                    <Link to='/' className="hover-profile-student-info">
                        <div className="hover-profile-avatar">EC</div>
                        <div className="hover-profile-name-email">
                            <h3 className="hover-profile-name">nombre</h3>
                            <p className="hover-profile-email">email</p>
                        </div>
                    </Link>
                    <Link to='/' className="links-container-hover">Student</Link>
                    <Link to='/' className="links-container-hover">Notifications</Link>
                <div className="container-links-hover">
                    <Link to='/' className="links-container-hover">Account settings</Link>
                    <Link to='/' className="links-container-hover">Payout & tax settings</Link>
                </div>
                <div className="container-links-hover">
                    <Link to='/' className="links-container-hover">Public profile</Link>
                    <Link to='/' className="links-container-hover">Edit profile</Link>
                </div>
                <Link to='/' className="links-container-hover">Log out</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Student;