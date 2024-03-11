import React from 'react';
import Shoes from '../assets/shoes.png';
import "../css/Shoesgrid.css";

function Shoesgrid() {
  return (
    <div className='Grid-Parant'>
      {/* 1st card */}
      <div className="Shoes">
        <div>
          <img src={Shoes} alt="" />
        </div>
        <div className='Details'>
          <h3>Nike Sports Shoes</h3>
          <p>Up to 50% Off</p>
        </div> 
        <div className='Shopnow'>
          <p>Shop now</p>
        </div>
      </div>

      {/* 2nd card */}
      <div className="Shoes">
        <div>
          <img src={Shoes} alt="" />
        </div>
        <div className='Details'>
          <h3>Nike Sports Shoes</h3>
          <p>Up to 50% Off</p>
        </div> 
        <div className='Shopnow'>
          <p>Shop now</p>
        </div>
      </div>

      {/* 3rd card */}
      <div className="Shoes">
        <div>
          <img src={Shoes} alt="" />
        </div>
        <div className='Details'>
          <h3>Nike Sports Shoes</h3>
          <p>Up to 50% Off</p>
        </div> 
        <div className='Shopnow'>
          <p>Shop now</p>
        </div>
      </div>

      {/* 4th card */}
      <div className="Shoes">
        <div>
          <img src={Shoes} alt="" />
        </div>
        <div className='Details'>
          <h3>Nike Sports Shoes</h3>
          <p>Up to 50% Off</p>
        </div> 
        <div className='Shopnow'>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
}

export default Shoesgrid;
