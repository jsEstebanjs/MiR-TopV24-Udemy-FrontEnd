import axios from "axios";
// import { CreateCourse , SetPetition } from '../../store/InstructorCourses.Slice';
import { useSelector } from "react-redux";

const ChangeIsInstructor = ()=>{

    return (dispatch) => {
        axios.put(`${process.env.REACT_APP_HEROKU_URL}/users`,{},
        {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        })
        .then((res) => {
                console.log(res)
               
        })
        .catch((error) => {
                console.log(error)
                alert(`error al crear el curso , error ${error}`)
        })
        .finally(() => {
                
        })
     }
}

export default ChangeIsInstructor;
