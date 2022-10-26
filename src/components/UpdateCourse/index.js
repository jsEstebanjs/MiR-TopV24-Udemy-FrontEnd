import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateCourse = ()=>{

    const state = useSelector((state) => state.CreateCourse)
    const courseId = useParams()
    console.log('courseId:', courseId)
    const navigate = useNavigate()

    return (dispatch) => {
        // dispatch(SetPetition(true))
        axios.put(`${process.env.REACT_APP_HEROKU_URL}/courses/${courseId.course}`,
        state,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })

            .then((res) => {
                
                navigate("/instructor/courses")
                // dispatch(CreateCourse(res.data.data))
            })
            .catch((error) => {
                console.log(error)
                alert(`error al actualizar el curso , error ${error}`)
            })
            .finally(() => {
                // dispatch(SetPetition(false))
            })
     }
}

export default UpdateCourse;
