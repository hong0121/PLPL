import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
//import NaverLogin from "./pages/NaverLogin/NaverLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/naver-login" element={<NaverLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
