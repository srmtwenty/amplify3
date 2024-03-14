import React, {useEffect, useState} from 'react';
//import Menu from '../components/Menu';
import {Route, Switch} from 'react-router-dom';
// import aboutPic from '../images/IMG_3058_400.jpg';
// import aboutPage from '../images/background_flip1.jpg';
// import bg1a from '../images/bg1a.jpg';
// import bg1da from '../images/bg1da.jpg';
// import profile1a from '../images/profile1a.jpg';
import bg1da1 from '../images/bg1da1.jpg';
import aboutPic1 from '../images/IMG_0335a1.jpg';
import aboutPic2 from '../images/IMG_2377b.jpg';
import '../styles/aboutStyle.css';

import bg3a2 from '../images/bg3a2.jpg';
import Footer from '../components/Footer';

import HTML from '../images/icons/HTML.png';
import CSS from '../images/icons/CSS.png';
import Python from '../images/icons/python.png';
import JavaScript from '../images/icons/JavaScript.png';
import MongoDB from '../images/icons/mongodb.png';
import Express from '../images/icons/expressjs.png';
import React1 from '../images/icons/react.png';

import Node from '../images/icons/nodejs.png';
import Java from '../images/icons/java.png';
import Git from '../images/icons/github.png';


import Spring from '../images/icons/spring.png';

import SQL from '../images/icons/sqlite.png';

import Unity from '../images/icons/unity.png';

import Maya from '../images/icons/maya.png';
import Visual from '../images/icons/visual_studio.png';
import Audacity from '../images/icons/audacity.png';
import AEffect from '../images/icons/after-effects.png';
import Motion from '../images/icons/MotionBuilder.png';
import Illustrator from '../images/icons/adobe-round-illustrator.png';
import Photo from '../images/icons/adobe-round-photoshop.png';
import Postman from '../images/icons/postman.png';
import Api from '../images/icons/api-settings.png';
import Mongoose from '../images/icons/mongoose.png';
import Sailpoint from '../images/icons/sailpoint.png';

import Dbeaver from '../images/icons/dbeaver.png';
import Docker from '../images/icons/docker.png';
import Intellij from '../images/icons/intellij.png';
import Postgres from '../images/icons/postgresql.png';

const About=()=>{
    const eachSkill={
        display: "flex", 
        // textAlign: "left",
        border: "red none 2px", 
        width: "220px",
        height: "60px",
        justifyContent: "left",
        // height: "50px",
        // marginLeft: "5px",
        // marginRight: "5px"
        margin: "5px"
    }
    const eachSkill2={
        color:"white",
        display: "flex", 
        // textAlign: "left",
        border: "red none 2px", 
        width: "230px",
        justifyContent: "left",
        // height: "50px",
        // marginLeft: "5px",
        // marginRight: "5px"
        margin: "5px"
    }

    return(
     
        <div style={{backgroundColor: "rgba(238, 238, 238)", width: "100%"}}>
        {/* <div style={{backgroundImage: `url(${File_001a})`, width: "1900px"}}> */}
            
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.7)", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", paddingTop:"20px", width: "100%", display: "block"}}>
                {/* <div style={{backgroundImage: `url(${bg1da1})`, marginLeft:"auto", marginRight: "auto"}}> */}
                
                <div style={{textAlign: "leftcenter", display: "block", maxHeight: "35%", paddingBottom: "20px", border: "red none 2px", width: "100%", height: "auto"}}>
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent: "space-between"}}>
                        
                        {/*<div style={{backgroundImage: `url(${bg3a2})`, marginTop: "20px",paddingBottom: "260px", margin: "0 auto", maxWidth: "900px", height: "auto", border: "cyan none 2px", backgroundRepeat:"no-repeat", backgroundSize:"contain"}}>
                        </div>*/}
                        <div style={{margin:"auto"}}>
                            <h1 style={{fontSize:"5rem", fontWeight:"800px", letterSpacing:"-.025em", lineHeight:"1px"}}>Scott Cho</h1>
                            <h2 style={{margin:"1rem 0px 0px 0px"}}>A Full Stack Developer</h2>
                            <h2 style={{margin:"0px"}}>& A CG Animator</h2>
                        </div>
                    </div>
                </div>
                    
                <div class="aboutPage">

                    <div class="aboutPageSub">
                        <div className="aboutStyle">
                            
                            <h2 class="title">As A Full Stack Developer:</h2>
                            <div style={{display: "inline-flex", justifyContent:"center"}}>
                                <div className="content1">
                                    <p>I am passionate about learning and finding efficient problem solutions in coding.</p>
                                    <p>I learned CSS, Python, MERN and Java at CodingDojo for 14 weeks without a computer science background in 2020, after keeping an eye on to a fast growing coding industry for a couple years.<br></br>
                                    At the camp, I also worked on three projects under team working environment in Python, MERN and Java which helped me to understand coding further and get used to communicate with other teammates frequently to discuss problem solutions.</p>

                                </div>
                                <img src={aboutPic1} style={{width:"30%", height:"30%", paddingLeft:"10px"}}/>
                            </div>
                                <h2 style={{fontStyle:"italic", marginLeft:"auto", marginRight:"auto", width: "100px", textAlign: "center", borderBottomStyle:"solid"}}>Skills</h2>
                                <div class="skills">
                                
                                    <div style={eachSkill}>
                                        <img src={HTML} style={{width:"50px", height:"50px", border:"yellow solid 2px"}}/>
                                        <h4>HTML</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h4>CSS</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h4>Python</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={JavaScript} style={{width:"50px", height:"50px"}}/>
                                        <h4>JavaScript</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={MongoDB} style={{width:"50px", height:"50px"}}/>
                                        <h4>MongoDB</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Mongoose} style={{width:"50px", height:"50px"}}/>
                                        <h4>Mongoose</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Express} style={{width:"50px", height:"50px"}}/>
                                        <h4>Express</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={React1} style={{width:"50px", height:"50px"}}/>
                                        <h4>React</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Node} style={{width:"50px", height:"50px"}}/>
                                        <h4>Node</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Spring} style={{width:"50px", height:"50px"}}/>
                                        <h4>Spring Tool Suite</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Java} style={{width:"50px", height:"50px"}}/>
                                        <h4>Java</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Visual} style={{width:"50px", height:"50px"}}/>
                                        <h4>Visual Studio Code</h4>
                                    </div>
                                    {/* <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Bcrypt</h3>
                                    </div> */}
                                    <div style={eachSkill}>
                                        <img src={SQL} style={{width:"50px", height:"50px"}}/>
                                        <h4>MySQL</h4>
                                    </div>
                                 
                                    <div style={eachSkill}>
                                        <img src={Postman} style={{width:"50px", height:"50px"}}/>
                                        <h4>Postman</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Git} style={{width:"50px", height:"50px"}}/>
                                        <h4>Github</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Api} style={{width:"50px", height:"50px"}}/>
                                        <h4>Api</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Postgres} style={{width:"50px", height:"50px"}}/>
                                        <h4>PostgreSQL</h4>
                                    </div>
                                    
                                    
                                    <div style={eachSkill}>
                                        <img src={Dbeaver} style={{width:"50px", height:"50px"}}/>
                                        <h4>Dbeaver</h4>
                                    </div>

                                    <div style={eachSkill}>
                                        <img src={Docker} style={{width:"50px", height:"50px"}}/>
                                        <h4>Docker</h4>
                                    </div>

                                    <div style={eachSkill}>
                                        <img src={Intellij} style={{width:"50px", height:"50px"}}/>
                                        <h4>Intellij</h4>
                                    </div>
                                </div>
                        </div>    
                        
                            <div className="aboutStyle2">
                                <h2 class="title">As An Animator:</h2>
                                <div style={{display: "inline-flex", justifyContent:"center"}}>
                                    <img src={aboutPic2} style={{width:"30%", height:"30%", paddingRight:"10px"}}/>
                                    <div className="content1">
                                        <p>I am passionate of making variety type of exciting animations for various characters(human, vehicles, animals) in film or video game. I love watching animated films, athletics, or live action to analyze and understand more about camera&character movements.</p>
                                        <p>I earned a MFA degree at the Academy of Art University with a major in 3D Character Animation.  From 2009 to 2012, I took graduate animation courses focusing on performance, mechanical motion, and was mentored under veteran industry animators. 
                                        In 2013, I collaborated with a team on animating characters and camera lay-out in three collaborative projects: Borderlands 2, Junior Giants 2014, and Scaredy Bat.<br></br>
                                        I worked in development of 'Chasing Dead' game from Oct 2014 to May 2016 for the indie game company '2020 Venture Studios'.  In May 2019, I worked for Tim Everitt Productions' to animate dinosaur shots in 90 min cg animated film "Lone Pup" as a freelancer.
                                        </p>
                                    </div>
                                </div>

                                <h2 style={{fontStyle:"italic", marginLeft:"auto", marginRight:"auto", width: "100px", borderBottomStyle:"solid", textAlign: "center"}}>Skills</h2>
                                <div class="skills2">
                                    
                                    <div style={eachSkill}>
                                        <img src={Maya} style={{width:"50px", height:"50px"}}/>
                                        <h4>Maya</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Photo} style={{width:"50px", height:"50px"}}/>
                                        <h4>Photoshop CS</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h4>Premiere Pro</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Motion} style={{width:"50px", height:"50px"}}/>
                                        <h4>MotionBuilder</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Unity} style={{width:"50px", height:"50px"}}/>
                                        <h4>Unity</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={AEffect} style={{width:"50px", height:"50px"}}/>
                                        <h4>After Effect</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Illustrator} style={{width:"50px", height:"50px"}}/>
                                        <h4>Illustrator CS</h4>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Audacity} style={{width:"50px", height:"50px"}}/>
                                        <h4>Audacity</h4>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            
            </div>
           
     
        </div>                                
    )
}
export default About;