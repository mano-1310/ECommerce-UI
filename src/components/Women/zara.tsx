import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "zaraw1",
    product_name: "FADED MINIMALIST T-SHIRT",
    img_url:
      "https://static.zara.net/photos///2023/V/0/1/p/4424/642/822/2/w/850/4424642822_1_1_1.jpg?ts=1670842913890",
    price: "990rs",
  },
  {
    id: "zaraw2",
    product_name: "FAUX LEATHER JACKET ",
    img_url:
      "https://static.zara.net/photos///2023/V/0/1/p/3427/811/800/2/w/850/3427811800_2_2_1.jpg?ts=1673979103860",
    price: "5,990rs",
  },
  {
    id: "zaraw3",
    product_name: "WOMEN'S BOX KNIT MINI SKIRT ",
    img_url:
      "https://static.zara.net/photos///2023/V/0/1/p/3859/153/800/2/w/850/3859153800_2_1_1.jpg?ts=1673974056815",
    price: "2,990rs",
  },
];
const zara = () => {
  return (
    <div className="min-h-fit pb-3">
      <div className="lg:px-10 sm:pb-6 sm:mt-3 lg:mt-0  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {products.map((product, index) => (
          <div
            className=" bg-white overflow-hidden hover:cursor-pointer border hover:border-black drop-shadow-lg"
            key={index}
          >
            <img
              className="w-full h-[500px]"
              src={product.img_url}
              alt="zara"
            />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">
                {product.product_name}
              </div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center w-full ">
              <Link to={`/zara_w/${product.id}`}>
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

export default zara;
