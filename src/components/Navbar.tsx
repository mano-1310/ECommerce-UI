import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
      <div className="bg-gray-200 w-full" id='home'>
        <div className="flex top-0">
          <nav className="min-h-[70px] scroll-smooth bg-opacity-75 rounded-xl top-0 max-w-fit container flex">
            <div className="lg:p-3 sm:p-1">
              <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="50pt" height="50pt" viewBox="0 0 1217.000000 1182.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1182.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M970 6390 l0 -4060 2725 0 2725 0 0 700 0 700 -1925 0 -1925 0 0 1160 0 1160 1175 0 1175 0 0 600 0 600 -1175 0 -1175 0 0 895 0 895 1925 0 1925 0 0 705 0 705 -2725 0 -2725 0 0 -4060z" />
                  <path d="M9390 7395 l0 -1685 -1060 0 -1060 0 0 975 0 975 -700 0 -700 0 0 -975 0 -975 -1595 0 -1595 0 0 -805 0 -805 4060 0 4060 0 0 2490 0 2490 -705 0 -705 0 0 -1685z" />
                </g>
              </svg>
              </span>
            </div>
            <div className="lg:space-x-[50px] sm:space-x-[20px] p-7 flex justify-center items-center font-medium text-[18px] block-inline">
              <Link to='/home' className="hover:underline  transition ease-in-out py-1.5 hover:outline-2 drop-shadow-lg px-4">Home</Link>
              <Link to='/products' className="hover:underline transition ease-in-out py-1.5 drop-shadow-lg px-4 ">Products</Link>
            </div>
            <div className="py-4 justify-end flex items-center lg:ml-[1400px] text-[18px] block-inline">
              <Link to='/cart' rel='norefferer'><span className="ml-2">Cart</span></Link>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Navbar 