import React from 'react'
import Popup from 'reactjs-popup'

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
    "product_name": "Puma Regular Fit T-Shirt",
    "img_url": 'https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg',
    "price": "459rs - 700rs"
  },
  {
    "id": 4,
    "product_name": "Puma Regular Track Pants",
    "img_url": 'https://m.media-amazon.com/images/I/71qnE1vkOjL._UY550_.jpg',
    "price": "899rs"
  },
  {
    "id": 5,
    "product_name": "Puma Women's Leggings ",
    "img_url": 'https://m.media-amazon.com/images/I/61nLGVicJ5L._UL1500_.jpg',
    "price": "1,339rs - 2,286rs"
  },
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
    "product_name": "Puma Regular Fit T-Shirt",
    "img_url": 'https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg',
    "price": "459rs - 700rs"
  },
  {
    "id": 4,
    "product_name": "Puma Regular Track Pants",
    "img_url": 'https://m.media-amazon.com/images/I/71qnE1vkOjL._UY550_.jpg',
    "price": "899rs"
  },
  {
    "id": 5,
    "product_name": "Puma Women's Leggings ",
    "img_url": 'https://m.media-amazon.com/images/I/61nLGVicJ5L._UL1500_.jpg',
    "price": "1,339rs - 2,286rs"
  },
]
const puma = () => {
  return (
    <div className="min-h-fit">
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {
          products.map((product, index) =>
            <div className=" bg-white overflow-hidden hover:shadow-2xl" key={index}>
              <img className="w-full h-[400px]" src={product.img_url} alt="puma" />
              <div className="px-6 py-4">
                <div className="text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <p className="border-b-2 border-b-slate-200"></p>
              <div className="justify-center flex divide-x-2 divide-gray-400 gap-3 p-2">
                <button className="py-1 w-full flex justify-center  items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
                <Popup trigger={<button className="py-1 w-full text-black  hover:drop-shadow-lg">View</button>} position="top center">
                  
                    <div>
                      <label htmlFor="size" className="font-semibold py-1">Size</label>
                      <div className="font-bold">
                        <label htmlFor="extrasmall" className="px-4">XS</label>
                        <input type="checkbox" name="extrasmall" id="xs" className="" />
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

export default puma