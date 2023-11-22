import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Link} from 'react-router-dom';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

//import Menu from "../components/Menu";
import {Route, Switch} from 'react-router-dom';
// import bg1da1 from '../images/bg1da1.jpg';

//import DownloadLink from "react-download-link";
import Footer from '../components/Footer';

import ResumeC1 from '../images/Resume2022cs1.jpg';
//import ResumeC from '../images/Resume2022cs.jpg';
import bg1da1 from '../images/bg1da1.jpg';

import Scott_Cho_resume_full_stack_developer from '../documents/Scott_Cho_Resume _Full_Stack_2022A.pdf';
import PDF from '../documents/Untitled document.pdf';

const ResumeCode=(props)=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { pdf } = props;

    return(
        
 
        <div>
        {/* <div style={{backgroundImage: `url(${bg1da1})`}}> */}
            <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                {/* <div style={{backgroundImage: `url(${bg1da1})`,  height:'1200px'}}> */}

                
                <div className="resumeStyle">
                    <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                    
                    <Link style={{textDecoration: "none"}} class="current" to="/resume_code">Resume (full-stack-developer)</Link> 

                    <Link class="currentOff" style={{textDecoration: "none"}} to="/resume_anim">Resume (cg character animator)</Link>
               
                    <SinglePagePDFViewer pdf={PDF} />
                    
                    <a href={Scott_Cho_resume_full_stack_developer} download="Scott_Cho_resume_full_stack_developer">Download Resume(Full Stack Developer)</a>
                </div>
                
                <Footer/>
            
            </div>
        </div>
    )
}
export default ResumeCode;