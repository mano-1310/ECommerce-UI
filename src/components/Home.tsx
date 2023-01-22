import React from 'react'
import { Link } from 'react-router-dom'
import images1 from './assets/images/dressModels/m1.jpg'
import images2 from './assets/images/dressModels/m2.jpg'
import images3 from './assets/images/dressModels/m3.jpg'
import images4 from './assets/images/dressModels/m4.jpg'
import p1 from './assets/images/p1.jpg'
import ImageSlider from './ImageSlider1'
import Topproducts from './Topproducts'

const allBrands = [
  {
    "id": 1,
    "path": '/adidas',
    "brand_name": "Adidas",
  },
  {
    "id": 2,
    "path": '/ck',
    "brand_name": "Calvin Klein",
  },
  {
    "id": 3,
    "path": '/zara',
    "brand_name": "Zara",
  },
  {
    "id": 4,
    "path": '/puma',
    "brand_name": "Puma",
  },
]

const Home = () => {
  return (
    <div className="min-h-screen top-0 pt-2" >
      <h1 className="font-semibold flex justify-center text-left lg:ml-10 sm:ml-2 py-4">Brands</h1>
      <div className="grid grid-flow-col justify-center lg:text-2xl sm:text-lg  outline hover:outline-transparent p-3">
        {
          allBrands.map((brand,index)=>
          <div key={index}> 
              <Link to={brand.path} className="hover:underline transition ease-in-out py-1.5 hover:outline-2 drop-shadow-lg px-4" title={brand.brand_name}>{brand.brand_name}</Link>
          </div>
          )
        }
      </div>
      <div className="flex justify-center my-6 overflow-hidden text-2xl">
        <h3 className="text-xl lg:text-start  sm:text-center text-red-700"> Quote : <p className="text-center text-black inline-block text-[30px] p-5" >"The joy of dressing is an art." —John Galliano</p> </h3>
      </div>
      <div className="lg:ml-3 sm:ml-0 justify-start overflow-hidden drop-shadow-xl sm:flex">
        <ImageSlider images1={[images1, images2, images3,images4]} />
        <div className="flex lg:px-5 sm:px-3">
          <div className="grid grid-flow-row ">
            <h1 className="lg:text-3xl sm:text-xl p-2 ">Top Trending Dresses Are Available</h1>
            <div className="grid grid-flow-col">
              <img className="lg:h-[200px] cursor-pointer p-2" src={p1} alt="" />
              <img className="lg:h-[200px] cursor-pointer p-2" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4113827b91d4490a292af3c0081cd8f_9366/Valentine's_Day_Jacket_Grey_IL8292_HM3_hover.jpg" alt="" />
              <img className="lg:h-[200px] cursor-pointer p-2" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e752098dde246d5aaddaf0300a12ce1_9366/Adicolor_Classics_Trefoil_Tee_White_IB7420_21_model.jpg" alt="" />
            </div>
            <h1 className="lg:text-3xl sm:text-xl  p-2 ">Best of Zara & Adidas</h1>
            <div className="grid grid-flow-col">
              <img className="lg:h-[600px] cursor-pointer p-2" src="https://static.zara.net/photos///2023/V/0/2/p/7545/470/430/2/w/850/7545470430_2_2_1.jpg?ts=1673612964410" alt="" />
              <img className="lg:h-[400px] cursor-pointer p-2" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a6cbb38905f4b098a02af0b017f7269_9366/Pharrell_Williams_Basics_Shorts_(Gender_Neutral)_Pink_HS4823_21_model.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="inline-block overflow-hidden justify-center p-4">
        </div>
      </div>
      <h1 className="font-semibold text-left ml-10 py-4">Top Products</h1>
      <div>
        < Topproducts />
      </div>
    </div>
  )
}

export default Home