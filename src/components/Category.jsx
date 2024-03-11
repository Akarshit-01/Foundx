import React from 'react'
import "../css/Category.css";
function Category() {
  return (
    <div className='Category'>
    
      <h2 className="Cath">Category</h2>
      <div className='Underline'></div>
      <input className="Catin" type="text" placeholder='Search here' >
      </input>
      {/* <div className='Search1'>
      <img src={Search1} alt="" />
      </div> */}
    </div>
  )
}

export default Category
