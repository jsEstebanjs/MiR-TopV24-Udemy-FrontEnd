import udemy from '../../images/udemyCursesInstructor.svg';
import { MdOndemandVideo,MdBarChart } from "react-icons/md";
import { Link } from 'react-router-dom';

function NavCoursesPerformance({bordeLeft}){
    return(
        <div className='main-container-nav-courses-performance'>
            <Link to='/instructor/courses' className='link-img-nav-courses-performance'><img  src={udemy} alt='logo-udemy' className='img-nav-courses-performance'/></Link>
            <ul className='ul-nav-courses-performance'>
                <li className={bordeLeft === "Courses" ? "li-nav-courses-performance border-left-courses-performance" : "li-nav-courses-performance"}><Link to='/instructor/courses' className='link-nav-courses-performance'><MdOndemandVideo /><p className='item-nav-courses-performance'>Courses </p></Link></li>
                <li className={bordeLeft === "Performance" ? "li-nav-courses-performance border-left-courses-performance" : "li-nav-courses-performance"}><Link to='/instructor/performance/overview' className='link-nav-courses-performance'><MdBarChart /><p className='item-nav-courses-performance'>Performance</p></Link></li>
            </ul>
        </div>

    )
}

export default NavCoursesPerformance;