import TitleManageCourse from "../components/TitleManageCourse";
import CoursesManageNav from '../components/CoursesManageNav';
function CoursesManageCurriculum(){
    return(
        <div className="main-container-manage-goals">
            <CoursesManageNav/>
            <TitleManageCourse
            title='Curriculum' />
            <div className="container-manage-goals">
            </div>
        </div>
    )
}
export default CoursesManageCurriculum;