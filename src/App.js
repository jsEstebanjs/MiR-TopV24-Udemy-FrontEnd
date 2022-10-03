import {
  React, BrowserRouter, Routes, Route,
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
          <Route path="/instructor/courses" element={<InstructorCourses />} />
          <Route path="/instructor/performance/overview" element={<InstructorPerformance />} />
          <Route path="/instructor/performance/students" element={<InstructorPerformanceStudents />} />
          <Route path="/instructor/performance/reviews" element={<InstructorPerformanceReviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
