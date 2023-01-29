import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const products = [
  {
    "id": 1,
    "product_name": "ADIDAS BASKETBALL HOODIE - UNISEX",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg',
    "price": "7,459.0rs"
  },
  {
    "id": 2,
    "product_name": "WORDING OVERSIZED FIT FLEECE FULL-ZIP HOODIE",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa79fd5f40f94c5c8396ae45013cca1d_9366/Wording_Oversized_Fit_Fleece_Full-Zip_Hoodie_Black_HM2814_25_model.jpg',
    "price": "4,500.0rs"
  },
  {
    "id": 3,
    "product_name": "ALWAYS ORIGINAL POLO WOMEN SHIRT",
    "img_url": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2356895528541df96a6af0400ba0ebe_9366/Always_Original_Polo_Shirt_Blue_IC5587_01_laydown.jpg',
    "price": "3,999.0rs"
  },
]
const adidas = () => {
  const notify = () => toast("Item Added in Cart");
  return (
    <div className="min-h-fit">
      <ToastContainer theme='colored' transition={Bounce} limit={4}  autoClose={2000} />
      <div className="lg:px-10 sm:px-5 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {
          products.map((product, index) =>
            <div className=" bg-white overflow-hidden  hover:shadow-2xl hover:outline " key={index}>
              <img className="w-full h-[400px] hover:cursor-pointer " src={product.img_url} alt="adidas" />
              <div className="px-6 py-4">
                <div className="text-xl text-center mb-2">{product.product_name}</div>
              </div>
              <p className="border-b-2 border-b-slate-200"></p>
              <div className="justify-center flex divide-x-2 divide-gray-400 ">
                <button onClick={notify} className="py-1 w-full flex justify-center hover:transition hover:ease-in-out hover:delay-50 hover:bg-black hover:text-white items-center hover:drop-shadow-lg " title='Add to Cart'>Add to cart</button>
                <button className="h-[50px] w-[200px] text-black  hover:transition hover:ease-in-out hover:delay-50 hover:bg-red-900 hover:text-white hover:drop-shadow-lg">View</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default adidas