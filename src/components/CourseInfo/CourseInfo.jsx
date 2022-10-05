
import Ratings from 'react-ratings-declarative';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
function CourseInfo({mainCategory, secondCategory, courseTitle, courseDescription, rating, ratings, totalStudents, courseLink, userLink}) {

    return (
        <div className="main-content">
            <div className="course-categories">
                <p>{mainCategory} <MdOutlineKeyboardArrowRight /> {secondCategory} </p>
            </div>
            <div className="course-title">
                <h1>{courseTitle}</h1>
            </div>
            <div className="course-description">
                <p>{courseDescription}</p>
            </div>
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
                <a href={`/course/${courseLink}`}>{`(${ratings} ratings)`}</a>
                <p className="total-students">{totalStudents} students</p>
            </div>
            <div className="created-by-container">
                <p>Created by <a href={`/user/${userLink}`}>{`${userLink}`}</a></p>
            </div>

        </div>
    )
}

export default CourseInfo;
