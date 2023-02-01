import React from "react";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: "adidas1",
    product_name: "DESIGNED 4 GAMEDAY PREMIUM FULL-ZIP TRACK TOP",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b43a786deeff4895b21caf4600d8b2d4_9366/Designed_4_Gameday_Premium_Full-Zip_Track_Top_Brown_IC8043_21_model.jpg",
    price: "6,050.0rs",
  },
  {
    id: "adidas2",
    product_name: "ADIDAS BASKETBALL HOODIE - UNISEX",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg",
    price: "7,459.0rs",
  },
  {
    id: "adidas3",
    product_name: "ESSENTIALS INSULATED HOODED JACKET",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/234906a2c93347c8bb37ad5201095d0d_9366/Essentials_Insulated_Hooded_Jacket_Grey_HE2977_21_model.jpg",
    price: "4,799.0rs",
  },
];
const Adidas = () => {
  console.log(products);
  return (
    <div className="min-h-fit">
      <div className="lg:px-10 sm:px-5 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {products.map((product) => (
          <div
            className=" bg-white overflow-hidden drop-shadow-lg border hover:border-black"
            key={product.id}
          >
            <img
              className="w-full h-[400px]  hover:cursor-pointer "
              src={product.img_url}
              alt="adidas"
            />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">
                {product.product_name}
              </div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center w-full ">
              <Link to="/view">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="h-[50px] w-full text-black transition ease-in-out hover:bg-red-900 hover:text-white hover:drop-shadow-lg"
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adidas;
