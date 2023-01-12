import React from 'react'
import { NavLink } from 'react-router-dom'
import images1 from './assets/images/dressModels/m1.jpg'
import images2 from './assets/images/dressModels/m2.jpg'
import images3 from './assets/images/dressModels/m3.jpg'
import ImageSlider from './ImageSlider1'
const Home = () => {
  return (
    <div className="min-h-screen mt-10 " >
      <div className="flex justify-start ml-[23%]">
        <ImageSlider images={[images1, images2, images3]} />
      </div>
      <div className="ml-[40px]">
        <h1 className="text-black transition-colors flex justify-center ease-in 1.5 animate-type hover:text-red-400 font-poppins font-bold md:text-[190px] sm:text-[100px]">E Fashion</h1>
        <div className="font-bold flex mt-10 justify-center">
          <button className="items-center py-3 mt-[10px] px-2 text-center group relative rounded-md overflow-hidden drop-shadow-xl text-black bg-white hover:text-white hover:bg-black transition ease-in-out delay-50" >
            <NavLink to='/products'> </NavLink> Go Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home