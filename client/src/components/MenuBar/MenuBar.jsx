import React from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트 import
import './MenuBar.css'; // CSS 파일 import


function MenuBar() {
  return (
    <>
    <div className="auth-buttons">
        <Link to="/login" className="auth-button">로그인</Link>
        <Link to="/signup" className="auth-button">회원가입</Link>
      </div>
    <nav className="menu-bar">
      <ul className="menu-list">
        <li className="menu-item"><Link to="/">Intro</Link></li>
        <li className="menu-item"><Link to="/home">home</Link></li>
        {/* <li className="menu-item"><Link to="/services">Services</Link></li>
        <li className="menu-item"><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
    </>
  );
}

export default MenuBar;
