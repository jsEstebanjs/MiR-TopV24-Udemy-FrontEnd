import axios from "axios";
import { CreateCourse , SetPetition } from '../../store/InstructorCourses.Slice';

const CreateCourseAndReturnId = ()=>{
    return (dispatch) => {
        dispatch(SetPetition(true))
        axios.get(`https://dummyjson.com/comments`)
            .then((res) => {
                dispatch(CreateCourse(res.data.comments))
            })
            .catch((error) => {
                alert(`error al crear el curso , error ${error}`)
            })
            .finally(() => {
                dispatch(SetPetition(false))
            })
     }
}

export default CreateCourseAndReturnId;
