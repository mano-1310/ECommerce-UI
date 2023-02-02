import React from "react";
import { Link } from "react-router-dom";
const products = [
  {
    id: "pumam1",
    product_name: "Mercedes F1  Sweatpants",
    img_url:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/533706/01/fnd/IND/fmt/png/Mercedes-F1-Youth-Sweatpants",
    price: "3,039rs",
  },
  {
    id: "pumam2",
    product_name: "Summer Squeeze Jacket",
    img_url:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/675395/35/fnd/IND/fmt/png/Summer-Squeeze-Youth-Jacket",
    price: "2,399rs",
  },
  {
    id: "pumam3",
    product_name: "Puma Regular Track Pants",
    img_url: "https://m.media-amazon.com/images/I/71qnE1vkOjL._UY550_.jpg",
    price: "899rs",
  },
];
const puma = () => {
  return (
    <div className="min-h-fit">
      <div className="lg:px-10 sm:pb-6 sm:mt-3 lg:mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {products.map((product, index) => (
          <div
            className=" bg-white overflow-hidden hover:cursor-pointer border hover:border-black drop-shadow-lg"
            key={index}
          >
            <img
              className="w-full h-[400px]"
              src={product.img_url}
              alt="puma"
            />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">
                {product.product_name}
              </div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center w-full">
              <Link to={`/puma/${product.id}`}>
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

export default puma;
