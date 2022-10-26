import axios from "axios";
import { useSelector , useDispatch } from "react-redux";
import { ResetState } from "../../store/CreateCourse.Slice";

const CreateCourseAndReturnId = ()=>{
    const dispatch = useDispatch()
    const state = useSelector((state) => state.CreateCourse)

    return () => {

        axios.post(`${process.env.REACT_APP_HEROKU_URL}/courses`,
        state,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })

            .then((res) => {
                dispatch(ResetState())
            })
            .catch((error) => {
                alert(`error al crear el curso create course, error ${error}`)
            })
            .finally(() => {

            })
     }
}

export default CreateCourseAndReturnId;
