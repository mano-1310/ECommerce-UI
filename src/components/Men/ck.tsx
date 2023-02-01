import React from 'react'

const products = [
  {
    "id": 1,
    "product_name": "Calvin Klein Jeans T-shirt",
    "img_url": 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19054674/2022/9/16/41fef07c-414c-45e0-8357-666c60b93ec11663308912368-Calvin-Klein-Jeans-Men-Tshirts-9831663308911777-1.jpg',
    "price": "850rs"
  },
  {
    "id": 2,
    "product_name": "Calvin Klein FullHand T-shirt",
    "img_url": 'https://calvinklein.scene7.com/is/image/CalvinKlein/23100321_030_main?wid=440&hei=580&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
    "price": "976rs"
  },
  {
    "id": 3,
    "product_name": "Calvin Klein  Black T-shirt",
    "img_url": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugMsrtilfQemcJoqG8IdTKKPmYdPUA2wuSw&usqp=CAU',
    "price": "675rs"
  },
]
const ck = () => {
  return (
    <div className="min-h-fit">
      <div className="lg:px-10 sm:pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {
          products.map((product, index) =>
            <div className=" bg-white overflow-hidden hover:cursor-pointer border hover:border-black drop-shadow-lg" key={index}>
              <img className="w-full h-[400px]" src={product.img_url} alt="ck" />
              <div className="px-6 py-4">
                <div className="text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <p className="border-b-2 border-b-slate-200"></p>
              <div className="justify-center w-full">
                <button className="h-[50px] w-full text-black transition ease-in-out hover:bg-red-900 hover:text-white hover:drop-shadow-lg">View</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ck