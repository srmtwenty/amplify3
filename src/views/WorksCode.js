import React, {useState} from 'react';
//import Menu from '../components/Menu';
import {Link, Route, Switch} from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import 'react-slideshow-image/dist/styles.css'
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import ReactPlayer from 'react-player';
import '../styles/worksCode.css';

import Footer from '../components/Footer';
import project2a from '../images/project2a.png';
import project2b from '../images/project2b.jpg';
import project2c from '../images/project2c.png';

import project1a from '../images/project1a.png';
import project1b from '../images/project1b.png';
import project1c from '../images/project1c.png';
//import project3a from '../images/project3a.png';

import project3b1 from '../images/project3b1.png';
import project3b2 from '../images/project3b2.png';
import project3b3 from '../images/project3b3.png';
import project3b4 from '../images/project3b4.png';
import project3b5 from '../images/project3b5.png';

import project4b1 from '../images/p4a.png';
import project4b2 from '../images/p4b.png';
import project4b3 from '../images/p4c.png';
import project4b4 from '../images/p4d.png';
import project4b5 from '../images/p4e.png';
import project4b6 from '../images/p4f.png';
import project4b7 from '../images/p4g.png';
import project4b8 from '../images/p4h.png';

import bg1da1 from '../images/bg1da1.jpg';


import project5a from '../images/project5a.png';
import project5b from '../images/project5b.png';
import project5c from '../images/project5c.png';

import project6a from '../images/project6a.png';
import project6b from '../images/project6b.png';

import Project7a from '../images/project7a.jpg';
import project7b from '../images/project7b.jpg';
import project7c from '../images/project7c.jpg';
import project7d from '../images/project7d.jpg';
import project7e from '../images/project7e.jpg';
import project7f from '../images/project7f.jpg';
import project7g from '../images/project7g.jpg';
import project7h from '../images/project7h.jpg';
import project7i from '../images/project7i.jpg';

export default(props)=>{
    const images7=[
        {url:"static/media/project7a.37f80b779760ee5d5ff5.jpg"},
       {url:"static/media/project7b.2cefc492cf7208fdc326.jpg"},
       {url:"static/media/project7c.d4bbbef879c40d3c9f27.jpg"},
       {url:"static/media/project7d.f66b66a7fdf218051116.jpg"},
       {url:"static/media/project7e.6d05d81b647a70991021.jpg"},
       {url:"static/media/project7f.c67e8958a4fd47d1ff9b.jpg"},
       {url:"static/media/project7g.1f19f717b7c623dd33f2.jpg"},
       {url:"static/media/project7h.8c48731f20390226a129.jpg"},
        {url:"static/media/project7i.074fb37d9a99c1596768.jpg"},
        
    ]

    const images6=[
        {url: "static/media/project6a.5b5e0614ddc75e63f367.png"},
        {url: "static/media/project6b.377dca1acf464dfb78c2.png"},
    ];

    const images5=[
        {url: "static/media/project5a.eb9432b41ab0d68fea24.png"},
        {url: "static/media/project5b.c1081ad63f445a749eb5.png"},
        {url: "static/media/project5c.bd2c310b256485fc92c2.png"},
    ];

    const images4=[
        {url: "static/media/p4a.9d63158bdce20bac6449.png"},
        {url: "static/media/p4b.db3319377149b8486081.png"},
        {url: "static/media/p4c.57e97bc61dbbf356b741.png"},
        {url: "static/media/p4d.9ec5ef5a376c06f09c57.png"},
        {url: "static/media/p4e.8fb946c16b48d31c4d9d.png"},
        {url: "static/media/p4f.da01f69cbaba57d0bd10.png"},
        {url: "static/media/p4g.534bb0d79c77465e6400.png"},
        {url: "static/media/p4h.31b379d8dbb52dca40f7.png"}
    ];

    const images1=[
        {url: "static/media/project1a.d895974684c4ee9c2df9.png"},
        {url: "static/media/project1b.c78ddfe6d17a7036d496.png"},
        {url: "static/media/project1c.9cd02ff3faa422ef3d77.png"},
    ];

    const images2=[
        {url: "static/media/project2a.2bbaca9803f2c0d3f790.png"},
        {url: "static/media/project2b.175b5a3a48dc5fe471fd.jpg"},
        {url: "static/media/project2c.e88c4f68d9f9b5988b6b.png"},
    ];

    const images3=[
        {url: "static/media/project3b1.cab0e2a739614ed77f66.png"},
        {url: "static/media/project3b2.08355e9533bc0f5036a3.png"},
        {url: "static/media/project3b3.cd6a161e94e0daf5c058.png"},
        {url: "static/media/project3b4.df2787250ca382389eeb.png"},
        {url: "static/media/project3b5.3e8fe3db48ba9a4e43f2.png"},
    ];
    
    const playerStyle={
        position:"absolute",
        top:0,
        left:0,
        width: "100%",
        height: "100%",
        //marginLeft: "auto",
        //marginRight: "auto"
    }

    const subTitle={
        border:"solid 1px black",
        backgroundColor:"white",
        borderRadius:"5px",
        width:"200px",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"10px",
        marginBottom:"10px",
        padding:"2px 1px 2px 1px"
    }
    const subTitle2={
        border:"solid 1px black",
        backgroundColor:"white",
        borderRadius:"5px",
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"10px",
        marginBottom:"10px",
        padding:"2px 1px 2px 1px"
    }

    const video={
        margin:"auto", 
        padding:"10px, 0, 20px, 0"
    }

    const [expandWork1, setExpandWork1]=useState(false)
    const [expandWork2, setExpandWork2]=useState(false)
    const [expandWork3, setExpandWork3]=useState(false)
    const [expandWork4, setExpandWork4]=useState(false)
    const [expandWork5, setExpandWork5]=useState(false)
    const [expandWork6, setExpandWork6]=useState(false)
    const [expandWork7, setExpandWork7]=useState(false)

    const handleExpand1=()=>{
        if(expandWork1==false){
            setExpandWork1(true)
        }else{
            setExpandWork1(false)
        }
    }
    const handleExpand2=()=>{
        if(expandWork2==false){
            setExpandWork2(true)
        }else{
            setExpandWork2(false)
        }
    }
    const handleExpand3=()=>{
        if(expandWork3==false){
            setExpandWork3(true)
        }else{
            setExpandWork3(false)
        }
    }
    const handleExpand4=()=>{
        if(expandWork4==false){
            setExpandWork4(true)
        }else{
            setExpandWork4(false)
        }
    }
    const handleExpand5=()=>{
        if(expandWork5==false){
            setExpandWork5(true)
        }else{
            setExpandWork5(false)
        }
    }
    const handleExpand6=()=>{
        if(expandWork6==false){
            setExpandWork6(true)
        }else{
            setExpandWork6(false)
        }
    }
    const handleExpand7=()=>{
        if(expandWork7==false){
            setExpandWork7(true)
        }else{
            setExpandWork7(false)
        }
    }

    return(
        <>
        {/* <div style={{backgroundImage: `url(${project5a})`}}> */}
        
            
            <div style={{backgroundColor: "rgb(223, 243, 255)", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                <div style={{minWidth:"400px", textAlign: "center",maxWidth: "70%", height: "auto" , display:"block", marginLeft: "auto", marginRight: "auto", backgroundColor: "white", paddingTop: "3px", paddingBottom:"10px", border: "red none 2px"}}>
                    
                

                    <div style={{backgroundColor: "rgba(235, 255, 253)", boxShadow:"0 2px 5px 0", marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            
                            <div onClick={()=>handleExpand1()} style={subTitle2}>
                                <h3>Athlete Database Ver 2 (Java && React JS, 2024)</h3>
                                <p>Click to expand/collapse</p>
                            </div>

                            
                            {
                                expandWork1?
                                <>
                                    <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>   
                                <ul style={{display:"inline-block"}}>
                                    <li style={{textAlign:"left"}}><a href="https://github.com/srmtwenty/artistic2024c_ui">
                                        Github (UI)
                                    </a></li>
                                    <li style={{textAlign:"left"}}><a href="https://github.com/srmtwenty/artistic2024c">
                                        Github (Backend)
                                    </a></li>
                                </ul>

                                <div style={{margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>
                                            Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>
                                            Implemented JWT authentication and MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table

                                        </li>

                                        <li>
                                            Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>

                                        <li>
                                            Utilized Docker to create and run Postgres containers to use it as an API database.
                                        </li>
                                    </ul>
                                </div>
                                
                                <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 40px"}}>
                                    <p style={subTitle}>Screenshots</p>
                                    <div style={{border:"1px solid yellow"}}>
                                        <div style={{backgroundColor:"black", padding:"15px", margin:"20px, 0, 20px, 0"}}>
                                            <div style={{backgroundColor:"black", position:"relative", paddingTop:"62.25%"}}>
                                            
                                            <SimpleImageSlider
                                                width="100%"
                                                height="100%"
                                                images={images7}
                                                style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                                top:0,
                                                left:0,
                                                width: "100%",
                                                height: "100%"}}
                                                navStyle={1}
                                                showNavs={true}
                                                showBullets={true}
                                                bgColor="black"
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                

                                <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                                    <p style={subTitle}>Video</p>
                                        <div style={{backgroundColor:"black", border:"2px none solid",padding:"5px"}}>

                                            
                                            <div style={{position:"relative", paddingTop:"56.25%"}}>
                                                <ReactPlayer style={playerStyle}
                                                    url="https://vimeo.com/925266680"
                                                    controls
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </div>
                                        </div>
                                </div>   
                            </div>
                                </>
                                :<></>
                            }
                            
                        </div>



                        <div style={{backgroundColor: "rgba(252, 246, 230)", boxShadow:"0 2px 5px 0", marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            
                            <div onClick={()=>handleExpand2()} style={subTitle2}>
                                <h3>Amplifire Heroes (Java & React JS, 2022)</h3>
                                <p>Click to expand/collapse</p>
                            </div>
                            {
                               expandWork2?
                            <>
                                <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>   
                                <ul style={{display:"inline-block"}}>
                                    <li style={{textAlign:"left"}}><a href="https://github.com/srmtwenty/revature_project2_ui">
                                        Github (UI)
                                    </a></li>
                                    <li style={{textAlign:"left"}}><a href="https://github.com/srmtwenty/revature_project2_backend">
                                        Github (Backend)
                                    </a></li>
                                </ul>

                                <div style={{margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                </div>

                                <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                                <p style={subTitle}>Screenshots</p>

                                <div style={{backgroundColor:"black", padding:"15px"}}>
                                    <div style={{backgroundColor:"yellow", position:"relative", paddingTop:"62.25%"}}>
                                        <SimpleImageSlider
                                            width="100%"
                                            height="100%"
                                            images={images6}
                                            style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                            top:0,
                                            left:0,
                                            width: "100%",
                                            height: "100%"}}
                                            navStyle={1}
                                            showNavs={true}
                                            showBullets={true}
                                            bgColor="black"
                                        />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </>
                            :<></>
                            }
                            
                            
                        </div>

                        <div style={{backgroundColor:"rgba(240, 252, 230)", boxShadow:"0 2px 5px 0",marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            <div onClick={()=>handleExpand3()} style={subTitle2}>
                                <h3>Car Dealer Ship - Web API (Java, 2022)</h3>
                                <p>Click to expand/collapse</p>
                            </div>

                            {
                                expandWork3?
                                <>
                                    <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>
                                <a href="https://github.com/srmtwenty/revature_project1">
                                    Github
                                </a>
                                <div style={{margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Utilized Docker to create and run Postgres containers to use it as an api database.
                                        </li>

                                        <li>Used Dbeaver to connect to the database and execute sql statements to create & view data tables.
                                        </li>

                                        <li>Developed three different relational entities in the database using PostgresQL RDBMS technology for
                                        users giving power to create or retrieve as a non-user.
                                        </li>
                                    </ul>
                                </div>
                            
                            <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                            <p style={subTitle}>Screenshots</p>
                           
                            <div style={{backgroundColor:"black", padding:"15px", margin:"20px, 0, 20px, 0"}}>
                            <div style={{backgroundColor:"yellow", position:"relative", paddingTop:"62.25%"}}>
                                <SimpleImageSlider
                                    width="100%"
                                    height="100%"
                                    images={images5}
                                    style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                    top:0,
                                    left:0,
                                    width: "100%",
                                    height: "100%"}}
                                    navStyle={1}
                                    showNavs={true}
                                    showBullets={true}
                                    bgColor="black"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                                </>
                                :<></>
                            }
                        </div>



                        <div style={{backgroundColor: "rgba(235, 255, 253)", boxShadow:"0 2px 5px 0",marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            
                            <div onClick={()=>handleExpand4()} style={subTitle2}>
                                <h3>Athlete Database Ver 1 (Java, 2022)</h3>
                                <p>Click to expand/collapse</p>
                            </div>
                            {
                                expandWork4?
                                <>
                                    <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>
                                <a href="https://github.com/srmtwenty/my_java_project1_athlete_database">
                                    Github
                                </a>
                                <div style={{margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                
                                </div>

                                <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                                    <p style={subTitle}>Screenshots</p>
                                
                                <div style={{backgroundColor:"black", padding:"15px", margin:"20px, 0, 20px, 0"}}>
                                <div style={{backgroundColor:"yellow", position:"relative", paddingTop:"62.25%"}}>
                                    <SimpleImageSlider
                                        width="100%"
                                        height="100%"
                                        images={images4}
                                        style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                        top:0,
                                        left:0,
                                        width: "100%",
                                        height: "100%"}}
                                        navStyle={1}
                                        showNavs={true}
                                        showBullets={true}
                                        bgColor="black"
                                    />
                                </div>
                                </div>
                                </div>
                            </div>
                                </>
                                :<></>
                            }
                            
                 
                        </div>



                        <div style={{backgroundColor:"rgba(255, 247, 224)", boxShadow:"0 2px 5px 0",marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            <div onClick={()=>handleExpand5()} style={subTitle2}>
                                <h3>Friendbook - A clone of Facebook's social media app (Java, 2020)</h3>
                                <p>Click to expand/collapse</p>
                            </div>

                            {
                                expandWork5?
                                <>
                                    <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/friendbook-main1">
                                    Github
                                </a>
                                <div style={{margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts and attendees) and events for a secured and organized data table
                                        </li>

                                        <li>Developed five different relational models in MySQL database for users giving power to the user logged in, such as deleting or editing posts they created as hosts.
                                        </li>
                                    </ul>
                                </div>
                            
                                <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                                    <p style={subTitle}>Screenshots</p>
                      
                                <div style={{backgroundColor:"black", padding:"15px", margin:"20px, 0, 20px, 0"}}>
                                <div style={{backgroundColor:"yellow", position:"relative", paddingTop:"62.25%"}}>
                                    <SimpleImageSlider
                                        width="100%"
                                        height="100%"
                                        images={images3}
                                        style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                        top:0,
                                        left:0,
                                        width: "100%",
                                        height: "100%"}}
                                        navStyle={1}
                                        showNavs={true}
                                        showBullets={true}
                                        bgColor="black"
                                    />
                                </div>
                                </div>
                                </div>
                            </div>
                                </>
                                :<></>
                            }

                            
                    
                        </div>

                        <div style={{backgroundColor: "rgba(227, 250, 231)", boxShadow:"0 2px 5px 0",marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            <div onClick={()=>handleExpand6()} style={subTitle2}>
                                <h3>AQI-Maps - Real time air quality map(MERN, 2020)</h3>
                                <p>Click to expand/collapse</p>
                            </div>

                            {
                                expandWork6?
                                <>
                                    <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/AQI-Maps">
                                    Github
                                </a>
                                <div style={{margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Implemented React component forms with VS Code and MongoDB for secure login and registration
                                        </li>
                                        
                                        <li>Set validation error messages using React to bolster form security
                                        </li>
                                        
                                        <li>Used Axios to send HTTP post(user, email, password info for login, registration) from a client to a backend(server)
                                        </li>
                                    </ul>
                                </div>
                            
                                <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                                    <p style={subTitle}>Screenshots</p>
                   
                                <div style={{backgroundColor:"black", padding:"15px", margin:"20px, 0, 20px, 0"}}>
                                <div style={{backgroundColor:"yellow", position:"relative", paddingTop:"62.25%"}}>
                                    <SimpleImageSlider
                                        width="100%"
                                        height="100%"
                                        images={images2}
                                        style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                        top:0,
                                        left:0,
                                        width: "100%",
                                        height: "100%"}}
                                        navStyle={1}
                                        showNavs={true}
                                        showBullets={true}
                                        bgColor="black"
                                    />
                                </div>
                                </div>
                                </div>
                            </div>
                                </>
                                :<></>
                            }
    
                        </div>



                        <div style={{backgroundColor: "rgba(235, 255, 253)", boxShadow:"0 2px 5px 0",marginTop:"10px", padding: "10px 0px 10px 0px"}}>
                            <div onClick={()=>handleExpand7()} style={subTitle2}>
                                <h3>EasyShop - Simple E-commerce website (Python/Django, 2020)</h3>
                                <p>Click to expand/collapse</p>
                            </div>

                            {
                                expandWork7?
                                <>
                                    <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", border:"none yellow 2px",textAlign:"center", paddingBottom:"20px"}}>
                                
                                    <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/EasyShop-master">
                                        GitHub
                                    </a>
                                    <div style={{margin:"auto", border: "red none 2px"}}>
                                        <ul style={{margin: "20px", textAlign:"left"}}>
                                            <li>Configured templates in Python/Django cultivating a simplistic UI and shopping experience including viewing, adding, and ordering items.
                                            </li>
                                            <li>Implemented Bcrypt's hashing and HTML form validation to enhance security.
                                            </li> 
                                            <li>Constructed an intuitive front end design using CSS resulting in a seamless and on-brand user experience”    
                                            </li>
                                        </ul>
                                    </div>
                        
                                    <div style={{border:"1px solid none", borderRadius:"5px",padding:"20px 0px 0px 20px"}}>
                                        <p style={subTitle}>Screenshots</p>
                                    <div style={{backgroundColor:"black", padding:"15px", margin:"20px, 0, 20px, 0"}}>
                                    <div style={{backgroundColor:"yellow", position:"relative", paddingTop:"62.25%"}}>
                                        <SimpleImageSlider
                                            width="100%"
                                            height="100%"
                                            images={images1}
                                            style={{border: "black outset 2px", marginTop:"0px", marginBottom:"40px",position:"absolute",
                                            top:0,
                                            left:0,
                                            width: "100%",
                                            height: "100%"}}
                                            navStyle={1}
                                            showNavs={true}
                                            showBullets={true}
                                            bgColor="black"
                                            // onClickNav = {(toRight) => { }}
                                        />
                                    </div>
                                    </div>
                                    </div>
                                </div>  
                                </>
                                :<></>
                            }

                        </div>

                </div>
            </div>
          </>

    )
}