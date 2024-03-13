import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import '../styles/resumeButton.css';
import {useWindowWidth} from '@wojtekmaj/react-hooks';

export default function SinglePage(props){
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    document.addEventListener("contextmenu", (event) => { 
      event.preventDefault(); 
    }); 

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }
    
      const { pdf } = props;
    
      const resumeStyle={
          marginRight:"auto",
          marginLeft:"auto",
          backgroundColor:"red",
          border:"10px solid blue"
      }
      const width=useWindowWidth();
      return (
        <>
          <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
          >
              <Page pageNumber={pageNumber} 
                    object-fit="fill"
                    renderTextLayer={false}
                    width={Math.min(width * 0.5, 900)}
                    margin="auto"
                    style={resumeStyle}
                    renderAnnotationLayer={false}   
              />
          </Document>
          <div style={{padding: "10px 0", textAlign:"center"}}>
            <p>
              (Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'})
            </p>
            <button 
              class="button"
              type="button" disabled={pageNumber <= 1} onClick={previousPage}>
              Previous Page
            </button>
            <button
              class="button"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next Page
            </button>
          </div>
          
        </>
      );
}