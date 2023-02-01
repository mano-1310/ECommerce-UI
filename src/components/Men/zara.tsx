import React from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
const products = [
  {
    "id": 1,
    "product_name": "TEXTURED BLACK T-SHIRT",
    "img_url": "https://static.zara.net/photos///2023/V/0/2/p/0761/412/800/2/w/850/0761412800_2_4_1.jpg?ts=1674031057640",
    "price": "₹ 1,990rs"
  },
  {
    "id": 2,
    "product_name": "MEN'S HOODIE LIMITED EDITION",
    "img_url": "https://static.zara.net/photos///2023/V/0/2/p/0761/437/401/2/w/850/0761437401_2_5_1.jpg?ts=1673538656103",
    "price": "₹ 2,990rs"
  },
  {
    "id": 3,
    "product_name": "CONT CABLE-KNIT SWEATER",
    "img_url": "https://static.zara.net/photos///2023/V/0/2/p/9598/426/250/2/w/850/9598426250_1_1_1.jpg?ts=1673368309997",
    "price": "₹ 3,990.0"
  },
]
const zara = () => {
  const notify = () => toast("Item Added in Cart");
  return (
    <div className="min-h-fit pb-3">
      <ToastContainer theme='colored' transition={Bounce} limit={4}  autoClose={2000} />
    <div className="lg:px-10 sm:px-6 sm:pb-6 sm:mt-3 lg:mt-0  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
      {
        products.map((product, index) =>
          <div className=" bg-white overflow-hidden hover:cursor-pointer border hover:border-black drop-shadow-lg" key={index}>
            <img className="w-full h-[500px]" src={product.img_url} alt="zara" />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">{product.product_name}</div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center flex divide-x-2 divide-gray-400 ">
                <button onClick={notify} className="py-1 w-full flex justify-center transition ease-in-out hover:bg-black hover:text-white items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
                <button className="h-[50px] w-[200px] text-black  transition ease-in-out hover:bg-red-900 hover:text-white hover:drop-shadow-lg">View</button>
            </div>
          </div>
        )
      }
    </div>
  </div>
  )
}

export default zara