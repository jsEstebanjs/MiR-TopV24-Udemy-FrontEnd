
import CourseInfo from "../../components/CourseInfo/CourseInfo"
import Footer from "../../components/Footer";
import Nav from "../../components/Nav/index"

const Course = () => {
    return (
        <>
        <Nav />
        <CourseInfo 
            mainCategory= "Development"
            secondCategory= "Programming Languajes"
            courseTitle="Learn Python: The Complete Python Programming Course"
            courseDescription="Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!"
            rating={4.4}
            ratings="3,462"
            totalStudents={20480}
            courseLink="pythonforbeginners"
            userLink="Avinash Jain"
        />
        <Footer />
        </>
    )
}

export default Course;