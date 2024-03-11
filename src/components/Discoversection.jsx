import React from 'react'
import Arrows1 from '../assets/arrowbuttons.png'
import "../css/Discoversection.css";
export default function Apparels() {
    return (
        <div className="Discover-main">
          <div className="Discover">
            <h3>Discover more. Good things are waiting for you</h3>
          </div>
          <div className="Arrow1">
            <img src={Arrows1} alt="logo" />
          </div>
        </div>
    );
}