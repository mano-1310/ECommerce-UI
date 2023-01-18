import React from 'react'
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
  {
    "id": 6,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
  {
    "id": 7,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": "450rs"
  },
  {
    "id": 8,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
  {
    "id": 9,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
  {
    "id": 10,
    "product_name": "Black T-shirt",
    "img_url": '',
    "price": ""
  },
]
const puma = () => {
  return (
    <div className="min-h-screen flex">
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {
          products.map((product, index) =>
            <div className="rounded bg-white overflow-hidden shadow-lg" key={index}>
              <img className="w-full h-[200px]" src={product.img_url} alt="puma" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-center mb-2">{product.product_name}</div>
                <div>
                  <p className="text-gray-700 text-base">
                  </p>
                  <label htmlFor="size" className="font-semibold py-1">Size</label>
                  <select name="size" id="sze" className="w-full shadow-sm">
                    <option>S</option>
                    <option selected>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXl</option>
                  </select>
                </div>
                <div className="pt-2">
                  <label htmlFor="quantity" className="font-semibold">Quantity
                    <input type="number" defaultValue={1} className="w-full shadow-sm h-[30px] px-2" />
                  </label>
                </div>
                <div className="pt-2 text-xl font-bold">
                  <h3>Price : {product.price} </h3>
                </div>
              </div>
              <div className="justify-center flex gap-3 p-2">
                <button className="py-1 w-full rounded text-white hover:bg-slate-700 bg-black" title='Add to Cart'>cart</button>
                <button className="py-1 w-full rounded text-white hover:bg-slate-400 bg-black">Buy</button></div>
            </div>
          )
        }
        <div >
          <a className="text-xl" href="/adidas">See More....</a>
        </div>
      </div>
    </div>
  )
}

export default puma