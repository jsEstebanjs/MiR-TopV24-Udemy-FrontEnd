import axios from "axios";
import { CreateCourse , SetPetition } from '../../store/InstructorCourses.Slice';

const CreateCourseAndReturnId = ()=>{
    return (dispatch) => {
        dispatch(SetPetition(true))

        axios.post(`${process.env.REACT_APP_HEROKU_URL}/courses`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body:{
                "title": "test",
                "subtitle": "",
                "description": "",
                "primaryTaught": "",
                "learningObjectives": [],
                "requirements": [],
                "intendedLearners": []
            }
        })
            .then((res) => {
                console.log(res)
                dispatch(CreateCourse(res.data.data))
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
