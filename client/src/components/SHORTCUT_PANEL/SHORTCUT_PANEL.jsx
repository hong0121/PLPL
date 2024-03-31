import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SHORTCUT_PANEL.css'; // CSS 파일 import

function SHORTCUT_PANEL() {
  const [isPanelAHovered, setIsPanelAHovered] = useState(false);
  const [isPanelBHovered, setIsPanelBHovered] = useState(false);

  return (
    <div className="panel-container">
      <Link to="/home" className={`panel panel-a ${isPanelAHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsPanelBHovered(true)} onMouseLeave={() => setIsPanelBHovered(false)}>
        <img src="/반려식물.avif" alt="반려식물" className='panel-a img' />
        <span>반려식물 키우기</span>
      </Link>
      <Link to="/home" className={`panel panel-b ${isPanelBHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsPanelAHovered(true)} onMouseLeave={() => setIsPanelAHovered(false)}>
        <img src="/선물하기.jpeg" alt="반려식물" className='panel-b img' />
        <span>선물하러 가기</span>
      </Link>
    </div>
  );
}

export default SHORTCUT_PANEL;
