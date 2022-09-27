import React from 'react';
import Footer from '../components/Footer'
import Nav from '../components/Nav';
import AlternateHeadline from '../components/AlternateHeadline';
import TitleHeading from '../components/TitleHeading';
import headingImg from '../images/Title-heading.png';
import headingImgPhone from '../images/Title-heading-movil.png';
import SelectionCourses from '../components/SelectionOfCourses';


function Home(){
  return(
    <div className="home-container">
      <Nav
        login={false}
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
      <Footer />
    </div>
  )
}

export default Home;
