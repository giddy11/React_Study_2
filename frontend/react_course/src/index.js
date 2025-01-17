import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/signup';
import Signup2 from './pages/signup2';
import { Login } from './pages/login';
import Home from './pages/home';
import Page_1 from './pages/page_1';
import Page_2 from './pages/page_2';
import Page_3 from './pages/page_3';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/page1" element={<Page_1/>}></Route>
        <Route path="/page2" element={<Page_2/>}></Route>
        <Route path="/page3" element={<Page_3/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


/**
 * Navigation: Moving from one location or page to another.
 * 
 * localhost:3000/
 * 
 * Two things needed for you to navigate
 * path: /js, /css
 * function name
 * /login --- <Login/> route
 * /signup --- <Signup/> route
 * /js --- ja route
 * 
 * There are 3 main functions in react to enable us perform navigation
 * The BrowserRouter - it provides the platform for other routes
 * The Routes - this represents all the routes or pages
 * The Route - this represent just one route
 * 
 */