
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Courses from './Courses';
function SelectionCourses(){

    return(
      <div className="main-container-selection-courses">
      <Tabs className='container-selection-courses'>
      <TabList className='ul-selection-courses'>
        <Tab className='li-course'>Development</Tab>
        <Tab className='li-course'>IT & Software</Tab>
        <Tab className='li-course'>Design</Tab>
        <Tab className='li-course'>Marketing</Tab>
      </TabList>
  
      <TabPanel>
        <Courses
          title='Expand your career opportunities with Python'
          info='Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...'
          link='Explore Python'
        />
      </TabPanel>

      <TabPanel>
        <Courses
          title='Analyze and visualize data with Excel'
          info='Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to...'
          link='Explore Excel'       
        />
      </TabPanel>

      <TabPanel>
        <Courses
          title='Build websites and applications with Web Development'
          info='The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on...'
          link='Explore Web Development'       
        />
      </TabPanel>

      <TabPanel>
        <Courses
          title='Grow your software development skills with JavaScript'
          info='JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build...'
          link='Explore JavaScript'       
        />
      </TabPanel>
    </Tabs>
    </div>
        
    )
}
export default SelectionCourses;