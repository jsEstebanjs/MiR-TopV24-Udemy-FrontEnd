import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './pages'
import NotFound from './pages/NotFound'
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
