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

    const aboutStyle1a={
        marginTop: "20px",
        width: "95%",
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
            
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.7)", border: "white solid 1px", marginLeft:"auto", marginRight:"auto", paddingTop:"20px", minWidth:"400px",maxWidth: "70%", display: "block"}}>

       
                    {/*<div style={{textAlign: "leftcenter", display: "block", maxHeight: "35%", border: "black solid 1px", width: "100%", height: "auto"}}>*/}
                        <div style={{display:"flex", flexWrap:"wrap", justifyContent: "space-between", paddingBottom:"20px"}}>
                            
                            

                            <img src={HomepageTitle} style={{display:"block", minWidth:"200px",maxWidth:"500px", margin:"auto", border:"solid black 1px"}}/>
                                
                         
                        </div>
                    {/*</div>*/}
                        
                        <div style={{border:"blue solid 2px", borderRadius:"10px", padding:"20px 10px 10px 10px", margin:"auto", width:"80%"}}>
                            <div style={{margin:"auto"}}>
                                <div style={{margin:"auto"}}>
                                    <h2 style={{textAlign:"center"}}>Current Project I am working on:</h2>
                                </div>
                                
                            
                                <div>
                                    <ul>
                                    <li>Full Stack Web Application with Api and RPG Game</li>
                                    <li>You can create your own character.</li>
                                    <li>You can purchase and equip various weapons and armors.</li>
                                    <li>Last but not least, you can fight against various monsters around the world!</li>
                                </ul>
                                </div>
                           
                            <div style={{margin:"auto", border:"1px solid", padding:"10px, 0, 0, 10px, 0"}}>
                                <img src={RPG5a} style={{width:"100%"}}/>
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
                                <img src={aboutPic1} style={{width:"250px", height:"auto", display:"block", margin:"auto", paddingBottom:"10px"}}/>
                            
                                <div style={{display: "inline-flex", justifyContent:"center"}}>
                                
                                    <div className="content1">
                                        <p>I am passionate about learning and finding efficient problem solutions in coding.</p>
                                        <p>I learned CSS, Python, MERN and Java at CodingDojo for 14 weeks without a computer science background in 2020, after keeping an eye on to a fast growing coding industry for a couple years.</p>
                                        <p>At the camp, I also worked on three projects under team working environment in Python, MERN and Java which helped me to understand coding further and get used to communicate with other teammates frequently to discuss problem solutions.</p>

                                    </div>
                                    
                                </div>
                                    <h2 style={{fontStyle:"italic", marginLeft:"auto", marginRight:"auto", width: "100px", textAlign: "center", borderBottomStyle:"solid"}}>Skills</h2>
                                    <div className="skills">
                                    
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
                        
                                <div style={aboutStyle2a}>
                                    <h2 className="title">As An Animator:</h2>
                                    <img src={aboutPic2}  style={{width:"250px", height:"auto", display:"block", margin:"auto", paddingBottom:"10px"}}/>
                                    <div style={{display: "inline-flex", justifyContent:"center"}}>
                                        
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
    )
}
export default About;