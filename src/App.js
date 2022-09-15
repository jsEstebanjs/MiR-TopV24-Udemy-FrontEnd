import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ForgotPassword from './pages/ForgotPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join/signup/" element={<SignUp />} />
          <Route path="/join/login/" element={<LogIn />} />
          <Route path="/join/forgot-password/" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
