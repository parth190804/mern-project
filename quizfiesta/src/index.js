import React from 'react';
import ReactDOM from 'react-dom/client';
import'./components_home/home.css';
import './components_login/login.css';
import './components_about_us/about_us.css';
import App from './App';
import './user/quizform.css';
import './user/user.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

