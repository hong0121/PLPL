import React from 'react';
import SHORTCUT_PANEL from '../../components/SHORTCUT_PANEL/SHORTCUT_PANEL';
import NavBar from '../../components/NavBar/NavBar';
import Top from '../../components/Top/Top';
import './Intro.css';


function Intro() {
  return (
    <div className='intro-container'>
      <div className='Top-section'>
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
