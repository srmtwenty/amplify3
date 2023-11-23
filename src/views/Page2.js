import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Scott_Cho_resume_cg_animator from '../documents/Scott_Cho_resume_cg_animator.pdf';
function Page2(){
    return(
        <>
        <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
            <div className="resumeStyle">
                <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                <Link className="currentOff" style={{textDecoration: "none"}} to="/resume_code">Resume(full stack developer)</Link> 
                <Link style={{textDecoration: "none"}} className="current" to="/resume_anim">Resume(cg animator)</Link>
                <h1>Resume (CG Animator)</h1>
                <SinglePagePDFViewer pdf={Scott_Cho_resume_cg_animator}/>
            
                <a className="dl" href={Scott_Cho_resume_cg_animator} download="Scott_Cho_resume_cg_animator">Download Resume(CG Animator)</a>
            </div>
            </div>
        </>
    )
}
export default Page2;