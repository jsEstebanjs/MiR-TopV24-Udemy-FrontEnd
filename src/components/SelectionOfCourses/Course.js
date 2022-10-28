import { Link } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addItemShop } from '../../store/ShopCourses.Slice'

function Course({id,img,title,teacher,price,rating,lastUpdate,totalHours,level,subtitles,description}){
    //toca colocar el id por el mometo es undefined
    const dispatch = useDispatch()

    const addCourseLocal = ()=>{
        if(localStorage.getItem("CoursesShop") === null){
            localStorage.setItem("CoursesShop",JSON.stringify([]));
        }
        let courses = [localStorage.getItem("CoursesShop")]
        courses = JSON.parse(courses)
        const objCourse = {id,img,price,title}
        courses.push(objCourse)
        dispatch(addItemShop(objCourse))
        localStorage.setItem("CoursesShop",JSON.stringify(courses));
    }


    return(
        <div className="main-container-course">
            <img src={img} alt={title}/>
            <Link className="course-title"><h3>{title}</h3></Link>
            <p className="course-teacher">{teacher}</p>
        <div className="container-rating-course">
            <p className="course-number-rating">{rating % 1 !== 0 ? rating : `${rating}.0`}</p>
            <Ratings
                rating={rating}
                widgetDimensions="14px"
                widgetSpacings="1px"
                widgetEmptyColors='#ffffff'
            >
                <Ratings.Widget widgetRatedColor="#e59819"/>
                <Ratings.Widget widgetRatedColor="#e59819" />
                <Ratings.Widget widgetRatedColor="#e59819" />
                <Ratings.Widget widgetRatedColor="#e59819" />
                <Ratings.Widget widgetRatedColor="#e59819" />
            </Ratings>
        </div>
            <p className="course-price">${price}</p>
        <div className="main-container-hover-course">
            <div className="container-hover-course">
                <Link to= '/course/pythonforbeginners' className="title-hover-course"><h2 className="title-hover-course">{title}</h2></Link>
                <p className="date-update-course">Updated <strong>{lastUpdate}</strong></p>
                  <p className="subtitle-course">{totalHours} total hours • {level}{subtitles?" • Subtitles":null}</p>  
                <p className="description-course">{description}</p>
                <div className="container-add-favorite-course">
                    <button onClick={addCourseLocal} type="button" className="btn-add-cart-course">Add to cart</button>
                    {/* { ? <button onClick={addCourseLocal} type="button" className="btn-add-cart-course btn-course-in-your-shop ">in the cart</button> : null} */}
                    <button type="button" className="btn-favorite-course"><MdFavoriteBorder/></button>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Course;