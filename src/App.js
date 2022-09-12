import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
