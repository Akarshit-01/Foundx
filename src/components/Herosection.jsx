import React from 'react'
import "../css/Herosection.css";
// import Heroimage from '../assets/heroimage.png'
// import herotext from '../assets/herotext.png'
import  HeroImage from '../assets/porter.png'

function Herosection() {
  return (
    <div className="Hero-Section">
         {/* <img className="Hero-Text" src={herotext} alt="Hero Section" /> */}
        <img className="Hero-Image" src={HeroImage} alt="Hero Section" />
      
    </div>
    
  )
}

export default Herosection
