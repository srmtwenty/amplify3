import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Scott_Cho_resume_full_stack_developer from '../documents/Scott_Cho_Resume _Full_Stack_2022A.pdf';
function Page1(){
    return(
        <>
            <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
            <div className="resumeStyle">
                <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                <Link style={{textDecoration: "none"}} class="current" to="/resume_code">Resume(full stack developer)</Link> 
                <Link class="currentOff" style={{textDecoration: "none"}} to="/resume_anim">Resume(cg animator)</Link>
                <h1>Resume (Full Stack Developer)</h1>
                <SinglePagePDFViewer pdf={Scott_Cho_resume_full_stack_developer}/>

                <a href={Scott_Cho_resume_full_stack_developer} download="Scott_Cho_resume_full_stack_developer">Download Resume(Full Stack Developer)</a>
            </div>
            </div>
        </>
    )
}

export default Page1;