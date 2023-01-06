import React from 'react'
import img1 from './assets/model.png'

const Home = () => {
  return (
    <div className="min-h-screen mt-10 flex" id='home'>
      <div className="block ml-10">
        <h1 className="text-8xl font-poppins transition-colors hover:text-black font-semibold pl-7 pt-10"> Welcome </h1>
        <div className="inline-block">
          <h2 className="text-5xl transition-colors  hover:text-green-700 ml-20">to</h2>
        </div>
        <h1 className="text-black transition-colors font ease-in 1.5 animate-type hover:text-red-400 font-poppins font-bold text-7xl ml-10 mt-5">E Fashion</h1>
        <div className="p-8">
          <p className="w-[700px] h-[200px] text-gray-200 text-center  text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vehicula ipsum a arcu cursus. Facilisis gravida neque convallis a cras semper auctor. Ut lectus arcu bibendum at.
            Consequat id porta nibh venenatis cras sed felis eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.
            Consectetur lorem donec massa sapien faucibus et molestie. Magna fermentum iaculis eu non diam phasellus vestibulum.
            Dictum fusce ut placerat orci nulla pellentesque. Erat nam at lectus urna duis convallis convallis.</p>
        </div>
        <div className="font-bold ml-[300px] mt-[200px] ">
          <button className="items-center py-3 px-2 text-center group relative rounded-xl overflow-hidden drop-shadow-xl bg-purple-800">
            <div className="absolute inset-0 w-3 bg-purple-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">Go Shopping</span>
          </button>
        </div>
      </div>
      <div className="h-[900px] hover:animate-pulse justify-start ">
        <img className=" shadow-red-500  transition-transform hover: rounded-lg" src={img1} alt="Model" />
      </div>
    </div>
  )
}

export default Home