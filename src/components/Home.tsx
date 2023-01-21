import React from 'react'
import { Link } from 'react-router-dom'
import images1 from './assets/images/dressModels/m1.jpg'
import images2 from './assets/images/dressModels/m2.jpg'
import images3 from './assets/images/dressModels/m3.jpg'
import p1 from './assets/images/p1.jpg'
import ImageSlider from './ImageSlider1'
import Topproducts from './Topproducts'

const allBrands = [
  {
    "id": 1,
    "path": '/adidas',
    "brand_name": "Adidas",
    "logo_url": 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png',
    "description": " Adidas was founded in 1949 and it is one of the most popular sportswear brands today. This is actually the second-largest sportswear manufacturer in the world presently. While it is more known for its shoes and other sportswear, Adidas has an impressive clothing catalog also. . ."
  },
  {
    "id": 2,
    "path": '/ck',
    "brand_name": "Calvin Klein",
    "logo_url": 'https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png',
    "description": "Calvin Klein Inc. was founded in 1968 and is an American fashion house. Its headquarters are in New York City's Midtown Manhattan, and it first came to India in 2007. It is a well-known brand with a large following, as well as a favourite among celebrities It is not merely a clothing . . ."
  },
  {
    "id": 3,
    "path": '/zara',
    "brand_name": "Zara",
    "logo_url": 'https://1000logos.net/wp-content/uploads/2022/08/Zara-log%D0%BE.png',
    "description": "Zara was started by Ortega Gaona and Rosalia Mera and is currently one of India's most popular clothing brands.  It is a subsidiary of the Inditex Group and operates 2270 locations worldwide, as well as online retailers It is known for its high-end quality and stylish design . . ."
  },
  {
    "id": 4,
    "path": '/puma',
    "brand_name": "Puma",
    "logo_url": 'https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg',
    "description": " Puma SE, branded as Puma, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear . . ."
  },
]

const Home = () => {
  return (
    <div className="min-h-screen top-0 pt-10" >
      <div className="flex justify-center my-6 overflow-hidden text-2xl">
        <h3 className="text-xl lg:text-start  sm:text-center text-red-700"> Quote : <p className="text-center text-black inline-block text-[30px] p-5" >"The joy of dressing is an art." —John Galliano</p> </h3>
      </div>
      <div className="lg:ml-3 sm:ml-0 justify-start overflow-hidden drop-shadow-xl sm:flex">
        <ImageSlider images1={[images1, images2, images3]} />
        <div className="flex lg:px-5 sm:px-3">
          <div className="grid grid-flow-row ">
            <h1 className="lg:text-3xl sm:text-xl">Top Trending Brands Dresses Are Available</h1>
            <div className="grid grid-flow-col">
              <img className="lg:h-[200px]  p-2" src={p1} alt="" />
              <img className="lg:h-[200px]  p-2" src={p1} alt="" />
            </div>
            <h1 className="lg:text-3xl sm:text-xl">Top Trending Brands Dresse collections Are Available</h1>
            <img className="lg:h-[200px]  p-2" src={p1} alt="" />
          </div>
        </div>
        <div className="inline-block overflow-hidden justify-center p-4">
        </div>
      </div>
      <h1 className="font-semibold text-left ml-10 py-4">All Brands</h1>
      <div className="lg:px-10 sm:px-5 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {
          allBrands.map((brand, index) =>
            <div className="rounded bg-white overflow-hidden shadow-lg" key={index}>
              <img className="w-full h-[300px] p-3 " src={brand.logo_url} alt="Model1" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{brand.brand_name}</div>
                <p className="text-gray-700 text-base">
                  {brand.description}
                </p>
              </div>
              <Link to={brand.path}>
                <div className="justify-center flex p-2"><button className="py-2 w-full rounded text-white hover:bg-slate-900 bg-black">Products</button></div></Link>
            </div>
          )
        }
      </div>
      <h1 className="font-semibold text-left ml-10 py-4">Top Products</h1>
      <div>
        < Topproducts />
      </div>
    </div>
  )
}

export default Home