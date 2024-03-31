import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // NavBar 컴포넌트에 해당하는 CSS 파일을 import합니다.

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/plpl_logo.png" alt="Flowbite Logo" />
          {/* <span className="brand-name">PLPL</span> */}
        </Link>
        <div className="menu-items">
          <ul className="menu-list">
            <li>
              <Link to="/home" className="menu-link">Services</Link>
            </li>
            <li>
              <Link to="/home" className="menu-link">Pricing</Link>
            </li>
            <li>
              <Link to="/home" className="menu-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;