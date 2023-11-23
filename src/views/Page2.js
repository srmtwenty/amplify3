import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Scott_Cho_resume_cg_animator from '../documents/Scott_Cho_resume_cg_animator.pdf';
function Page2(){
    return(
        <>
            <div className="resumeStyle">
            <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
            <Link to="/page1">Page1</Link> 
            <Link to="/page2">Page2</Link>
            <SinglePagePDFViewer pdf={Scott_Cho_resume_cg_animator}/>
            <h1>Page2</h1>

            <a className="dl" href={Scott_Cho_resume_cg_animator} download="Scott_Cho_resume_cg_animator">Download Resume(CG Animator)</a>
            </div>
        </>
    )
}
export default Page2;