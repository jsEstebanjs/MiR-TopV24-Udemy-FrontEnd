import { Link } from "react-router-dom";
import Search from "../components/SearchInstructorCourses";
import EditCourseInstructor from "../components/EditCourseInstructor";
import NavCoursesPerformance from "../components/NavCoursesPerformance";
import Student from "../components/NavCoursesPerformance/student";
import Footer from "../components/Footer";
function InstructorCourses(){
    return(
        <>
        <Student/>
        <div className="main-container-instructor-courses-page">
            <NavCoursesPerformance 
            bordeLeft="Courses"
            />
            <h2 className="title-instructor-courses-page">Courses</h2>
            <div className="container-search-new-course">
                <Search/>
                <Link className="link-btn-instructor-courses-page">New course</Link>
            </div>
            <div className="container-edit-course-instructor">  
            <EditCourseInstructor />
            
            

            </div>
        </div>
        <div className="container-footer">
        <Footer/>
        </div>
        </>
    )
}

export default InstructorCourses;