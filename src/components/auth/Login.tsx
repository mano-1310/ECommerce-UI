import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-5xl font-bold ">Login</h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <h3 className="text-2xl">Enter your valid Details here</h3>
      </div>
      <div className="flex justify-center items-center mt-[20px] p-5">
        <input className="outline-none border-2 border-black bg-transparent text-2xl rounded-[10px] h-[50px] w-[400px] placeholder:hover:text-transparent px-2" type="email" name="" id="email" placeholder="Email" />
      </div>
      <div className="flex justify-center items-center p-5">
        <input className="outline-none border-2 border-black bg-transparent text-2xl rounded-[10px] h-[50px] w-[400px] placeholder:hover:text-transparent px-2" type="Password" name="" id="email" placeholder="Password" />
      </div>
      <div className="flex justify-center items-center lg:mt-6 sm:mt-2 p-2">
        <button className="py-2 px-6 bg-slate-900 text-white hover:bg-slate-600 rounded-md" onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}> Login </button>
      </div>
    </div>
  )
}

export default Login