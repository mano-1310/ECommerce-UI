import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
const products = [
  {
    "id": 1,
    "product_name": "DESIGNED 4 GAMEDAY PREMIUM FULL-ZIP TRACK TOP",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b43a786deeff4895b21caf4600d8b2d4_9366/Designed_4_Gameday_Premium_Full-Zip_Track_Top_Brown_IC8043_21_model.jpg',
    "price": "6,050.0rs"
  },
  {
    "id": 2,
    "product_name": "ADIDAS BASKETBALL HOODIE - UNISEX",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg',
    "price": "7,459.0rs"
  },
  {
    "id": 3,
    "product_name": "WORDING OVERSIZED FIT FLEECE FULL-ZIP HOODIE",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa79fd5f40f94c5c8396ae45013cca1d_9366/Wording_Oversized_Fit_Fleece_Full-Zip_Hoodie_Black_HM2814_25_model.jpg',
    "price": "4,500.0rs"
  },
  {
    "id": 4,
    "product_name": "ESSENTIALS INSULATED HOODED JACKET",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/234906a2c93347c8bb37ad5201095d0d_9366/Essentials_Insulated_Hooded_Jacket_Grey_HE2977_21_model.jpg',
    "price": "4,799.0rs"
  },
  {
    "id": 5,
    "product_name": "ALWAYS ORIGINAL POLO WOMEN SHIRT",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2356895528541df96a6af0400ba0ebe_9366/Always_Original_Polo_Shirt_Blue_IC5587_01_laydown.jpg',
    "price": "3,999.0rs"
  },
]
const adidas = () => {
  return (
    <div className="min-h-screen">
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {
          products.map((product, index) =>
            <div className="rounded bg-white overflow-hidden shadow-lg" key={index}>
              <img className="w-full h-[400px]" src={product.img_url} alt="CK" />
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
                    <input type="number" defaultValue={1} className="w-full border-2 rounded-md h-[30px] px-2" />
                  </label>
                </div>
                <div className="pt-2 text-xl font-bold">
                  <h3>Price : {product.price} </h3>
                </div>
              </div>
              <div className="justify-center flex gap-3 p-2">
                <button className="py-1 w-[50px] rounded flex justify-center items-center " title='Add to Cart'>{< BsFillHeartFill fill='red'  opacity={75} size={30} />}</button>
                <button className="py-1 w-full rounded text-white hover:bg-slate-400 bg-black">Buy</button></div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default adidas