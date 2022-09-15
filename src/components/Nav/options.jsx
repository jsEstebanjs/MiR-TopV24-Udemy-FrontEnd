import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function Options(){

    return(
        <div className="nav-main-options">
            <span className="nav-path"></span>
            <div className="nav-options-visible">
                
            <ul className="nav-main-ul">

              <Link to='./'>
                <div className="main-container">
                  <li className="main-li">
                    Development
                      <ul className="ul-two">
                        <li>Web Development</li>
                        <li>Data Science</li>
                        <li>Mobile Development</li>
                        <li>Programming Languajes</li>
                        <li>Database Design & Development</li>
                      </ul>

                  </li>
                    <MdOutlineChevronRight />
                </div>
              </Link>


                <Link to='./'>
                  <div className="main-container">
                    <li className="main-li">
                    IT & Software
                    <ul className="ul-two">
                        <li>IT Certifications</li>
                        <li>Network & Security</li>
                        <li>Hardware</li>
                        <li>Operating Systens & Server</li>
                        <li>Other IT & Software</li>
                    </ul>

                  </li>
                    <MdOutlineChevronRight />
                </div>
                </Link>


                <Link to='./'>
                  <div className="main-container">
                    <li className="main-li">
                    Design
                    <ul className="ul-two">
                        <li>Web Design</li>
                        <li>Graphic Design & Illustration</li>
                        <li>Design Tools</li>
                        <li>User Experience Design</li>
                        <li>3D & Animation</li>
                    </ul>

                  </li>
                    <MdOutlineChevronRight />
                </div>
                </Link>

                <Link to='./'>
                  <div className="main-container">
                    <li className="main-li">
                    Marketing
                    <ul className="ul-two">
                        <li>Digital Marketing</li>
                        <li>Search Engine Optimization</li>
                        <li>Social Media Marketing</li>
                        <li>Brading</li>
                        <li>Marketing Fundamentals</li>
                    </ul>

                  </li>
                    <MdOutlineChevronRight />
                </div>
                </Link>

                <Link to='./'>
                  <div className="main-container">
                    <li className="main-li">
                    Teaching & Academics
                    <ul className="ul-two">
                        <li>Engineerins</li>
                        <li>Math</li>
                        <li>Science</li>
                        <li>Languaje Learning</li>
                        <li>Teache Trainig</li>
                    </ul>

                  </li>
                    <MdOutlineChevronRight />
                </div>
                </Link>

            </ul>
            </div>
        
        </div>
    )
}
export default Options;