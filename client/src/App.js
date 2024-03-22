import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NaverLogin from "./pages/NaverLogin/NaverLogin";

function App() {
  const handleLogin = (credentials) => {
    // 로그인 처리 로직 작성
    console.log("Login credentials:", credentials);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />} // onLogin 함수를 props로 전달
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/naver-login" element={<NaverLogin />} />
      </Routes>
    </div>
  );
}

export default App;
