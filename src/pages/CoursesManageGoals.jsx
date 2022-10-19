import TitleManageCourse from "../components/TitleManageCourse";
import LearnInYourCourse from "../components/LearnInYourCourse";
import CoursesManageNav from '../components/CoursesManageNav';
import { useState,useEffect } from "react";
import LoaderCreateCourse from "../components/LoaderCreateCourse";
import axios from 'axios'
import { useSelector} from 'react-redux';
import { SetLearn,SetRequirements,SetThisCourse,SendLearners} from '../store/CourseLearners.Slice';

function CoursesManageGoals(){

  const arrs = useSelector((state) => state.CourseLearners)
 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://dummyjson.com/comments`)
          .then((res) => {
            // console.log(res.data)
          }).catch((err) => {
            alert(`ups hay un error ${err.message}, comuniquese a servicio al cliente 31054897466`)
          }).finally(() => {
            setLoading(false)
          })
      }, [])

      const obj = {
        SetLearn,
        SetRequirements,
        SetThisCourse,
        SendLearners

    }
    
    localStorage.setItem("newCourse",JSON.stringify({prueba:true,prueba2:false}))
    console.log(localStorage.newCourse)

    return(
        <div className="main-container-manage-goals">
            <CoursesManageNav action={obj.SendLearners}/>
            <TitleManageCourse
            title='Intended learners' />
            <div className="container-manage-goals">
                {loading
                ?
                <LoaderCreateCourse/>
                :
                <>
                <p className="p-manage-goals">The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
                <LearnInYourCourse
                title='What will students learn in your course?'
                info='You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.'
                minInputs={arrs.learn}
                minInputsNum={4}
                limit={true}
                place='Example: Define the roles and responsibilities of a project manager'
                limitNum={160}
                obj={obj.SetLearn}
                seccion='learn'
                />
                <LearnInYourCourse
                title='What are the requirements or prerequisites for taking your course?'
                info='List the required skills, experience, tools or equipment learners should have prior to taking your course.
                If there are no requirements, use this space as an opportunity to lower the barrier for beginners.'
                minInputs={arrs.requirements}
                minInputsNum={1}
                limit={false}
                place='Example: No programming experience needed. You will learn everything you need to know"'
                limitNum={-1}
                obj={obj.SetRequirements}
                seccion='requirements'
                />
                <LearnInYourCourse
                title='Who is this course for?'
                info='Write a clear description of the intended learners for your course who will find your course content valuable.
                This will help you attract the right learners to your course.'
                minInputs={arrs.thisCourse}
                minInputsNum={1}
                limit={false}
                place='Example: No programming experience needed. You will learn everything you need to know"'
                limitNum={-1}
                obj={obj.SetThisCourse}
                seccion='thisCourse'
                />
                </>
                }
            </div>
        </div>
    )
}
export default CoursesManageGoals;