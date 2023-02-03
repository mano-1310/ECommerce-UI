import React from "react";
import { Link } from "react-router-dom";
import images1 from "./assets/images/dressModels/m1.jpg";
import images2 from "./assets/images/dressModels/m2.jpg";
import images3 from "./assets/images/dressModels/m3.jpg";
import p1 from "./assets/images/p1.jpg";
import Topproducts from "./Topproducts";

const allBrands = [
  {
    id: 1,
    path: "/adidas",
    brand_name: "Adidas",
  },
  {
    id: 2,
    path: "/ck",
    brand_name: "Calvin Klein",
  },
  {
    id: 3,
    path: "/zara",
    brand_name: "Zara",
  },
  {
    id: 4,
    path: "/puma",
    brand_name: "Puma",
  },
  {
    id: 5,
    path: "#",
    brand_name: "Biba",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen top-0">
      <h1 className="font-semibold flex justify-center text-left lg:ml-0 sm:ml-2 py-4">
        Brands
      </h1>
      <div className="grid grid-flow-col justify-center lg:text-2xl sm:text-sm  outline hover:outline-transparent p-3">
        {allBrands.map((brand, index) => (
          <div key={index}>
            <Link
              to={brand.path}
              className="hover:underline transition ease-in-out py-1.5 hover:outline-2 drop-shadow-lg px-4 font-josefin inline-block"
              title={brand.brand_name}
            >
              {brand.brand_name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6 overflow-hidden text-2xl">
        <h3 className="text-xl lg:text-start  sm:text-center text-red-700">
          {" "}
          Quote :{" "}
          <p className="text-center text-black inline-block text-[30px] p-5">
            "The joy of dressing is an art." —John Galliano
          </p>{" "}
        </h3>
      </div>
      <div className="lg:p-1 sm:p-0 flex items-center justify-start drop-shadow-xl sm:flex">
        <img className="rounded-md" src={images1} alt="" />
      </div>
      <div className="flex justify-center mt-2 ">
        <Link to="/login_auth">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="bg-red-900 text-white transition ease-in-out hover:bg-black hover:text-white py-2 rounded-full px-8"
          >
            Shop
          </button>
        </Link>
      </div>
      <div className="flex justify-center lg:px-5 sm:px-3">
        <div className="grid grid-flow-row mt-">
          <h1 className="lg:text-[80px] sm:text-[50px] p-1">
            Top Trending Dresses Are Available
          </h1>
          <div className="grid grid-flow-col">
            <img
              className="lg:h-[400px] hover:scale-105 transition ease-out cursor-pointer"
              src={p1}
              alt=""
            />
            <img
              className="lg:h-[400px] hover:scale-105 transition ease-out cursor-pointer"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4113827b91d4490a292af3c0081cd8f_9366/Valentine's_Day_Jacket_Grey_IL8292_HM3_hover.jpg"
              alt=""
            />
            <img
              className="lg:h-[400px] hover:scale-105 transition ease-out cursor-pointer"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e752098dde246d5aaddaf0300a12ce1_9366/Adicolor_Classics_Trefoil_Tee_White_IB7420_21_model.jpg"
              alt=""
            />
            <img
              className="lg:h-[400px] hover:scale-105 transition ease-out cursor-pointer"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a6cbb38905f4b098a02af0b017f7269_9366/Pharrell_Williams_Basics_Shorts_(Gender_Neutral)_Pink_HS4823_21_model.jpg"
              alt=""
            />
          </div>
          <h1 className="lg:text-[70px] sm:text-[50px] p-1 ">
            Best of Zara & Adidas
          </h1>
          <div className="grid grid-flow-col">
            <img
              className="lg:h-[400px] hover:scale-105 transition ease-out overflow-hidden cursor-pointer"
              src="https://static.zara.net/photos///2023/V/0/1/p/9479/262/922/2/w/1247/9479262922_9_2_1.jpg?ts=1674130708190"
              alt=""
            />
            <img
              className="lg:h-[600px] hover:scale-105 transition ease-out cursor-pointer"
              src="https://static.zara.net/photos///2023/V/0/2/p/7545/470/430/2/w/850/7545470430_2_2_1.jpg?ts=1673612964410"
              alt=""
            />
            <img
              className="lg:h-[600px] hover:scale-105 transition ease-out cursor-pointer"
              src={images3}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:p-1 sm:p-0 flex items-center justify-start overflow-hidden mt-3 drop-shadow-xl sm:flex">
        <img className="rounded-md" src={images2} alt="" />
      </div>
      <div className="flex justify-center mt-2 ">
        <Link to="/login_auth">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="bg-red-900 text-white transition ease-in-out hover:bg-black hover:text-white py-2 rounded-full px-8"
          >
            Shop
          </button>
        </Link>
      </div>
      <h1 className="font-semibold text-left lg:ml-10 sm:ml-5 py-4">
        Top Trending
      </h1>
      <div>
        <Topproducts />
      </div>
    </div>
  );
};

export default Home;
