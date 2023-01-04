
const Navbar = () => {
  return (


      
      <nav className="min-h-[100px]  flex">
        <div className="p-6 block text-5xl">
          <h1 className="font-poppins font-semibold">E_Com</h1>
        </div>
        <div className="space-x-[100px] p-7 flex justify-center items-center font-poppins text-2xl ml-[350px] block-inline">
          <a href="/" className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 rounded-full">Home</a>
          <a href="/" className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 rounded-full">Products</a>
          <a href="/" className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 rounded-full">contacts</a>
          <a href="/" className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 rounded-full">About</a>
        </div>
        <div className="p-6 ml-[100px]">
          <button className="text-2xl bg-black py-1.5  transition ease-in-out delay-50  hover:bg-white hover:text-black font-semibold rounded-lg px-4">Login</button>
        </div>
      </nav>
  )
}

export default Navbar 