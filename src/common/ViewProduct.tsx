import React from 'react'

const ViewProduct = () => {
    return (
        <div className="min-h-screen">
            <div className="lg:flex sm:flex-none px-4 justify-start">
                <div className='h-full'>
                    <img className="rounded" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas_Basketball_Hoodie_White_IA3439_HM3_hover.jpg" alt="" />
                </div>
                <div className="p-4 lg:ml-5 w-[300px]">
                    <h2 className="text-2xl">Men</h2>
                    <h1 className="text-4xl py-4 font-bold">ADIDAS BASKETBALL HOODIE - UNISEX</h1>
                    <div className="py-4">
                        <h1 className="text-2xl underline"> MRP Rate : 5990 RS</h1>
                    </div>
                    <div className="py-4">
                        <h1 className="text-3xl font-semibold" >Sizes</h1>
                        <div className="space-x-[15px] sm:flex py-3">
                            <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black">XS</button>
                            <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black ">S</button>
                            <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black">M</button>
                            <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out  text-black border border-black">L</button>
                            <button className="px-4 py-2  focus:bg-black focus:text-white transition ease-in-out text-black border border-black">XL</button>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold py-2">ADIDAS BASKETBALL HOODIE</h1>
                        <p className="lg:w-[500px] font-extralight sm:w-[400px] ">Don't leave your style behind when the temperature drops. The adidas Essentials Insulated Bomber Jacket brings insulated warmth to the classic 3-Stripes bomber jacket. From hand pockets with snap closure to recycled materials, it's a jacket that feels good on every level.</p>
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
            <div className="py-3 flex justify-center lg:gap-10 items-center mt-10">
                <button className="px-[80px] py-3 flex justify-center bg-black text-white border transition ease-in-out hover:bg-transparent hover:border-black mr hover:text-black">Cart</button>
                <button className="px-[80px] py-3 bg-black flex justify-center text-white border transition ease-in-out hover:bg-transparent hover:border-black hover:text-black">Buy</button>
            </div>
        </div>
    )
}

export default ViewProduct