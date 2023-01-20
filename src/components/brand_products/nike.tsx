import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import Popup from 'reactjs-popup'
const products = [
  {
    "id": 1,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": "450rs"
  },
  {
    "id": 2,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
  {
    "id": 3,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
  {
    "id": 4,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
  {
    "id": 5,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
]
const nike = () => {
  return (
    <div className="min-h-fit">
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1">
        {
          products.map((product, index) =>
            <div className=" bg-white overflow-hidden hover:shadow-lg" key={index}>
              <img className="w-full h-[400px]" src={product.img_url} alt="nike" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <div className="justify-center flex gap-3 p-2">
                <button className="py-1 w-[50px] rounded flex justify-center items-center " title='Add to Cart'>{< BsFillHeartFill fill='red' opacity={75} size={30} />}</button>
                <Popup trigger={<button className="py-1 w-full rounded text-white hover:bg-slate-400 bg-black">View</button>} position="top center">
                  <div>
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

export default nike