import axios from "axios";
import { CreateCourse , SetPetition } from '../../store/InstructorCourses.Slice';
import { useSelector } from "react-redux";

const CreateCourseAndReturnId = ()=>{

    const state = useSelector((state) => state.CreateCourse)

    console.log(state)
    return (dispatch) => {
        // dispatch(SetPetition(true))

        axios.post(`${process.env.REACT_APP_HEROKU_URL}/courses`,
        state,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })

            .then((res) => {
                console.log(res)
                // dispatch(CreateCourse(res.data.data))
            })
            .catch((error) => {
                console.log(error)
                alert(`error al crear el curso , error ${error}`)
            })
            .finally(() => {
                // dispatch(SetPetition(false))
            })
     }
}

export default CreateCourseAndReturnId;
