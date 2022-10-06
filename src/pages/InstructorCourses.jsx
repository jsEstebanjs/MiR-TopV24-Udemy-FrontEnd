import { Link } from "react-router-dom";
import Search from "../components/SearchInstructorCourses";
import EditCourseInstructor from "../components/EditCourseInstructor";
import MovileNavCoursesPerformance from "../components/MovileNavCoursePerformance";
function InstructorCourses(){
    return(
        <>
        <div className="main-container-instructor-courses-page">
            <h2 className="title-instructor-courses-page">Courses</h2>
            <div className="container-search-new-course">
                <Search/>
                <Link className="link-btn-instructor-courses-page">New course</Link>
            </div>
            <div className="container-edit-course-instructor">  
            <EditCourseInstructor />

            </div>
        </div>
        </>
    )
}

export default InstructorCourses;