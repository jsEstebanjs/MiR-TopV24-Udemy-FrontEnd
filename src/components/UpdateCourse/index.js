import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ResetState } from "../../store/CreateCourse.Slice";

const UpdateCourse = ()=>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state.CreateCourse)
    const courseId = useParams()
    const navigate = useNavigate()

    return () => {
        // dispatch(SetPetition(true))
        axios.put(`${process.env.REACT_APP_HEROKU_URL}/courses/${courseId.course}`,
        state,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })

            .then((res) => {
                dispatch(ResetState())
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
