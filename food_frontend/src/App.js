import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home149 from './pages/Home149';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home149 />} />
      </Routes>
    </Router>
  );
}

export default App;
