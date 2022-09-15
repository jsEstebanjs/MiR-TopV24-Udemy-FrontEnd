import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav';

function Home(){
  return(
    <div className="home-container">
      <Nav 
      login={false}
      />
      <Header />
      <p>Home</p>
      <Footer />
    </div>
  )
}

export default Home;
