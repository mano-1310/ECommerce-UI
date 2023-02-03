import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import products from "./products";
const ViewProduct = () => {
  const notify = () => toast("Item Added in Cart");
  const { id } = useParams();
  const prodDetail = products.find((prod) => prod.id === id);
  return (
    <div className="min-h-screen">
      <ToastContainer
        theme="colored"
        transition={Bounce}
        limit={4}
        autoClose={2000}
      />
      <div className="lg:flex sm:flex-none px-4 justify-start">
        <div className="">
          <img
            className="rounded lg:h-[800px] sm:h-0 drop-shadow-lg"
            src={prodDetail?.img_url}
            alt=""
          />
        </div>
        <div className="p-4 lg:ml-5 lg:w-[1000px] sm:w-[300px]">
          <h2 className="text-2xl">Men</h2>
          <h1 className="text-4xl  font-josefin py-4 font-bold">
            {prodDetail?.product_name}
          </h1>
          <div className="py-4">
            <h1 className="text-2xl underline">
              {" "}
              MRP Rate : {prodDetail?.price}
            </h1>
          </div>
          <div className="py-4">
            <h1 className="text-3xl font-semibold">Sizes</h1>
            <div className="space-x-[5px]  sm:flex py-3">
              <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black">
                XS
              </button>
              <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black ">
                S
              </button>
              <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black">
                M
              </button>
              <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out  text-black border border-black">
                L
              </button>
              <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black">
                XL
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-bold py-2">{prodDetail?.product_name}</h1>
            <p className="lg:w-[600px] font-extralight sm:w-[450px] ">
              Don't leave your style behind when the temperature drops. The
              adidas Essentials Insulated Bomber Jacket brings insulated warmth
              to the classic 3-Stripes bomber jacket. From hand pockets with
              snap closure to recycled materials, it's a jacket that feels good
              on every level.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-bold py-2">Details</h1>
            <li>Regular fit</li>
            <li>Recycled polyester fabric</li>
          </div>
          <div className="mt-4">
            <h1 className="font-bold py-2">Care Instructions</h1>
            <li>Do not wring</li>
            <li>Tumble dry inside out</li>
            <li>Use only mild detergent</li>
            <li>Wash garment inside out</li>
            <li>Do not dry clean</li>
          </div>
        </div>
      </div>
      <div className="py-3 flex justify-center font-josefin lg:gap-10 items-center mt-5">
        <button
          onClick={notify}
          className="px-[80px] py-3 flex justify-center bg-black text-white border transition ease-in-out hover:bg-transparent hover:border-black  hover:text-black"
        >
          Cart
        </button>
        <button className="px-[80px] py-3 bg-black flex justify-center text-white border transition ease-in-out hover:bg-transparent hover:border-black hover:text-black">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
