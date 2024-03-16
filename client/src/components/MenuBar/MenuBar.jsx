import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css'

function MenuBar() {
  return (
    <nav className="menu-bar"> {/* CSS 클래스 적용 */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">거래소</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default MenuBar;