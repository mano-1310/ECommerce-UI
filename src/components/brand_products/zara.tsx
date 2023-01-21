import React from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import Popup from 'reactjs-popup'
const products = [
  {
    "id": 1,
    "product_name": "FADED MINIMALIST  T-SHIRT",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/4424/642/822/2/w/850/4424642822_1_1_1.jpg?ts=1670842913890',
    "price": "990rs"
  },
  {
    "id": 2,
    "product_name": "FAUX LEATHER OVERSIZE  JACKET ",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/3427/811/800/2/w/850/3427811800_2_2_1.jpg?ts=1673979103860',
    "price": "5,990rs"
  },
  {
    "id": 3,
    "product_name": "TEXTURED MEN'S BLACK T-SHIRT",
    "img_url": 'https://static.zara.net/photos///2023/V/0/2/p/0761/412/800/2/w/850/0761412800_2_4_1.jpg?ts=1674031057640',
    "price": "1,990rs"
  },
  {
    "id": 4,
    "product_name": "WOMEN'S BOX KNIT MINI SKIRT ",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/3859/153/800/2/w/850/3859153800_2_1_1.jpg?ts=1673974056815',
    "price": "2,990rs"
  },
  {
    "id": 5,
    "product_name": "MEN'S HOODIE LIMITED EDITION",
    "img_url": 'https://static.zara.net/photos///2023/V/0/2/p/0761/437/401/2/w/850/0761437401_2_5_1.jpg?ts=1673538656103',
    "price": "2,990rs"
  },
  {
    "id": 1,
    "product_name": "FADED MINIMALIST  T-SHIRT",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/4424/642/822/2/w/850/4424642822_1_1_1.jpg?ts=1670842913890',
    "price": "990rs"
  },
  {
    "id": 2,
    "product_name": "FAUX LEATHER OVERSIZE  JACKET ",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/3427/811/800/2/w/850/3427811800_2_2_1.jpg?ts=1673979103860',
    "price": "5,990rs"
  },
  {
    "id": 3,
    "product_name": "TEXTURED MEN'S BLACK T-SHIRT",
    "img_url": 'https://static.zara.net/photos///2023/V/0/2/p/0761/412/800/2/w/850/0761412800_2_4_1.jpg?ts=1674031057640',
    "price": "1,990rs"
  },
  {
    "id": 4,
    "product_name": "WOMEN'S BOX KNIT MINI SKIRT ",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/3859/153/800/2/w/850/3859153800_2_1_1.jpg?ts=1673974056815',
    "price": "2,990rs"
  },
  {
    "id": 5,
    "product_name": "MEN'S HOODIE LIMITED EDITION",
    "img_url": 'https://static.zara.net/photos///2023/V/0/2/p/0761/437/401/2/w/850/0761437401_2_5_1.jpg?ts=1673538656103',
    "price": "2,990rs"
  },
]
const zara = () => {
  const notify = () => toast("Item Added in Cart");
  return (
    <div className="min-h-fit">
      <ToastContainer theme='colored' transition={Bounce} limit={4}  autoClose={2000} />
    <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
      {
        products.map((product, index) =>
          <div className=" bg-white overflow-hidden hover:cursor-pointer hover:outline hover:shadow-2xl" key={index}>
            <img className="w-full h-[500px]" src={product.img_url} alt="zara" />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">{product.product_name}</div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center flex divide-x-2 divide-gray-400 gap-3 p-2">
                <button onClick={notify} className="py-1 w-full flex justify-center  items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
              <Popup  trigger={<button className="py-1 w-full text-black  hover:drop-shadow-lg">View</button>} position="top center">
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

export default zara