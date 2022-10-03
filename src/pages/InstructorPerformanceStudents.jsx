import { Link } from "react-router-dom";
import NavCoursesPerformance from "../components/NavCoursesPerformance";
import Student from "../components/NavCoursesPerformance/student";
import Footer from "../components/Footer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Students from "../components/InstructorPerformanceStudents/index";

function InstructorPerformanceStudents(){
    return(
        <>
        <Student/>
        <div className="main-container-instructor-performance-page">
            <NavCoursesPerformance 
            bordeLeft="Performance"
            />
        <Tabs>
            <TabList className='ul-performance-instructor'>
                <Link to='/instructor/performance/overview' className="link-performance-instructor"><Tab>Overview</Tab></Link>
                <Link to='/instructor/performance/students' className="link-performance-instructor link-performance-instructor-font-weight-700"><Tab>Students</Tab></Link>
                <Link to='/instructor/performance/reviews' className="link-performance-instructor"><Tab>Reviews</Tab></Link>
            </TabList>

            <TabPanel>
                <h2 className="title-performance-instructor">Students</h2>
                    <Students />
            </TabPanel>
       </Tabs>
        </div>
        
        <div className="container-footer">
        <Footer/>
        </div>
        </>
    )
}

export default InstructorPerformanceStudents;