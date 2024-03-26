// 리액트18 버전
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

const rootNode = document.getElementById('root');

// createRoot 사용
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);