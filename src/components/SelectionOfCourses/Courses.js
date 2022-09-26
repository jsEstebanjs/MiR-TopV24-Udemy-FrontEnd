import { Link } from "react-router-dom"
import Course from "./Course";
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";
import { useState , useRef} from "react";
function Courses ({title,info,link}){
    const carrusel = useRef(null)
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
                "title": "Learn Python: The Complete Python Programming Course",
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
                "title": "Learn Python: The Complete Python Programming Course",
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
                "title": "Learn Python: The Complete Python Programming Course",
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
                "title": "Learn Python: The Complete Python Programming Course",
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
    const handleLeftClick=(e)=>{
            carrusel.current.scrollLeft -= carrusel.current.offsetWidth
    }
    const handleRightClick=(e)=>{
        carrusel.current.scrollLeft += carrusel.current.offsetWidth
    }
return(
        
        <div className="main-courses-carrusel">
            <h2>{title}</h2>
            <p className="courses-info">{info}</p>
            <Link className="btn-courses">{link} </Link>
            <div className="courses-carrusel" ref={carrusel}>
                <button className="btn-left-courses" onClick={()=> handleLeftClick() }><MdKeyboardArrowLeft /></button>
                {courses.map((item)=>{
                    return(
                        <Course 
                            img={item.image}
                            title={item.title}
                            teacher={item.instructor}
                            price={item.price}
                            rating={item.avgRate}
                        />
                    )
                })}
                <button className="btn-right-courses" onClick={()=> handleRightClick() }><MdKeyboardArrowRight /></button>
            </div>

        </div>
    )
}

export default Courses;