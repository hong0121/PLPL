import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create a root for the React application
const root = createRoot(document.getElementById('root'));

// Render the application inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
