import React from 'react'

const adidas = () => {
  return (
    <div className="min-h-screen">
      <div className="px-10 pb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5">
        {
          <div className="rounded bg-white overflow-hidden shadow-lg">
            <img className="w-full h-[200px]" src="https://www.freeflys.com/wp-content/uploads/2022/02/adidas-product-testing.jpg" alt="Model1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Adidas T-Shirt</div>
              <p className="text-gray-700 text-base">
              </p>
            </div>
            <div className="justify-center flex p-2"><button className="py-2 w-full rounded text-white hover:bg-slate-900 bg-black">cart</button></div>
          </div>

        }
      </div>
    </div>
  )
}

export default adidas