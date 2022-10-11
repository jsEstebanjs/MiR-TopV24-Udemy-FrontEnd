import TitleManageCourse from "../components/TitleManageCourse";
import LearnInYourCourse from "../components/LearnInYourCourse";
import CoursesManageNav from '../components/CoursesManageNav';
function CoursesManageGoals(){
    return(
        <div className="main-container-manage-goals">
            <CoursesManageNav/>
            <TitleManageCourse
            title='Intended learners' />
            <div className="container-manage-goals">
                <p className="p-manage-goals">The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
                <LearnInYourCourse
                title='What will students learn in your course?'
                info='You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.'
                minInputs={[{id:1},{id:2},{id:3},{id:4}]}
                limit={true}
                place='Example: Define the roles and responsibilities of a project manager'
                limitNum={160}
                />
                <LearnInYourCourse
                title='What are the requirements or prerequisites for taking your course?'
                info='List the required skills, experience, tools or equipment learners should have prior to taking your course.
                If there are no requirements, use this space as an opportunity to lower the barrier for beginners.'
                minInputs={[{id:1}]}
                limit={false}
                place='Example: No programming experience needed. You will learn everything you need to know"'
                limitNum={-1}
                />
                <LearnInYourCourse
                title='Who is this course for?'
                info='Write a clear description of the intended learners for your course who will find your course content valuable.
                This will help you attract the right learners to your course.'
                minInputs={[{id:1}]}
                limit={false}
                place='Example: No programming experience needed. You will learn everything you need to know"'
                limitNum={-1}
                />
            </div>
        </div>
    )
}
export default CoursesManageGoals;