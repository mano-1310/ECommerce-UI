import React from 'react'
import images1 from './assets/images/dressModels/m1.jpg'
import images2 from './assets/images/dressModels/m2.jpg'
import images3 from './assets/images/dressModels/m3.jpg'
import ImageSlider from './ImageSlider1'

const Home = () => {
  return (
    <div className="min-h-screen top-0 pt-10" >
      <div className="flex justify-center ">
        <h1 className="text-black transition-colors ease-in 1.5 animate-type hover:text-red-400 font-poppins font-bold lg:text-9xl sm:text-[]">E Fashion</h1>
      </div>
      <div className="flex justify-center my-6 overflow-hidden text-2xl">
        <h3 className="text-xl lg: sm:text-center text-red-700"> Quote : <p className="text-center text-black inline-block text-[30px] p-5" >"The joy of dressing is an art." —John Galliano</p> </h3>
      </div>
      <div className=" justify-center overflow-hidden sm:flex">
        <ImageSlider images1={[images1, images2, images3]} />
      </div>
      <h1 className="font-semibold text-left ml-10 py-4">All Brands</h1>
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src='https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png' alt="Mountain" />
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 ">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fashion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Style</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Model</span>
          </div>
        </div>

        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src='https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png' alt="River" />
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">River</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 ">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fashion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Style</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Model</span>
          </div>
        </div>

        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src='https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png' alt="Forest" />
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Forest</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fashion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Style</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Model</span>
          </div>
        </div>
        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src='https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png' alt="Mountain" />
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fashion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Style</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Model</span>
          </div>
        </div>

        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src='https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png' alt="River" />
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">River</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 ">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fashion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Style</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Model</span>
          </div>
        </div>

        <div className="rounded bg-white overflow-hidden shadow-lg">
          <img className="w-full" src='https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png' alt="Forest" />
          <div className="px-6 py-8">
            <div className="font-bold text-xl mb-2">Forest</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fashion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Style</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Model</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home