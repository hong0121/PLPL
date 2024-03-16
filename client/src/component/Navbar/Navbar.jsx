import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/trade">거래소</Link>
          </li>
          <li>
            <Link to="/market">마켓</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;