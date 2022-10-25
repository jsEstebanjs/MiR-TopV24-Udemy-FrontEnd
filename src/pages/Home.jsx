import React from 'react';
import Footer from '../components/Footer'
import Nav from '../components/Nav';
import AlternateHeadline from '../components/AlternateHeadline';
import TitleHeading from '../components/TitleHeading';
import headingImg from '../images/Title-heading.png';
import headingImgPhone from '../images/Title-heading-movil.png';
import TopCategoriesHome from '../components/TopCategoriesHome';
import BecomeInstructor from '../images/BecomeInstructor.jpg';
import BecomeInstructorMobile from '../images/BecomeInstructorMobilejpg.jpg'
import BecomeInstructorHome from '../components/BecomeInstructorHome/index';
import SelectionCourses from '../components/SelectionOfCourses';
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

      /*const dataUser = await axios.get("http://localhost:8081/users",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
      setInfoUser({
        email: dataUser.data.email,
        password: dataUser.data.password,
        isInstructor: dataUser.data.isInstructor
      })*/

function Home(){
  const navigate = useNavigate()
/*   useEffect(() => {
    axios.get(`${process.env.REACT_APP_HEROKU_URL}/users`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        localStorage.clear()
        console.log(err)
        navigate("/join/login");
      }).finally(() => {
        
      })
  }, []) */
  
  return(
    <div className="home-container">
      <Nav
        login={localStorage.getItem("token") ? true : false}
      />
      
      <TitleHeading
        title='Last day for these savings!'
        text='Courses that meet today’s challenges (and tomorrow’s). They start at just COL$39,900. Sale ends today.'
        img={headingImg}
        alt='illustration'
        imgPhone={headingImgPhone}
      />
      <AlternateHeadline
      title='A broad selection of courses'
      info='Choose from 204,000 online video courses with new additions published every month'
      />
      <SelectionCourses />
      <TopCategoriesHome
      title='Top Categories'
      />
      <BecomeInstructorHome 
        img={BecomeInstructor}
        title='Become an instructor'
        info='Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.'
        btn='Start teaching today'
        imgMobile={BecomeInstructorMobile}
      />
      <Footer />
    </div>
  )
}

export default Home;
