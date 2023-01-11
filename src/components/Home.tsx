import React from 'react'
import { NavLink } from 'react-router-dom'
import images from './assets/images/dressModels/m1.jpg'
const Home = () => {
  return (
    <div className="min-h-screen mt-10 justify-center flex" id='home'>
      <div className="flex justify-start items-start">
        <img src={images} alt="no img" className="md:w-[1000px] shadow-xl sm:w-full"/>
      </div>
      <div className="block ">
        <h1 className="text-black transition-colors flex justify-center ease-in 1.5 animate-type hover:text-red-400 font-poppins font-bold md:text-[190px] sm:text-[100px]">E Fashion</h1>
        <div className="font-bold flex mt-10 justify-center">
          <button className="items-center py-3 mt-[10px] px-2 text-center group relative rounded-md overflow-hidden drop-shadow-xl bg-black">
            <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <NavLink to='/products'><span className="relative text-white group-hover:text-black">Go Shopping</span> </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home