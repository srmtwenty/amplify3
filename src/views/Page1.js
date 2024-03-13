import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Scott_Cho_resume_full_stack_developer from '../documents/Scott_Cho_Resume _Full_Stack_2022A.pdf';
function Page1(){
    return(
        <>
            <div style={{backgroundColor: "rgb(223, 243, 255)", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                <div className="resumeStyle">
                    <h3 style={{textAlign: "center", paddingBottom: "10px"}}>*Choose a resume to view:</h3>
                    <div>
                        <Link style={{fontSize:"16px", textDecoration: "none"}} class="current" to="/resume_code">Full Stack Developer</Link> 
                        <Link class="currentOff" style={{fontSize:"16px", textDecoration: "none"}} to="/resume_anim">CG Animator</Link>
                    </div>
                    <SinglePagePDFViewer pdf={Scott_Cho_resume_full_stack_developer}/>

                    <div style={{textAlign:"center"}} >
                        <a href={Scott_Cho_resume_full_stack_developer} download="Scott_Cho_resume_full_stack_developer">Download Resume(Full Stack Developer)</a>
                    </div>    
                </div>
                
            </div>
        </>
    )
}

export default Page1;