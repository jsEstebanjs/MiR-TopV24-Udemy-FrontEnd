import { Link } from "react-router-dom";
import NavCoursesPerformance from "../components/NavCoursesPerformance";
import Student from "../components/NavCoursesPerformance/student";
import Footer from "../components/Footer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Overview from "../components/InstructorPerformanceOverview";
function InstructorPerformance(){
    return(
        <>
        <Student/>
        <div className="main-container-instructor-performance-page">
            <NavCoursesPerformance 
            bordeLeft="Performance"
            />
        <Tabs>
            <TabList className='ul-performance-instructor'>
                <Link to='/instructor/performance/overview' className="link-performance-instructor link-performance-instructor-font-weight-700"><Tab>Overview</Tab></Link>
                <Link to='/instructor/performance/students' className="link-performance-instructor"><Tab>Students</Tab></Link>
                <Link to='/instructor/performance/reviews' className="link-performance-instructor"><Tab>Reviews</Tab></Link>
            </TabList>

            <TabPanel className='container-tab-panel-performance-instructor'>
                <h2 className="title-performance-instructor">Overview</h2>
                <Overview />
            </TabPanel>
       </Tabs>
        </div>
        
        <div className="container-footer">
        <Footer/>
        </div>
        </>
    )
}

export default InstructorPerformance;