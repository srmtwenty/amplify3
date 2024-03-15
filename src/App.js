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

import React, {useState} from 'react';

//import Collapsible from './views/Collapsible';
//import Image from './images/concept1a.jpg';
//import Resume from './views/Resume';
//import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Navbar from './components/navbar/Navbar';
import {useSpring, animated} from 'react-spring';

function App() {
  const [flip, setFlip]=useState(false);
  const props=useSpring({
    to:{opacity:1},
    from:{opacity:0},
    //reset:true,
    //reverse:flip,
    delay:600,
    onRest:()=>setFlip(!flip),
  })
  return (
    <div className='App'>
      {/*
      <animated.div style={props}>*/}
          <Router>
            <Navbar/>
          
            <Routes>
              <Route path="/" element={<About />}/>
              <Route path="/works_anim" element={<WorksAnim/>}/>
              <Route path="/works_code" element={<WorksCode/>}/>
              <Route path="/resume_code" element={<Page1/>}/>
              <Route path="/resume_anim" element={<Page2/>}/>
            </Routes>
            <Footer/>      
          </Router>


      {/*</animated.div>*/}
    
    </div>
  );
}

export default App;
