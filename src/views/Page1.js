import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";
import res1 from '../documents/Resume2021c.pdf';
import Scott_Cho_resume_full_stack_developer from '../documents/Scott_Cho_Resume _Full_Stack_2022A.pdf';
function Page1(){
    return(
        <>
            <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
            <Link to="/page1">Page1</Link> 
            <Link to="/page2">Page2</Link>
            <h1>Page1</h1>
            <SinglePagePDFViewer pdf={Scott_Cho_resume_full_stack_developer}/>

            <a href={Scott_Cho_resume_full_stack_developer} download="Scott_Cho_resume_full_stack_developer">Download Resume(Full Stack Developer)</a>
        </>
    )
}

export default Page1;