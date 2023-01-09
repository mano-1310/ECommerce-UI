import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import { BsFillCartFill } from 'react-icons/bs'
const Navbar = () => {
  return (
    <div> <BrowserRouter> 
      <div className="flex sticky top-0">
        <nav className="min-h-[70px] scroll-smooth bg-opacity-95 rounded-xl top-0 max-w-fit  container flex">
          <div className="p-3">
            <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="70pt" height="70pt" viewBox="0 0 1217.000000 1182.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,1182.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M970 6390 l0 -4060 2725 0 2725 0 0 700 0 700 -1925 0 -1925 0 0 1160 0 1160 1175 0 1175 0 0 600 0 600 -1175 0 -1175 0 0 895 0 895 1925 0 1925 0 0 705 0 705 -2725 0 -2725 0 0 -4060z" />
                <path d="M9390 7395 l0 -1685 -1060 0 -1060 0 0 975 0 975 -700 0 -700 0 0 -975 0 -975 -1595 0 -1595 0 0 -805 0 -805 4060 0 4060 0 0 2490 0 2490 -705 0 -705 0 0 -1685z" />
              </g>
            </svg>
            </span>
          </div>
          <div className="md:space-x-[50px] sm:space-x-[20px] p-7 flex justify-center items-center font-poppins font-medium text-2xl block-inline">
            <Link to='#home' className="hover:underline  transition ease-in-out py-1.5 hover:outline-2 drop-shadow-lg px-4">Home</Link>
            <Link to='#product' className="hover:underline transition ease-in-out py-1.5 drop-shadow-lg px-4 ">Products</Link>
          </div>
          <div className="py-4 flex justify-end items-center md:ml-[1300px]  font-poppins text-2xl  block-inline">
              <a rel="noreferrer" target='_blank' href='f' className="" >{<BsFillCartFill size={35} />} </a>
              <span className="ml-2">Cart</span>
          </div>
        </nav>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default Navbar 