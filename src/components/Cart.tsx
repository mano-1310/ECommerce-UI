import React from 'react'

const cartProducts = [
  {
    "id": 1,
    "brand": "Adidas",
    "product_name": "DESIGNED 4 FULL-ZIP TRACK TOP",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b43a786deeff4895b21caf4600d8b2d4_9366/Designed_4_Gameday_Premium_Full-Zip_Track_Top_Brown_IC8043_21_model.jpg',
    "price": "₹ 6,050.0"
  },
  {
    "id": 2,
    "brand": "Calvin Klein",
    "product_name": "Gray FullHand T-shirt",
    "img_url": 'https://calvinklein.scene7.com/is/image/CalvinKlein/23100321_030_main?wid=440&hei=580&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
    "price": "₹ 976.0"
  },
  {
    "id": 3,
    "brand": "Zara",
    "product_name": "WOMEN'S BOX PLEAT KNIT MINI SKIRT ",
    "img_url": 'https://static.zara.net/photos///2023/V/0/1/p/3859/153/800/2/w/850/3859153800_2_1_1.jpg?ts=1673974056815',
    "price": "₹ 2,990.0"
  },
  {
    "id": 4,
    "brand": "Puma",
    "product_name": "Regular Fit T-Shirt",
    "img_url": 'https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg',
    "price": "₹ 700.0"
  },
]
const Cart = () => {
  return (
    <div className="min-h-screen px-7 ">
      <h3 className=" text-3xl font-bold mb-4">Shopping Cart</h3>
      <div className="grid lg:grid-flow-col sm:grid-flow-row">
        <div className="">
          {
            cartProducts.map((product, index) =>
              <div className="bg-white lg:w-[1200px] drop-shadow-md rounded-lg mb-4 sm:w-[650px] p-4 flex " key={index}>
                <div className='grid lg:grid-cols-3 sm:grid-rows-1 container'>
                  <div>
                    <img className="h-[300px] w-[200px]" src={product.img_url} alt="noImg" />
                  </div>
                  <div>
                    <h1 className="font-bold my-2">Product Name</h1>
                    <p className="border-b-2"></p>
                    <h1 className="text-left text-2xl my-3">{product.product_name}</h1>
                    <h2 className="font-bold">Brand : {product.brand}</h2>
                    <h2 className="text-green-800 text-[15px] py-1">in Stock</h2>
                    <div className="py-3">
                      <label htmlFor="quan">Quantity</label>
                      <select className="ml-5 w-[50px] outline-none border border-black" name="" id="quan">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                      </select>
                    </div>
                    <div className="flex justify-end mt-14">
                      <button className="text-red-500"> Delete </button>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-right my-2">Price </h1>
                    <p className="border-b-2"></p>
                    <h4 id='price' className="text-right my-3 font-semibold">{product.price}</h4>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="bg-white lg:w-[600px] sm:w-[600px] drop-shadow-md h-[220px] rounded-lg p-4 inline-block">
          <h3 className=" text-2xl font-bold mb-4">Summery</h3>
          <p className="border border-b-2"></p>
          <div className="h-[100px] py-3">
            <h1 className="text-start text-2xl py-3 font-semibold">Total Amount ({cartProducts.length} items) = ₹ 10,716 </h1>
          </div>
          <div className="flex justify-end">
            <button className=" bg-yellow-300 transition ease-in-out hover:bg-yellow-500 py-2 px-7 rounded-md ">Proceed to buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart