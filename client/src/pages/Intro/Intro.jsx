import React from 'react';
import SHORTCUT_PANEL from '../../components/SHORTCUT_PANEL/SHORTCUT_PANEL';
import MenuBar from '../../components/MenuBar/MenuBar';

function Intro() {

  return (
    <div className=''>
        <div className='MenuBar-section'>
            <MenuBar />
        </div>
        <div className='SHORTCUT_PANEL-section'>
            <SHORTCUT_PANEL />
        </div>
    </div>

  );
}

export default Intro;
