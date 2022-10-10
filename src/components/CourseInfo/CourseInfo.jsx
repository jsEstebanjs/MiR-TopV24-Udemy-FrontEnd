
import Ratings from 'react-ratings-declarative';
import { MdOutlineKeyboardArrowRight, MdSubtitles, MdLanguage } from 'react-icons/md'
import { BiCheck } from 'react-icons/bi'


function CourseInfo({mainCategory, secondCategory, courseTitle, courseSubtitle, rating, ratings, totalStudents, courseLink, userLink, languageCourse, languagesubsCourse, objectivesList, courseDescription}) {

    const listItems = objectivesList.map((objective) =>
        <li><BiCheck />{objective}</li>
    );

    return (
        <div className='principal-container'>
            <div className="main-content">
                <div className="course-categories">
                    <p>{mainCategory} <MdOutlineKeyboardArrowRight /> {secondCategory} </p>
                </div>
                <div className="course-title">
                    <h1>{courseTitle}</h1>
                </div>
                <div className="course-subtitle">
                    <h2>{courseSubtitle}</h2>
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
                <div className='basic-information-container'>
                    <p><MdLanguage />{languageCourse} <MdSubtitles />{languagesubsCourse}</p>
                </div>
            </div>
            <div className='second-content'>
                <div className='objectives-container'>
                    <h2>What you'll learn</h2>
                    <ul>{listItems}</ul>
                </div>
                <div className='curriculum-course-container'>
                    <h2>Course content</h2>
                </div>
                <div className='courseDescription-container'>
                    <h2>Description</h2>
                    <p>{courseDescription}</p>
                </div>
            </div>
            <div className='third-content'>

            </div>
        </div>
    )
}

export default CourseInfo;
