import React from 'react';
import SHORTCUT_PANEL from '../../components/SHORTCUT_PANEL/SHORTCUT_PANEL';
import NavBar from '../../components/NavBar/NavBar';
import Top from '../../components/Top/Top';
import './Intro.css';


function Intro() {
  return (
    <div className='intro-container'>
      <div className='top-section'>
        {/* navbar-section과 가로길이만 맞추면 됌 */}
        <Top />
      </div>
      <div className='NavBar-section'>
        <NavBar />
      </div>
      <div className='SHORTCUT_PANEL-section'>
        <SHORTCUT_PANEL />
      </div>
      
    </div>
  );
}

export default Intro;
