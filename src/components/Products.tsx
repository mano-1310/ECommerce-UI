import React from 'react'

const products = [
  {
    "dress_id": 0,
    "dress_brand": "CK",
    "dress_type": "pant",
    "dress_size": "35",
    "dress_style": "Lycra",

    "dress_cost": "500",
    "img_url": "https://5.imimg.com/data5/SELLER/Default/2022/1/MB/AQ/BY/144571246/men-formal-lycra-pant-500x500.png"
  },

]
const Posts = () => {
  return (
    <div className="min-h-screen sm:flex" id='product'>
      {
        products.map((product, index) =>
          <div className='grid grid-rows-1 gap-3 md:mx-9 sm:p-4 '>
            <div className="bg-white h-[400px] w-[1800px] shadow-md rounded-lg overflow-hidden overflow-y-auto  rows-span-1">
              <div key={index}>
                <div className="flex items-center">
                  <div className=" flex items-start">
                    <img className="h-[400px] w-[400px] items-start" src={product.img_url} alt="no img" />
                  </div>
                  <div className="px-2 block">
                    <h1 className="inline-block text-center font-bold text-xl p-2 "> {product.dress_brand}</h1>
                    <h1 className="inline-block text-center"><h1 className="font-bold"> Type : </h1> {product.dress_type}</h1>
                    <h1 className="inline-block text-center"><h1 className="font-bold"> Style : </h1> {product.dress_style}</h1>
                    <div className="px-1 mt-2">
                      <select className="w-full outline-none focus:outline-gray-500 shadow-md rounded-sm" placeholder="size" defaultValue='S'>
                        <option className="bg-none">S</option>
                        <option selected className="">M</option>
                        <option className="">X</option>
                        <option className="">XL</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Posts