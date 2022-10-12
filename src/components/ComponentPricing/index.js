import { useDispatch } from 'react-redux';
import { SetLevel,SetCategory,SetTeaching } from '../../store/CreateCourse.Slice';
function SelectPricing({name,id,children,action}){
    const dispatch = useDispatch()


    return(
            <select name={name} id={id} className='select-pricing' onChange={(e)=> dispatch(action(e.target.value ))}>
                {children}
            </select>
    )
}
export default SelectPricing;