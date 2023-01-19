import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import Popup from 'reactjs-popup'

const products = [
  {
    "id": 1,
    "product_name": "Calvin Klein Jeans  Men Black T-shirt",
    "img_url": 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19054674/2022/9/16/41fef07c-414c-45e0-8357-666c60b93ec11663308912368-Calvin-Klein-Jeans-Men-Tshirts-9831663308911777-1.jpg',
    "price": "850rs"
  },
  {
    "id": 2,
    "product_name": "Calvin Klein Gray FullHand T-shirt",
    "img_url": 'https://calvinklein.scene7.com/is/image/CalvinKlein/23100321_030_main?wid=440&hei=580&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
    "price": "976rs"
  },
  {
    "id": 3,
    "product_name": "Calvin Klein Women FullHand T-shirt",
    "img_url": 'https://images.stylight.net/image/upload/e_trim/t_web_product_330x440max_nobg/q_auto:eco,f_auto/frs2y08qbvqsxzmwb6bi.jpg',
    "price": "755rs - 1000rs"
  },
  {
    "id": 4,
    "product_name": "Calvin Klein Men's Black T-shirt",
    "img_url": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugMsrtilfQemcJoqG8IdTKKPmYdPUA2wuSw&usqp=CAU',
    "price": "675rs"
  },
  {
    "id": 5,
    "product_name": "Calvin Klein Women's White T-shirt",
    "img_url": 'https://rukminim1.flixcart.com/image/612/612/ksxjs7k0/t-shirt/t/0/2/s-j216518yaf-calvin-klein-jeans-original-imag6ef9e9dbvc6m.jpeg?q=70',
    "price": "500rs"
  },
]
const ck = () => {
  return (
    <div className="min-h-fit">
    <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
      {
        products.map((product, index) =>
          <div className="rounded bg-white overflow-hidden shadow-lg" key={index}>
            <img className="w-full h-[400px]" src={product.img_url} alt="ck" />
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

export default ck