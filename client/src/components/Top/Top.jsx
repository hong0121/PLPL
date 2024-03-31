import "./Top.css";
import React from "react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <nav className="navbar">
      <div className="top-container">
        <div className="top-items">
          <ul className="top-list">
            <li>
              <Link to="/login" className="top-link">
                로그인
              </Link>
            </li>
            <li>
              <Link to="/signup" className="top-link">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Top;
