import React from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const products = [
  {
    "id": 1,
    "product_name": "Mercedes F1  Sweatpants",
    "img_url": 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/533706/01/fnd/IND/fmt/png/Mercedes-F1-Youth-Sweatpants',
    "price": "3,039rs"
  },
  {
    "id": 2,
    "product_name": "Summer Squeeze Jacket",
    "img_url": 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/675395/35/fnd/IND/fmt/png/Summer-Squeeze-Youth-Jacket',
    "price": "2,399rs"
  },
  {
    "id": 3,
    "product_name": "Puma Regular Track Pants",
    "img_url": 'https://m.media-amazon.com/images/I/71qnE1vkOjL._UY550_.jpg',
    "price": "899rs"
  },
]
const puma = () => {
  const notify = () => toast("Item Added in Cart");
  return (
    <div className="min-h-fit">
      <ToastContainer theme='colored' transition={Bounce} limit={4}  autoClose={2000} />
      <div className="lg:px-10 sm:pb-6 sm:mt-3 lg:mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {
          products.map((product, index) =>
            <div className=" bg-white overflow-hidden hover:cursor-pointer hover:outline drop-shadow-lg" key={index}>
              <img className="w-full h-[400px]" src={product.img_url} alt="puma" />
              <div className="px-6 py-4">
                <div className="text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <p className="border-b-2 border-b-slate-200"></p>
              <div className="justify-center flex divide-x-2 divide-gray-400">
              <button onClick={notify} className="w-full flex justify-center hover:transition hover:ease-in-out hover:delay-50 hover:bg-black hover:text-white items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
              <button className="h-[50px] w-[200px] text-black  hover:transition hover:ease-in-out hover:delay-50 hover:bg-red-900 hover:text-white hover:drop-shadow-lg">View</button>
              </div>
            </div>
          )
        } 
      </div>
    </div>
  )
}

export default puma