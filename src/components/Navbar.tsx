import { BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import {BsFillCartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div> <BrowserRouter>
    <div className="flex sticky  top-0">
      <nav className="min-h-[70px] scroll-smooth bg-purple-900 bg-opacity-95 rounded-xl top-0 max-w-fit  container flex">
        <div className="p-6 text-5xl">
          <h1 className="font-poppins font-semibold">E_Fas</h1>
        </div>
        <div className="space-x-[100px] p-7 flex justify-center items-center font-poppins text-1.9xl ml-[250px] block-inline">
          <Link to='#home' className="hover:underline  transition ease-in-out py-1.5 drop-shadow-lg px-4">Home</Link>
          <Link to='#product' className="hover:underline  transition ease-in-out py-1.5 drop-shadow-lg px-4 ">Products</Link>
          <Link to='#contact' className="hover:underline  transition ease-in-out py-1.5 drop-shadow-lg px-4 ">contact</Link>
          <Link to='#about' className="hover:underline  transition ease-in-out py-1.5 drop-shadow-lg px-4 ">About</Link>
        </div>
        <div className="p-7 flex ml-44 justify-center">
          <input type='search' name='search' className="outline-none rounded-full w-[250px] font-extralight text-black px-4"/>
          <span></span>
        </div>
        <div className="py-4 flex justify-center items-center font-poppins text-2xl  block-inline">
          <Link to='#product' className="font-bold ml-[130px]  ">< BsFillCartFill size={30} /></Link>
        </div>
      </nav>
    </div>
  </BrowserRouter>
  </div>
  )
}

export default Navbar 