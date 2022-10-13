import { Link } from "react-router-dom";
import Search from "../components/SearchInstructorCourses";
import EditCourseInstructor from "../components/EditCourseInstructor";
import { useSelector, useDispatch } from 'react-redux';
import { SetCourses } from '../store/InstructorCourses.Slice';
import {v4 as uuidv4} from 'uuid';

function InstructorCourses(){
    const { courses } = useSelector((state)=> state.InstructorCourses);
    const dispatch = useDispatch()

    return(
        <>
        <div className="main-container-instructor-courses-page">
            <h2 className="title-instructor-courses-page">Courses</h2>
            <div className="container-search-new-course">
                <Search/>
                <Link className="link-btn-instructor-courses-page" onClick={()=> dispatch(SetCourses({ id:uuidv4(), title:"" }))} >New course</Link>
            </div>
            <div className="container-edit-course-instructor">
            {  
            courses.map((item)=>{
                return(
                    <EditCourseInstructor key={item.id}/>
                )
            })
            }
            </div>
        </div>
        </>
    )
}

export default InstructorCourses;
