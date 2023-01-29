import React from 'react'

const cartProducts = [
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
const Cart = () => {
  return (
    <div className="min-h-screen p-7 ">
      <h3 className=" text-2xl font-bold mb-4">Your Items</h3>
      <div className="grid lg:grid-flow-col sm:grid-flow-row">
        <div className="">
          {
            cartProducts.map((product, index) =>
              <div className="bg-white lg:w-[1200px] drop-shadow-md rounded-lg mb-4 sm:w-[650px] p-4 flex " key={index}>
                <div className='grid lg:grid-cols-3 container'>
                  <div>
                    <img className="h-[300px] w-[200px]" src={product.img_url} alt="noImg" />
                  </div>
                  <div>
                    <h1 className="font-bold">Product Name</h1>
                    <p className="border-b-2"></p>
                    <h1 className="text-left">{product.product_name}</h1>
                    <label htmlFor="quan">Quantity</label>
                    <input className="ml-2 p-1 w-[50px] border border-gray-500 outline-none" type="number" name="" id="quan" defaultValue={1} />
                  </div>
                  <div>
                  <h1 className="font-bold text-right">Price </h1>
                    <h4 id='price' className="text-right font-semibold">{product.price}</h4>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="bg-white lg:w-[600px] sm:w-[600px] drop-shadow-md h-[360px] rounded-lg p-4 inline-block">
          <h3 className=" text-2xl font-bold mb-4"> Total Summery</h3>
          <div className="h-[200px]">

          </div>
          <div className="flex justify-end">
            <button className=" bg-yellow-300 hover:bg-yellow-500 py-2 px-7 rounded-md ">Proceed to buy</button>
          </div>
          <div className="py-2 ">
            <p className="border border-b-2"></p>
            <h1 className="text-start py-3 font-semibold">Total Amount ({cartProducts.length}) =  </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart