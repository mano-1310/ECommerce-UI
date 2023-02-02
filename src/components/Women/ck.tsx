import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "ckw1",
    product_name: "Slant   Logo Cropped T-Shirt",
    img_url:
      "https://calvinklein.scene7.com/is/image/CalvinKlein/11171760_101_main?wid=720&hei=948&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
    price: "1385.0",
  },
  {
    id: "ckw2",
    product_name: "Calvin Klein White T-shirt",
    img_url:
      "https://rukminim1.flixcart.com/image/612/612/ksxjs7k0/t-shirt/t/0/2/s-j216518yaf-calvin-klein-jeans-original-imag6ef9e9dbvc6m.jpeg?q=70",
    price: "500rs",
  },
];
const ck = () => {
  return (
    <div className="min-h-fit">
      <div className="lg:px-10 sm:pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {products.map((product, index) => (
          <div
            className=" bg-white overflow-hidden hover:cursor-pointer border hover:border-black drop-shadow-lg"
            key={index}
          >
            <img className="w-full h-[400px]" src={product.img_url} alt="ck" />
            <div className="px-6 py-4">
              <div className="text-xl text-center mb-2">
                {product.product_name}
              </div>
            </div>
            <p className="border-b-2 border-b-slate-200"></p>
            <div className="justify-center w-full ">
              <Link to={`/ck_w/${product.id}`}>
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

export default ck;
