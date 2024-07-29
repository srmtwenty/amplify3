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
import ReactPlayer from 'react-player';

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
import HomepageTitle from '../images/homepage_title2024a.jpg';
import RPG5a from '../images/rpg_api5a.jpg';
import RPG_NewA from '../images/project_game_video_2024a_09.jpg'
const About=()=>{
    const eachSkill={
        display: "flex", 
        // textAlign: "left",
        border: "2px solid",
        borderRadius:"5px", 
        width: "180px",
        height: "50px",
        justifyContent: "left",
        // height: "50px",
        // marginLeft: "5px",
        // marginRight: "5px"
        margin: "5px",
        padding:"7px 7px 0 7px"
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

    const aboutStyle1a={
        marginTop: "20px",
        width: "95%",
        boxShadow:"0 2px 4px 0",
    /*background-color: rgb(184, 184, 184);*/
        borderRadius: "10px",
        border: "black solid 2px",
        padding:"10px",
        marginLeft:"auto",
        marginRight:"auto",
        
    }
    const aboutStyle2a={
        
        width: "95%",
    /*background-color: rgb(184, 184, 184);*/
        backgroundImage: "linear-gradient(to bottom, rgba(184, 184, 184, .8), white)",
        borderRadius: "10px",
        boxShadow:"0 2px 4px 0",
        border: "black solid 2px",
        padding:"10px",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: "50px",
        marginBottom:"50px"
    }

    const playerStyle={
        position:"absolute",
        top:0,
        left:0,
        width: "100%",
        height: "100%",
        //marginLeft: "auto",
        //marginRight: "auto"
    }
    return(
     
        <div style={{backgroundColor: "rgba(238, 238, 238)", width:"100%"}}>
            
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.7)", border: "white solid 1px", marginLeft:"auto", marginRight:"auto", paddingTop:"20px", minWidth:"400px",maxWidth: "80%", display: "block"}}>

       
                    {/*<div style={{textAlign: "leftcenter", display: "block", maxHeight: "35%", border: "black solid 1px", width: "100%", height: "auto"}}>*/}
                        <div style={{display:"flex", flexWrap:"wrap", justifyContent: "space-between", paddingBottom:"20px"}}>
                            
                            <img src={HomepageTitle} style={{display:"block", minWidth:"200px",maxWidth:"500px", margin:"auto", border:"solid black 1px"}}/>
                                
                        </div>
                    {/*</div>*/}
                        
                        <div style={{backgroundColor:"rgba(235, 250, 252)",boxShadow:"0 2px 4px 0",border:"gray solid 1px", borderRadius:"10px", padding:"10px 10px 40px 10px", margin:"auto", width:"90%"}}>
                            <div style={{margin:"auto"}}>
                                <div style={{margin:"auto"}}>
                                    <h2 style={{textAlign:"center"}}>Update (7/10/2024):</h2>
                                </div>
                                
                                <div style={{margin:"auto", width:"80%"}}>
                                    <ul>
                                        <li>Api and RPG Game has been added under "Works(Coding) page"</li>
                                        
                                    </ul>
                                </div>
                           
                                    <div style={{backgroundColor:"black", maxHeight:"79%", maxWidth:"79%", margin:"auto"}}>
                                        <img src={RPG_NewA} style={{maxHeight:"80%", maxWidth:"80%",display:"block", margin:"auto"}}/>
                                    {/*}
                                    <div style={{position:"relative", paddingTop:"56.25%"}}>
                                                <ReactPlayer style={playerStyle}
                                                    url="https://vimeo.com/925275553" 
                                                    controls
                                                    width="100%"
                                                    height="100%"
                                                />
                                    </div>*/}
                                    </div>
                                
                            </div>
                        </div>
                    
                        <div className="aboutPageSub">
                            <div style={aboutStyle1a}>

                                <h2 className="title">As A Full Stack Developer:</h2>
                                
                            
                                <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                                    <img src={aboutPic1} style={{minWidth:"100px",height:"auto", display:"block", margin:"auto", paddingBottom:"10px", marginTop:"10px"}}/>
                                    <div className="content1">
                                        <p>I am passionate about learning and finding efficient problem solutions in coding.</p>
                                        <p>I learned CSS, Python, MERN and Java at CodingDojo for 14 weeks without a computer science background in 2020, after keeping an eye on to a fast growing coding industry for a couple years.</p>
                                        <p>At the camp, I also worked on three projects under team working environment in Python, MERN and Java which helped me to understand coding further and get used to communicate with other teammates frequently to discuss problem solutions.</p>

                                    </div>
                                    
                                </div>
                                    <h2 style={{fontStyle:"italic", marginLeft:"auto", marginRight:"auto", width: "100px", textAlign: "center", borderBottomStyle:"solid"}}>Skills</h2>
                                    <div className="skills">
                                    
                                        <div style={eachSkill}>
                                            <img src={HTML} className="skillImg"/>
                                            <h5 className="skillName">HTML</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={CSS} className="skillImg"/>
                                            <h5 className="skillName">CSS</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Python} className="skillImg"/>
                                            <h5 className="skillName">Python</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={JavaScript} className="skillImg"/>
                                            <h5 className="skillName">JavaScript</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={MongoDB} className="skillImg"/>
                                            <h5 className="skillName">MongoDB</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Mongoose} className="skillImg"/>
                                            <h5 className="skillName">Mongoose</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Express} className="skillImg"/>
                                            <h5 className="skillName">Express</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={React1} className="skillImg"/>
                                            <h5 className="skillName">React</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Node} className="skillImg"/>
                                            <h5 className="skillName">Node</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Spring} className="skillImg"/>
                                            <h5 className="skillName">Spring Tool Suite</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Java} className="skillImg"/>
                                            <h5 className="skillName">Java</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Visual} className="skillImg"/>
                                            <h5 className="skillName">Visual Studio Code</h5>
                                        </div>
                                        {/* <div style={eachSkill}>
                                            <img src={Python} style={{width:"50px", height:"50px"}}/>
                                            <h3>Bcrypt</h3>
                                        </div> */}
                                        <div style={eachSkill}>
                                            <img src={SQL} className="skillImg"/>
                                            <h5 className="skillName">MySQL</h5>
                                        </div>
                                    
                                        <div style={eachSkill}>
                                            <img src={Postman} className="skillImg"/>
                                            <h5 className="skillName">Postman</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Git} className="skillImg"/>
                                            <h5 className="skillName">Github</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Api} className="skillImg"/>
                                            <h5 className="skillName">Api</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Postgres} className="skillImg"/>
                                            <h5 className="skillName">PostgreSQL</h5>
                                        </div>
                                        
                                        <div style={eachSkill}>
                                            <img src={Dbeaver} className="skillImg"/>
                                            <h5 className="skillName">Dbeaver</h5>
                                        </div>

                                        <div style={eachSkill}>
                                            <img src={Docker} className="skillImg"/>
                                            <h5 className="skillName">Docker</h5>
                                        </div>

                                        <div style={eachSkill}>
                                            <img src={Intellij} className="skillImg"/>
                                            <h5 className="skillName">Intellij</h5>
                                        </div>
                                    </div>
                                </div>    
                        
                                <div style={aboutStyle2a}>
                                    <h2 className="title">As An Animator:</h2>
                                    
                                    <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop:"10px"}}>
                                        <img src={aboutPic2} style={{minWidth:"100px",height:"auto", display:"block", margin:"auto", paddingBottom:"10px"}}/>
                                        <div className="content1">
                                            <p>I am passionate of making variety type of exciting animations for various characters(human, vehicles, animals) in film or video game. I love watching animated films, athletics, or live action to analyze and understand more about camera&character movements.</p>
                                            <p>I earned a MFA degree at the Academy of Art University with a major in 3D Character Animation.  <br></br>From 2009 to 2012, I took graduate animation courses focusing on performance, mechanical motion, and was mentored under veteran industry animators. 
                                            <br></br>In 2013, I collaborated with a team on animating characters and camera lay-out in three collaborative projects: Borderlands 2, Junior Giants 2014, and Scaredy Bat.
                                            <p>I worked in development of 'Chasing Dead' game from Oct 2014 to May 2016 for the indie game company '2020 Venture Studios'.  <br></br>In May 2019, I worked for Tim Everitt Productions' to animate dinosaur shots in 90 min cg animated film "Lone Pup" as a freelancer.</p>
                                            </p>
                                        </div>
                                    </div>

                                    <h2 style={{fontStyle:"italic", marginLeft:"auto", marginRight:"auto", width: "100px", borderBottomStyle:"solid", textAlign: "center"}}>Skills</h2>
                                    <div className="skills2">
                                        
                                        <div style={eachSkill}>
                                            <img src={Maya} className="skillImg"/>
                                            <h5 className="skillName">Maya</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Photo} className="skillImg"/>
                                            <h5 className="skillName">Photoshop CS</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={CSS} className="skillImg"/>
                                            <h5 className="skillName">Premiere Pro</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Motion} className="skillImg"/>
                                            <h5 className="skillName">MotionBuilder</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Unity} className="skillImg"/>
                                            <h5 className="skillName">Unity</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={AEffect} className="skillImg"/>
                                            <h5 className="skillName">After Effect</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Illustrator} className="skillImg"/>
                                            <h5 className="skillName">Illustrator CS</h5>
                                        </div>
                                        <div style={eachSkill}>
                                            <img src={Audacity} className="skillImg"/>
                                            <h5 className="skillName">Audacity</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

               
            </div>
           
     
        </div>                                
    )
}
export default About;