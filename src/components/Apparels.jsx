import React from 'react'
import Arrows from '../assets/arrowbuttons.png'
import "../css/Apparels.css";
export default function Apparels() {
    return (
        <div className="Apparel-main">
          <div className="Heading">
            <h3 className='Apparels'>Apparels</h3>
            <p className='Selection'>Add to your selection</p>
          </div>
          <div className="features">
            <p>Latest</p>
            <p>Featured</p>
            <p>Special</p>
          </div>
          <div className="Arrow">
            <img src={Arrows} alt="logo" />
          </div>
        </div>
    );
}
