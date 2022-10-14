import { Link } from "react-router-dom";
import Search from "../components/SearchInstructorCourses";
import EditCourseInstructor from "../components/EditCourseInstructor";
import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from "react";
import LoaderCreateCourse from "../components/LoaderCreateCourse";
import axios from 'axios';
import CreateCourseAndReturnId from "../components/CreateCourseAndReturnID";

function InstructorCourses(){
    const { courses,petition } = useSelector((state)=> state.InstructorCourses);
    
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    //peticion donde me traera todos los cursos del profesor
    useEffect(() => {
        axios.get(`https://dummyjson.com/comments`)
          .then((res) => {
            // console.log(res.data)
          }).catch((err) => {
            alert(`ups hay un error ${err.message}, error al traer los cursos`)
          }).finally(() => {
            setLoading(false)
          })
      }, [])

    return(
        <>
        <div className="main-container-instructor-courses-page">
            <h2 className="title-instructor-courses-page">Courses</h2>
            <div className="container-search-new-course">
                <Search/>
                <Link className="link-btn-instructor-courses-page" onClick={()=> dispatch(CreateCourseAndReturnId())} >New course</Link>
            </div>
            <div className="container-edit-course-instructor">
            { 
            loading || petition
            ?
            < LoaderCreateCourse />
            :
            courses.map((item)=>{
                return(
                    <EditCourseInstructor />
                )
            })
            }
            </div>
        </div>
        </>
    )
}

export default InstructorCourses;
