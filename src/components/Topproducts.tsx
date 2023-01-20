import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Topproducts = [
  {
    "id": 1,
    "product_name": "DESIGNED 4 FULL-ZIP TRACK TOP",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b43a786deeff4895b21caf4600d8b2d4_9366/Designed_4_Gameday_Premium_Full-Zip_Track_Top_Brown_IC8043_21_model.jpg',
    "price": "6,050.0rs"
  },
  {
    "id": 2,
    "product_name": "Calvin Klein Gray FullHand T-shirt",
    "img_url": 'https://calvinklein.scene7.com/is/image/CalvinKlein/23100321_030_main?wid=440&hei=580&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
    "price": "976rs"
  },
  {
    "id": 3,
    "product_name": "WOMEN'S BOX PLEAT KNIT MINI SKIRT ",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/3859/153/800/2/w/850/3859153800_2_1_1.jpg?ts=1673974056815',
    "price": "2,990rs"
  },
  {
    "id": 4,
    "product_name": "Puma Regular Fit T-Shirt",
    "img_url": 'https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg',
    "price": "459rs - 700rs"
  },
]
const topproducts = () => {
  return (
    <div className="min-h-fit">
      <div className="lg:px-10 sm:px-5 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {
          Topproducts.map((product, index) =>
            <div className=" bg-white overflow-hidden hover:shadow-2xl " key={index}>
              <img className="w-full h-[600px] " src={product.img_url} alt="adidas" />
              <div className="px-6 py-4">
                <div className="text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <p className="border-b-2 border-b-slate-200"></p>
              <div className="justify-center flex divide-x-2 divide-gray-400 gap-3 p-2">
                <button className="py-1 w-full flex justify-center  items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
                <Popup trigger={<button className="py-1 w-full text-black  hover:drop-shadow-lg">View</button>} position="top center" >
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

export default topproducts