import React from 'react';
import '../styles/footerStyle.css';

const Footer=()=>{
    const footerStyle={
        backgroundImage: "linear-gradient(to top right, rgb(129, 154, 236, .5), rgb(73, 167, 255, .5))"
    }

    return(
        <footer>
            <div class="footerStyle">
                
                    <h1 style={{padding:"0 0 0 40px"}}>Scott Cho 2.2</h1>
              
                
                <div class="wrap">
                    <div style={{textAlign: "center", margin: "0 40px 0 0"}}>
                        <h3 style={{marginBottom:"0px"}}>541-255-5401</h3>
                        <h3 style={{marginTop:"0px"}}>srmcho81.rd@gmail.com</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;