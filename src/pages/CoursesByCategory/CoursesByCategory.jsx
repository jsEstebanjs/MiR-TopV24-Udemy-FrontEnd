import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import Course from "../../components/SelectionOfCourses/Course";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CoursesByCategory(){
  const [courses, setCourses] = useState([])
  let category = useParams();

  console.log('category de params:', category.Category)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HEROKU_URL}/courses`
    ).then((res) => {
      const allCourses = res.data.data
      console.log('allcourses:', allCourses)
    
      const coursesByCategory = allCourses.filter(function (item) {
        return item.category.toLowerCase() === category.Category.toLowerCase()
      })
      console.log('coursesBycategory', coursesByCategory)
      
      setCourses(coursesByCategory)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
    })
  }, [])

    return(
        <div>
          <Nav />
          <div className="category-title-container">
            <h2>{category.Category} Courses</h2>
          </div>
          <div className='coursesbycategory-container'>
            {courses.map((item)=>{
              return(
                <Course 
                img={item.image}
                title={item.title}
                teacher={item.courseOwner}
                price={item.price}
                rating={4.5}
                lastUpdate={item.primaryTaught}
                //totalHours={item.totalHours}
                level={item.level}
                //subtitles={item.hasSubtitles}
                description={item.description}
                />
                    )
                })}
          </div>
          <Footer/>
        </div>

    )
}
export default CoursesByCategory;