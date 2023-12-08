import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Scott_Cho_resume_cg_animator from '../documents/Scott_Cho_resume_cg_animator.pdf';
function Page2(){
    return(
        <>
            <div style={{backgroundColor: "white", border: "yellow solid 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                <div className="resumeStyle">
                    <h2 style={{textAlign: "center", paddingBottom: "10px"}}>*Choose a resume to view:</h2>
                    <Link className="currentOff" style={{fontSize:"16px", textDecoration: "none"}} to="/resume_code">Resume(full stack developer)</Link> 
                    <Link style={{fontSize:"16px", textDecoration: "none"}} className="current" to="/resume_anim">Resume(cg animator)</Link>
                    
                    <SinglePagePDFViewer pdf={Scott_Cho_resume_cg_animator}/>
                    <div style={{textAlign:"center"}} >
                        <a className="dl" href={Scott_Cho_resume_cg_animator} download="Scott_Cho_resume_cg_animator">Download Resume(CG Animator)</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page2;