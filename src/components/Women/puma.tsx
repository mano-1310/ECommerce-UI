import React from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const products = [
  {
    "id": 1,
    "product_name": "Puma Regular Fit T-Shirt",
    "img_url": 'https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg',
    "price": "459rs - 700rs"
  },
  {
    "id": 2,
    "product_name": "Puma Women's Leggings ",
    "img_url": 'https://m.media-amazon.com/images/I/61nLGVicJ5L._UL1500_.jpg',
    "price": "1,339rs - 2,286rs"
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
            <div className=" bg-white overflow-hidden hover:cursor-pointer border hover:border-black drop-shadow-lg" key={index}>
              <img className="w-full h-[400px]" src={product.img_url} alt="puma" />
              <div className="px-6 py-4">
                <div className="text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <p className="border-b-2 border-b-slate-200"></p>
              <div className="justify-center flex divide-x-2 divide-gray-400">
              <button onClick={notify} className="w-full flex justify-center transition ease-in-out hover:bg-black hover:text-white items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
              <button className="h-[50px] w-[200px] text-black  transition ease-in-out hover:bg-red-900 hover:text-white hover:drop-shadow-lg">View</button>
              </div>
            </div>
          )
        } 
      </div>
    </div>
  )
}

export default puma