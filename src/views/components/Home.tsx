import React from 'react'
import img1 from '../components/assets/model1.png'
import Products from './Products'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
const Home = () => {

  function navigate () {
    <BrowserRouter>
    <Link to='#product'></Link>
    </BrowserRouter>
  }
  return (
    <div className="h-screen flex pt-[80px] bg-purple-800" id='home'>
      <div className="block">
        <h1 className="text-9xl font-poppins transition-colors hover:text-black font-semibold pl-7 pt-10"> Welcome </h1>
        <div className="inline-block">
          <h2 className="text-7xl transition-colors  hover:text-green-700 ml-20">to our</h2>
        </div>
        <h1 className="text-black transition-colors font ease-in 1.5 animate-type hover:text-red-400 font-poppins font-bold text-8xl ml-10 mt-5">Fashion World</h1>
        <div className="p-8">
          <p className="w-[700px] h-[200px] text-gray-400 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vehicula ipsum a arcu cursus. Facilisis gravida neque convallis a cras semper auctor. Ut lectus arcu bibendum at.
            Consequat id porta nibh venenatis cras sed felis eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.
            Consectetur lorem donec massa sapien faucibus et molestie. Magna fermentum iaculis eu non diam phasellus vestibulum.
            Dictum fusce ut placerat orci nulla pellentesque. Erat nam at lectus urna duis convallis convallis.</p>
        </div>
        <div className="font-bold ml-[300px] mt-[150px]">
          <button onClick={navigate} className="items-center py-3 px-2 text-center rounded-xl drop-shadow-xl hover:bg-purple-700 bg-purple-500">Go Shoping</button>
        </div>
      </div>
      <div className="flex h-[800px] mt-[50px]  ml-[150px] py-10 justify-center ">
        <img className="ml-[30px] bg-white  drop-shadow-2xl shadow-red-500 transition-transform  hover:rotate-6 rounded-lg" src={img1} alt="Model" />
      </div>
    </div>
  )
}

export default Home