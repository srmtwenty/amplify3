import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import About from './views/About';
import WorksAnim from './views/WorksAnim';
import WorksCode from './views/WorksCode';
import Page1 from './views/Page1';
import Page2 from './views/Page2';

import React from 'react';

//import Collapsible from './views/Collapsible';
//import Image from './images/concept1a.jpg';
//import Resume from './views/Resume';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/works_anim" element={<WorksAnim/>}/>
        <Route path="/works_code" element={<WorksCode/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
      </Routes>
      <Footer/>      
    </Router>
    
  );
}

export default App;
