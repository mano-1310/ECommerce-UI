import React from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import Popup from 'reactjs-popup'

const products = [
  {
    "id": 1,
    "product_name": "Calvin Klein FullHand T-shirt",
    "img_url": 'https://images.stylight.net/image/upload/e_trim/t_web_product_330x440max_nobg/q_auto:eco,f_auto/frs2y08qbvqsxzmwb6bi.jpg',
    "price": "755rs - 1000rs"
  },
  {
    "id": 5,
    "product_name": "Calvin Klein White T-shirt",
    "img_url": 'https://rukminim1.flixcart.com/image/612/612/ksxjs7k0/t-shirt/t/0/2/s-j216518yaf-calvin-klein-jeans-original-imag6ef9e9dbvc6m.jpeg?q=70',
    "price": "500rs"
  },
]
const ck = () => {
  const notify = () => toast("Item Added in Cart");
  return (
    <div className="min-h-fit">
      <ToastContainer theme='colored' transition={Bounce} limit={4}  autoClose={2000} />
    <div className="lg:px-10 sm:pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
      {
        products.map((product, index) =>
          <div className=" bg-white overflow-hidden hover:cursor-pointer hover:outline hover:shadow-2xl" key={index}>
            <img className="w-full h-[400px]" src={product.img_url} alt="ck" />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">{product.product_name}</div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center flex divide-x-2 divide-gray-400">
            <button onClick={notify} className="py-1 w-full flex justify-center hover:transition hover:ease-in-out hover:delay-50 hover:bg-black hover:text-white items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
              <Popup trigger={<button className="h-[50px] w-[200px] text-black  hover:transition hover:ease-in-out hover:delay-50 hover:bg-gray-600 hover:text-white hover:drop-shadow-lg">View</button>} position="top center">
                  <div>
                    <label htmlFor="size" className="font-semibold py-1">Size</label>
                    <div className="font-bold">
                      <label htmlFor="extrasmall" className="px-4">XS</label>
                      <input type="checkbox" name="xtrasmall" id="xs" className="" />
                      <label htmlFor="small" className="px-4">S</label>
                      <input type="checkbox" name="small" id="s" />
                      <label htmlFor="medium" className="px-4">M</label>
                      <input type="checkbox" name="medium" id="m" />
                      <label htmlFor="large" className="px-4">L</label>
                      <input type="checkbox" name="large" id="l" />
                      <label htmlFor="extralarge" className="px-4">XL</label>
                      <input type="checkbox" name="extralarge" id="xl" />
                    </div>
                  <div className="pt-2">
                    <label htmlFor="quantity" className="font-semibold">Quantity
                      <input type="number" defaultValue={1} className="w-full border-2 rounded-md h-[30px] px-2" />
                    </label>
                  </div>
                  <div className="pt-2 text-xl font-bold">
                    <h3>Price : {product.price} </h3>
                  </div>
                  <div>
                    <button className="py-1 w-full rounded text-white hover:bg-slate-400 bg-black">Buy</button>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        )
      }
    </div>
  </div>
  )
}

export default ck