import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn/LogIn';
import ForgotPassword from './pages/ForgotPassword';
import MyLearning from './pages/MyLearning';
import MyLearningWishList from './pages/MyLearningWishList';
import InstructorCourses from './pages/InstructorCourses';
import InstructorPerformance from './pages/InstructorPerformance';
import InstructorPerformanceStudents from './pages/InstructorPerformanceStudents';
import InstructorPerformanceReviews from './pages/InstructorPerformanceReviews';

import  Instructor from './pages/Instructor';
import InstructorPerformanceOverview from './pages/InstructorPerformanceOverview';
import InstructorIndex from './pages/Instructor.index';
import PerformanceIndex from './pages/Peformance.index';

import './App.css';
import Course from './pages/Course/Course';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join/signup/" element={<SignUp />} />
          <Route path="/join/login/" element={<LogIn />} />
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
          <Route path="/course/pythonforbeginners" element={<Course />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
