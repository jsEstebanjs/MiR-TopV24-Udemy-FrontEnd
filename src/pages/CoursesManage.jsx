import { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';
import CoursesManageNav from '../components/CoursesManageNav';
function CoursesManage(){
    const [border,setBorder] = useState(1);
    return(
        <div className='main-container-courses-manage'>
            <CoursesManageNav/>
            <div className='container-courses-manage'>
                <div className='container-plan-your-course'>
                    <h2 className='title-plan-your-course'>Plan your course</h2>
                    <Link to='goals' className={border === 1 ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} onClick={()=>setBorder(1)}>Intended learners</Link>
                    <Link to='curriculum' className={border === 2 ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} onClick={()=>setBorder(2)}>Curriculum</Link>
                    <Link to='basics'  className={border === 3 ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} onClick={()=>setBorder(3)}>Course lading page</Link>
                    <Link to='pricing' className={border === 4 ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} onClick={()=>setBorder(4)}>Pricing</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
export default CoursesManage;