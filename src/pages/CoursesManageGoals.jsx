import TitleManageCourse from "../components/TitleManageCourse";
import LearnInYourCourse from "../components/LearnInYourCourse";
function CoursesManageGoals(){
    return(
        <div className="main-container-manage-goals">
            <TitleManageCourse
            title='Intended learners' />
            <div className="container-manage-goals">
                <p className="p-manage-goals">The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
                <LearnInYourCourse
                title='What will students learn in your course?'
                info='You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.'
                minInputs={[{id:1},{id:2},{id:3},{id:4}]}
                />
            </div>
        </div>
    )
}
export default CoursesManageGoals;