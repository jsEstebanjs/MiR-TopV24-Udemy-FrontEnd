import {
  React, BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
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
import CoursesManage from './pages/CoursesManage';
import CoursesManageGoals from './pages/CoursesManageGoals';
import CoursesManageCurriculum from './pages/CoursesManageCurriculum';
import ManageIndex from './pages/ManageIndex';

import './App.css';

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
          <Route  path="instructor/courses/:course/manage" element={<CoursesManage />}>
              <Route index element={<ManageIndex />}/>
              <Route path="goals" element={<CoursesManageGoals/>} />
              <Route path="curriculum" element={<CoursesManageCurriculum />} />
              <Route path="basics" element={<CoursesManageCurriculum />} />
              <Route path="pricing" element={<CoursesManageCurriculum />} />
            </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
