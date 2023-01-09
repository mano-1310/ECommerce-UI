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
  {
    "dress_id": 1,
    "dress_brand": "Loveable",
    "dress_type": "Round Neck Tshirt",
    "dress_size": "S",
    "dress_style": "Lycra",
    "dress_cost": "749",
    "img_url": "https://m.media-amazon.com/images/I/61QYWRZVtFL._UL1200_.jpg"
  },
  {
    "dress_id": 1,
    "dress_brand": "CK",
    "dress_type": "Tshirt",
    "dress_size": "35",
    "dress_style": "Lycra",
    "dress_cost": "749",
    "img_url": ""
  },
  {
    "dress_id": 1,
    "dress_brand": "CK",
    "dress_type": "Pant ",
    "dress_size": "35",
    "dress_style": "Lycra",
    "dress_cost": "749",
    "img_url": ""
  },


]
const Posts = () => {
  return (
    <div className="min-h-screen sm:flex" id='product'>
      {
        products.map((product, index) =>
          <div className='grid md:grid-cols-4 gap-3 sm:grid-cols-1 md:mx-9 sm:p-4 '>
            <div className="bg-white h-[800px] w-[400px] shadow-md rounded-lg overflow-hidden overflow-y-auto  col-span-2">
              <div key={index}>
                <div>
                  <img className="h-[500px] w-[400px] flex " src={product.img_url} alt="no img" />
                </div>
                <div className="px-2">
                  <h1 className="block text-center font-bold text-xl p-2 "> {product.dress_brand}</h1>
                  <h1 className="block"><h1 className="inline-block font-bold"> Type : </h1> {product.dress_type}</h1>
                  <div className="px-1 mt-2">
                    <select className="w-full outline-none focus:outline-gray-500 shadow-md rounded-sm" placeholder="size">
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
        )
      }
    </div>

  )
}

export default Posts