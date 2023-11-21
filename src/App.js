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

import ResumeCode from './views/ResumeCode';
import ResumeAnim from './views/ResumeAnim';

import React from 'react';

//import Collapsible from './views/Collapsible';


//import Image from './images/concept1a.jpg';

//import Resume from './views/Resume';
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/works_anim" element={<WorksAnim/>}/>
        <Route path="/works_code" element={<WorksCode/>}/>
        <Route path="/resume_code" element={<ResumeCode/>}/>
        <Route path="/resume_anim" element={<ResumeAnim/>}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;
