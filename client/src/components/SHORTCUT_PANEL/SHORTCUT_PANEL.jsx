import React, { useState } from 'react';
import './SHORTCUT_PANEL.css'; // CSS 파일 import

function SHORTCUT_PANEL() {
  const [isPanelAHovered, setIsPanelAHovered] = useState(false);
  const [isPanelBHovered, setIsPanelBHovered] = useState(false);

  return (
    <div className="panel-container">
      <div className={`panel panel-a ${isPanelAHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsPanelBHovered(true)} onMouseLeave={() => setIsPanelBHovered(false)}>
        <h2>바로 가기 패널 A</h2>
      </div>
      <div className={`panel panel-b ${isPanelBHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsPanelAHovered(true)} onMouseLeave={() => setIsPanelAHovered(false)}>
        <h2>바로 가기 패널 B</h2>
      </div>
    </div>
  );
}

export default SHORTCUT_PANEL;
