import axios from "axios"; /* create course and return id  */
import { useSelector } from "react-redux";
import { ResetState } from "../../store/CreateCourse.Slice";

const CreateCourseAndReturnId = ()=>{

    const state = useSelector((state) => state.CreateCourse)

    return (dispatch) => {

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
