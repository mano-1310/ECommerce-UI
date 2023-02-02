import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "pumaw1",
    product_name: "Puma Regular Fit T-Shirt",
    img_url: "https://m.media-amazon.com/images/I/71Pb5Sa4ylL._UL1500_.jpg",
    price: "459rs - 700rs",
  },
  {
    id: "pumaw2",
    product_name: "Puma Women's Leggings ",
    img_url: "https://m.media-amazon.com/images/I/61nLGVicJ5L._UL1500_.jpg",
    price: "1,339rs - 2,286rs",
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
            <div className="justify-center w-full ">
              <Link to={`/puma_w/${product.id}`}>
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
