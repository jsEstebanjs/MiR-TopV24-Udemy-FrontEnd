import { useDispatch , useSelector} from 'react-redux';
import ChangeIsInstructor from './ChangeIsInstructor';

function IsTeacherModal({ handleIsTeacherModal }){
    const dispatch = useDispatch()
    return(
        <>
        <div className="opacity-manage"></div> 
        <div className="main-container-isteacher-modal">
            <p className="title-class-edit">Do you want to become and instructor?</p>
            <button onClick={()=> dispatch(ChangeIsInstructor())}  type="button">Yes</button>
            <button   type="button">Maybe later</button>
        </div>

        </>
    )
}
export default IsTeacherModal;