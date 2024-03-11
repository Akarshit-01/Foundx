import React from 'react'
import Tshirt1 from "../assets/tshirt1.png"
import Tshirt2 from "../assets/tshirt2.png"
import Tshirt3 from "../assets/tshirt3.png"
import Rating from "../assets/rate.png"
import "../css/Products.css";
export default function Products() {
  return (

    <div className='cardParant'>
       <div className="card">
        <div>
        <img src={Tshirt1} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>

      {/* 2nd card */}
      <div className="card">
        <div>
        <img src={Tshirt2} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>
      {/* 3rd card */}
      <div className="card">
        <div>
        <img src={Tshirt3} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>
      {/* 4th card */}
      <div className="card">
        <div>
        <img src={Tshirt3} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>

        
      </p>
      </div>
      
      {/* 5th card */}
      <div className="card">
        <div>
        <img src={Tshirt3} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>
      {/* 6th card */}
      <div className="card">
        <div>
        <img src={Tshirt2} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>
      {/* 7th card */}
      <div className="card">
        <div>
        <img src={Tshirt3} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>
      {/* 8th card */}
      <div className="card">
        <div>
        <img src={Tshirt3} alt="" />
      </div>
      <div>
      <h3>Leather Gloves</h3>
        <p>Perfect mint green</p>
      </div>
      
      <div class="rate-container">
        <img class="rating" src={Rating} alt="" />
      </div>

      <p className="offer-container">
        <span>Price</span>
        <div className='price'>
        <span>260$</span>
        <span style={{textDecoration:"line-Through"}}>300$</span>
        </div>
        
      </p>
      </div>
    
    </div>
     
  )
}
