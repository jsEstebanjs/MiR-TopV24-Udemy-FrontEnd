import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight , MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
function HamburguerCoursesPerformance({name}){
    const [isVisible,setIsVisible] = useState(false)
    return(
        <>
        <div className="nav-opacity"></div>
        <div className="nav-hamburguer">
            <div className="container-nav-user-hamburguer"><div className="nav-user-hamburguer">
                <div className="nav-user nav-user-courses">EC</div>
                <div className="info-user-nav">
                    {`Hi, ${"EC"}`}
                    <p>Welcome back</p>
                </div>
            </div>
            <div className="container-options-profile">
               <Link to='/'>Switch to student view</Link> 
               <Link to='/instructor/courses'>Courses</Link> 
               <Link to='/instructor/performance/overview' className="options-profile-performance" onClick={()=>setIsVisible(true)}>Performance <MdKeyboardArrowRight /></Link>
               <Link to='/' >Notifications</Link> 
               <Link to='/'>Account settings</Link> 
               <Link to='/'>Payout & tax settings</Link>
               <Link to='/'>Log out</Link>
            </div>
            </div>
            {isVisible?
            <div className="options-performance">
                <div className='btn-menu-options-peformance' onClick={()=>setIsVisible(false)}><MdKeyboardArrowLeft />Menu</div>
                <Link to='/instructor/performance/overview' className="links-options-peformance">Overview</Link>
                <Link to='/instructor/performance/students' className="links-options-peformance">Students</Link>
                <Link to='/instructor/performance/reviews' className="links-options-peformance">Reviews</Link>
            </div>
            :
            null
            }
        
        </div>
        <div className="nav-close"><MdClose /></div>
        </>
        

    )
}
export default HamburguerCoursesPerformance;