import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
//import Navbar from './component/MenuBar/MenuBar'
//import Trade from './pages/Trade/Trade';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
