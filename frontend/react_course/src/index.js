import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './pages/signup';
import Signup2 from './pages/signup2';
import { Login } from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signup2/>
    <Login/>
  </React.StrictMode>
);
