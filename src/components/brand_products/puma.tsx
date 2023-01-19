import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
const products = [
  {
    "id": 1,
    "product_name": "Mercedes F1 Youth Sweatpants",
    "img_url": 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/533706/01/fnd/IND/fmt/png/Mercedes-F1-Youth-Sweatpants',
    "price": "3,039rs"
  },
  {
    "id": 2,
    "product_name": "Summer Squeeze Youth Jacket",
    "img_url": 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/675395/35/fnd/IND/fmt/png/Summer-Squeeze-Youth-Jacket',
    "price": "2,399rs"
  },
  {
    "id": 3,
    "product_name": "Puma Women's Regular Fit T-Shirt",
    "img_url": 'https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg',
    "price": "459rs - 700rs"
  },
  {
    "id": 4,
    "product_name": "Puma Men's Regular Track Pants",
    "img_url": 'https://m.media-amazon.com/images/I/71qnE1vkOjL._UY550_.jpg',
    "price": "899rs"
  },
  {
    "id": 5,
    "product_name": "Puma Women's Black Leggings ",
    "img_url": 'https://m.media-amazon.com/images/I/61nLGVicJ5L._UL1500_.jpg',
    "price": "1,339rs - 2,286rs"
  },
]
const puma = () => {
  return (
    <div className="min-h-screen">
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {
          products.map((product, index) =>
            <div className="rounded bg-white overflow-hidden shadow-lg" key={index}>
              <img className="w-full h-[500px]" src={product.img_url} alt="puma" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-center mb-2">{product.product_name}</div>
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
                    <input type="number" defaultValue={1} className="w-full shadow-lg h-[30px] px-2" />
                  </label>
                </div>
                <div className="pt-2 text-xl font-bold">
                  <h3>Price : {product.price} </h3>
                </div>
              </div>
              <div className="justify-center flex gap-3 p-2">
                <button className="py-1 w-[50px] rounded flex justify-center items-center bg-white" title='Add to Cart'>{< BsFillHeartFill fill='red' size={30} />}</button>
                <button className="py-1 w-full rounded text-white hover:bg-slate-400 bg-black">Buy</button></div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default puma