import { useDispatch , useSelector} from 'react-redux';
import ChangeIsInstructor from './ChangeIsInstructor';
import { useNavigate } from "react-router-dom";

function IsTeacherModal({ handleIsTeacherModal }){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickTeachOnUdemy = () => {
        dispatch(ChangeIsInstructor())
        navigate('/instructor/courses')   
    }

    return(
        <>
        <div className="opacity-manage"></div> 
        <div className="main-container-isteacher-modal">
            <p className="title-class-edit">Do you want to become and instructor?</p>
            <button onClick={handleClickTeachOnUdemy}  type="button">Yes</button>
            <button   type="button">Maybe later</button>
        </div>

        </>
    )
}
export default IsTeacherModal;