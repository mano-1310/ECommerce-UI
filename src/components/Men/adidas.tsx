import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "adidasm1",
    product_name: "DESIGNED 4 GAMEDAY PREMIUM FULL-ZIP TRACK TOP",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b43a786deeff4895b21caf4600d8b2d4_9366/Designed_4_Gameday_Premium_Full-Zip_Track_Top_Brown_IC8043_21_model.jpg",
    price: "6,050.0rs",
  },
  {
    id: "adidasm2",
    product_name: "ADIDAS BASKETBALL HOODIE - UNISEX",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg",
    price: "7,459.0rs",
  },
  {
    id: "adidasm3",
    product_name: "ESSENTIALS INSULATED HOODED JACKET",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/234906a2c93347c8bb37ad5201095d0d_9366/Essentials_Insulated_Hooded_Jacket_Grey_HE2977_21_model.jpg",
    price: "4,799.0rs",
  },
  {
    id: "adidasm4",
    product_name: "GRAPHICS CAMO CARGO PANTS",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc95d1d0a315482ba147af350117530e_9366/Graphics_Camo_Cargo_Pants_Black_IC5733_21_model.jpg",
    price: "8,999.0",
  },
  {
    id: "adidasm5",
    product_name: "GRAPHICS CAMO CARGO PANTS",
    img_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/03b1840bff7d481ba54baeec0101ed8e_9366/adidas_Adventure_Winter_Allover_Print_GORE-TEX_Jacket_Multicolor_HK5019_21_model.jpg",
    price: "29,999.0",
  },
];
const Adidas = () => {
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
              <Link to={`/adidas/${product.id}`}>
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
