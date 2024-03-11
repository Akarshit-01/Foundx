import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
// import Discoversection from '../components/Discoversection'
import Apparels from '../components/Apparels'
import Products from '../components/Products'
import Category from '../components/Category'
import Information from '../components/Information'
import Portfolio from '../components/Portfolio'
import Discoversection from '../components/Discoversection'
import Shoesgrid from '../components/Shoesgrid'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
     <Navbar/>
     <Herosection/>
     <Information/>
     <Category/>
     <Portfolio/>
     <Discoversection/>
     <Shoesgrid/>
     {/* <Discoversection/> */}
     <Apparels/>
     <Products/>
     <Footer/>
    </div>
  )
}

export default Home
