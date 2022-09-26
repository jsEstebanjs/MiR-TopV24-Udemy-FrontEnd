import { Link } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
function Course({img,title,teacher,price,rating}){

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
        </div>
        
    )
}

export default Course;