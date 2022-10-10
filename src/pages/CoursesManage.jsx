import { Outlet, Link, useLocation} from 'react-router-dom';
import CoursesManageNav from '../components/CoursesManageNav';
function CoursesManage(){
    let {pathname} = useLocation();
    pathname = pathname.split("/");

    return(
        <div className='main-container-courses-manage'>
            <CoursesManageNav/>
            <div className='container-courses-manage'>
                <div className='container-plan-your-course'>
                    <h2 className='title-plan-your-course'>Plan your course</h2>
                    <Link to='goals' className={ pathname[pathname.length - 1] === "goals" ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} >Intended learners</Link>
                    <Link to='curriculum' className={ pathname[pathname.length - 1] === "curriculum" ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} >Curriculum</Link>
                    <Link to='basics'  className={ pathname[pathname.length - 1] === "basics" ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'} >Course lading page</Link>
                    <Link to='pricing' className={ pathname[pathname.length - 1] === "pricing" ? 'link-plan-your-course link-plan-your-course-border' : 'link-plan-your-course'}>Pricing</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
export default CoursesManage;