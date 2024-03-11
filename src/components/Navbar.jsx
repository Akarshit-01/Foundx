import React from 'react';
import "../css/Navbar.css";
import logo from "../assets/logo.png"
import heart from "../assets/hearts.png"
import profile from "../assets/profile.png"
import box from "../assets/bags.png"
import search from "../assets/searchbar.png"
import arrow from "../assets/arrow.png"
function Navbar() {
  return (
    <nav className="main-div">
        {/* 1st logo */}
        <div className="logo1">
            <img src={logo} alt="logo" />

        </div>
        {/* 2nd Menu parts */}
        <div className="menus-link">
            <p  className='menusTitle' >Home</p>
            
            <p>Pricing</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
        {/* 3rd search part & profile page */}
        <div className="Profile-part">
            <img className='Profilepartimage1' src={search} alt="logo" />
            <img className='Profilepartimage' src={box} alt="logo" />
            <img className='Profilepartimage' src={heart} alt="logo" />
            <img className='Profilepartimage' src={profile} alt="logo" />
            <img className='Profilepartimage' src={arrow} alt="logo" />
        </div>
    </nav>
    


  );
}

export default Navbar;
