import React from 'react';
import Footer from '../components/Footer'
import Nav from '../components/Nav';
import TitleHeading from '../components/TitleHeading';
import headingImg from '../images/Title-heading.png';
import headingImgPhone from '../images/Title-heading-movil.png';

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
      <Footer />
    </div>
  )
}

export default Home;
