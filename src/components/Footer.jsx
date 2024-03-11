import React from 'react'
import "../css/Footer.css";
import logo from "../assets/logo.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"
import Linkedin from "../assets/linkedin.png"

function Footer() {
  return (
    <nav className="Footer-div">
        {/* 1st logo */}
        <div className="logo1">
            <img src={logo} alt="logo" />
        </div>
        
        {/* 2nd Menu parts */}
        <div className="Footer-link">
            <p  className='FooterTitle' >Home</p>
            
            <p>Pricing</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
        {/* 3rd search part & profile page */}
        <div className="Footer-part">
            <img className='FooterProfilepartimage' src={Facebook} alt="logo" />
            <img className='FooterProfilepartimage' src={Instagram} alt="logo" />
            <img className='FooterProfilepartimage' src={Twitter} alt="logo" />
            <img className='FooterProfilepartimage' src={Linkedin} alt="logo" />
        </div>
        <div className="Foundx">
        <p>FoundX for Founders</p>
        </div>
        <div className="Footer-Add">
            <p>Diaspora Hamlet Technologies Private Limited, © Copyrights 2023. All Rights Reserved.</p>
        </div>
        <div className="Footer-Line"></div>
        
    </nav>
  )
}

export default Footer
/* Line 10 */
