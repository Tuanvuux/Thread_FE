import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss'
import './style.css';
import AddPostPage from './pages/addPostPage';
import PostListPage from './pages/postPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <BrowserRouter>
    <Router />
  </BrowserRouter> */}
  {/* <AddPostPage/> */}
  <PostListPage/>
  </React.StrictMode>
);
reportWebVitals();
