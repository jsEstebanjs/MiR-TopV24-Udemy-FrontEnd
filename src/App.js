import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn/LogIn.jsx'
import ForgotPassword from './pages/ForgotPassword';
import MyLearning from './pages/MyLearning';
import MyLearningWishList from './pages/MyLearningWishList';
import InstructorCourses from './pages/InstructorCourses';
import InstructorPerformance from './pages/InstructorPerformance';
import InstructorPerformanceStudents from './pages/InstructorPerformanceStudents';
import InstructorPerformanceReviews from './pages/InstructorPerformanceReviews';
import Instructor from './pages/Instructor';
import InstructorPerformanceOverview from './pages/InstructorPerformanceOverview';
import InstructorIndex from './pages/Instructor.index';
import PerformanceIndex from './pages/Peformance.index';
import CoursesManage from './pages/CoursesManage';
import './App.css';
import Course from './pages/Course/Course';
import Cart from './pages/Cart';
import TestCloudify from './pages/TestCloudify';
import InstructorSignup from './pages/InstructorSignup';
import CourseView from './pages/CourseView';
import HomeLoggedTest from './pages/HomeLoggedTest';
import { useAuth0 } from '@auth0/auth0-react';
import CourseByCategory from './pages/CoursesByCategory/CoursesByCategory'


function App() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated?(<>
        <h1>Hola {user.name}</h1>
        <div>
          <img src={user.picture} alt={user.name} loading='lazy'/>
        </div>
        <button onClick={logout}>Logout</button>
      </>): <>
        <button onClick={()=>loginWithRedirect()}>Login</button>
        <button onClick={()=>loginWithRedirect({connection: 'google-oauth2'})}>Login Gmail</button>
      </>
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join/signup/" element={<SignUp />} />
          <Route path="/join/login/" element={<LogIn/>} />
          <Route path="/home" element={<HomeLoggedTest/>} />
          <Route path="/instructor/signup" element={<InstructorSignup />} />
          <Route path="/home/my-courses/learning" element={<MyLearning />} />
          <Route path="/home/my-courses/wishlist" element={<MyLearningWishList />} />
          <Route path="/join/forgot-password/" element={<ForgotPassword />} />
          <Route path='instructor' element={<Instructor />}>
            <Route index element={<InstructorIndex/>}/>
            <Route  path="courses" element={<InstructorCourses />} />
            <Route path='performance' element={<InstructorPerformance />}>
              <Route index element={<PerformanceIndex />}/>
              <Route path="overview" element={<InstructorPerformanceOverview />} />
              <Route path="students" element={<InstructorPerformanceStudents />} />
              <Route path="reviews" element={<InstructorPerformanceReviews />} />
            </Route>
          </Route>

          <Route  path="instructor/courses/:course/manage" element={<CoursesManage />} />

          <Route path="/home/courses-by-category/:Category" element={<CourseByCategory />} />
          <Route path="/courses/:courseTitle" element={<Course />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/test-cloudify' element={<TestCloudify/>}/>
          <Route path='/test-courseView' element={<CourseView/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
