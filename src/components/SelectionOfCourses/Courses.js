import { Link } from "react-router-dom"
import Course from "./Course";
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Courses ({title,info,link}){
    const SlickArrowLeft = ({ dirrection, svg ,onClick , currentSlide}) => (
        <>
    {currentSlide !== 0 && ( <button className={dirrection === "btn-left-courses" ? "btn-courses-slider btn-left-courses" : "btn-courses-slider btn-right-courses"} onClick={onClick} >{svg}</button>)}
        </>
      );
    
      const SlickArrowRight = ({ dirrection, svg ,onClick }) => (
        <button className={dirrection === "btn-left-courses" ? "btn-courses-slider btn-left-courses" : "btn-courses-slider btn-right-courses"} onClick={onClick}>{svg}</button>
      );
    
    const settings = {
        dots: false,
        swipeToSlide:false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft dirrection={"btn-left-courses"} svg={<MdKeyboardArrowLeft/>}/>,
        nextArrow: <SlickArrowRight dirrection={"btn-right-courses"} svg={<MdKeyboardArrowRight/>}/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          }
        ]
      };
    const courses = [

            {
                "title": "Learn Python: The Complete Python Programming Course",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 2.4,
                "students": 3301,
                "price": 99,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Learning Python for Data Analysis and Visualization",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 4.4,
                "students": 3301,
                "price": 120,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Python for Beginners - Learn Programming from scratch",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 5,
                "students": 3301,
                "price": 300,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Python Beyond the Basics - Object-Oriented Programming",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 4.4,
                "students": 3301,
                "price": 140,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Python From Scratch & Selenium WebDriver QA Automation 2022",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 2.3,
                "students": 3301,
                "price": 16,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Learn Python: The Complete Python Programming Course",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 1.5,
                "students": 3301,
                "price": 56,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Learn Python: The Complete Python Programming Course",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 2.7,
                "students": 3301,
                "price": 19,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Learn Python: The Complete Python Programming Course",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 5,
                "students": 3301,
                "price": 120,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Learn Python: The Complete Python Programming Course",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 3,
                "students": 3301,
                "price": 20,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            },
            {
                "title": "Learn Python: The Complete Python Programming Course",
                "image": "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
                "instructor": "Avinash Jain, The Codex",
                "avgRate": 3.4,
                "students": 3301,
                "price": 40,
                "currency": "USD",
                "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
                "dateUpdated": "September 2015",
                "totalHours": 14.5,
                "Level": "All levels",
                "hasSubtitles": true,
                "youWill": [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games"
                ]
            }
        ];
 
return(
        
        <div className="main-courses-carrusel">
            <h2 className="courses-title">{title}</h2>
            <p className="courses-info">{info}</p>
            <Link className="btn-courses">{link} </Link>
            <Slider {...settings}>
                {courses.map((item)=>{
                    return(
                        <Course 
                            img={item.image}
                            title={item.title}
                            teacher={item.instructor}
                            price={item.price}
                            rating={item.avgRate}
                            lastUpdate={item.dateUpdated}
                            totalHours={item.totalHours}
                            level={item.Level}
                            subtitles={item.hasSubtitles}
                            description={item.description}
                        />
                    )
                })}
               
                </Slider>

        </div>
    )
}

export default Courses;