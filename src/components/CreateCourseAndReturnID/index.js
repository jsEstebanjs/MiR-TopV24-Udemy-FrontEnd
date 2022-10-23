import axios from "axios";
import { CreateCourse , SetPetition } from '../../store/InstructorCourses.Slice';

const CreateCourseAndReturnId = ()=>{
    return (dispatch) => {
        dispatch(SetPetition(true))

        axios.post(`${process.env.REACT_APP_HEROKU_URL}/courses`,{
            "active": true,
            "title": "New Course",
            "subtitle": "prueba front-end",
            "description": "testiong conection",
            "language": "Español",
            "level": "Expert Level",
            "category": "Development",
            "price": 20,
            "rating": 5
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
