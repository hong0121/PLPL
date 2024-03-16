import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar'
import Trade from './pages/Trade/Trade';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
      </Routes>
    </div>
  );
}

export default App;
