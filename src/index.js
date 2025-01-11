import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import './styles/style.scss'
import './style.css'; // Hoặc đường dẫn tới file CSS của bạn

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
reportWebVitals();
