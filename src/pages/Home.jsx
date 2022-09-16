import React from 'react';
import Footer from '../components/Footer'
import Nav from '../components/Nav';
import fakelanding from '../images/fakelanding.png'

function Home(){
  return(
    <div className="home-container">
      <Nav login={false}/>
      <img src={fakelanding} className="home-img" alt="fakelanding" />
      <Footer />
    </div>
  )
}

export default Home;
