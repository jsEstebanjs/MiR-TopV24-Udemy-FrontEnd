
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
            courseSubtitle="Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!"
            rating={4.4}
            ratings="3,462"
            totalStudents={20480}
            courseLink="pythonforbeginners"
            userLink="Avinash Jain"
            languageCourse="English"
            languagesubsCourse="English"
            objectivesList={['Create their own Python Programs', 'Become an experienced Python Programmer', 'Parse the Web and Create their own Games']}
            courseDescription='Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more? If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you! Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years. The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you’ll be an absolute pro at programming.'
        />
        <Footer />
        </>
    )
}

export default Course;