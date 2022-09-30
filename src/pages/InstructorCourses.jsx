import { Link } from "react-router-dom";
import Search from "../components/SearchInstructorCourses";
import EditCourseInstructor from "../components/EditCourseInstructor";
import NavCoursesPerformance from "../components/NavCoursesPerformance";
function InstructorCourses(){
    return(
        <div className="main-container-instructor-courses-page">
            <NavCoursesPerformance />
            <h2 className="title-instructor-courses-page">Courses</h2>
            <div className="container-search-new-course">
                <Search/>
                <Link className="link-btn-instructor-courses-page">New course</Link>
            </div>
            <EditCourseInstructor />
        </div>
    )
}

export default InstructorCourses;