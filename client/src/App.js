import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage';
import ViewBlog from './pages/viewBlog';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner';
import { AppProvider } from './context/appContext';
 
function App() {
  return (

    <React.StrictMode>
      <BrowserRouter>
 
          <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<ViewBlog />} />

        </Routes>
 
      
      </BrowserRouter>
    </React.StrictMode>


  );
}

export default App;
