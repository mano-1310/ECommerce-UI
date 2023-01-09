import React from 'react'

const Posts = () => {
  return (
    <div className="min-h-screen sm:flex" id='product'>
      <div className="flex justify-center items-start  px-8">
        <div className="grid grid-cols-6 space-x-4 ">
          <div className="card h-[600px] w-[400px] col-span-2 bg-white rounded-md drop-shadow">
            <div className="flex  justify-center p-3 font-poppins font-bold text-xl"><h1>Pant</h1></div>
            <p className=" border-b-2 border-black mx-4"></p>
          </div>
        </div>
        <div className="grid grid-cols-6 space-x-4 ">
          <div className="card h-[600px] w-[400px] col-span-2 bg-white rounded-md drop-shadow">
            <div className="flex  justify-center p-3 font-poppins font-bold text-xl"><h1>Pant</h1></div>
            <p className=" border-b-2 border-black mx-4"></p>
          </div>
        </div>
        <div className="grid grid-cols-6 space-x-4 ">
          <div className="card h-[600px] w-[400px] col-span-2 bg-white rounded-md drop-shadow">
            <div className="flex  justify-center p-3 font-poppins font-bold text-xl"><h1>Pant</h1></div>
            <p className=" border-b-2 border-black mx-4"></p>
          </div>
        </div>
        <div className="grid grid-cols-6 space-x-4 ">
          <div className="card h-[600px] w-[400px] col-span-2 bg-white rounded-md drop-shadow">
            <div className="flex justify-center p-3 font-poppins font-bold text-xl"><h1>Pant</h1></div>
            <p className=" border-b-2 border-black mx-4"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts