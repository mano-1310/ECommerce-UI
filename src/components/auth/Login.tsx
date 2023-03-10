import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-5xl font-josefin font-bold ">Login</h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <h3 className="text-1xl">Enter your valid Details here</h3>
      </div>
      <div className="flex justify-center items-center mt-[20px] p-5">
        <input
          className="outline-none border border-black bg-transparent text-2xl  h-[50px] w-[400px] placeholder:hover:text-transparent px-2"
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="flex justify-center items-center p-5">
        <input
          className="outline-none border border-black bg-transparent text-2xl  h-[50px] w-[400px] placeholder:hover:text-transparent px-2"
          type="Password"
          name="Password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="flex justify-center items-center lg:mt-4 sm:mt-2 p-2">
        <button
          className="py-2 px-6 font-josefin text-[20px] bg-black text-white border transition ease-in-out hover:bg-transparent hover:border-black  hover:text-black"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          {" "}
          Login{" "}
        </button>
      </div>
      <div className="flex justify-center font-josefin items-center mt-10">
        <Link className="px-[60px]" to="/create_Acc">
          Create Account
        </Link>
        <Link className="px-[60px] underline" to="/forgot_p">
          Forgot Password ?
        </Link>
      </div>
    </div>
  );
};

export default Login;
