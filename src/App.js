import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Tailwind from './component/Tailwind';
import Pwd from './component/Pwd';

function App() {
  return (
    <Router>
      <div className="bg-red">
        <Routes>
          <Route path="/pwd" element={<Pwd />} />
          <Route path="/tailwind" element={<Tailwind />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
