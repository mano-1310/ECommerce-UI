import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <div className="bg-slate-800 text-white flex justify-center">
        <h1>Only for Adults </h1>
      </div>
      <div className="bg-gray-200 fix w-full" id='home'>
        <div className="flex top-0">
          <nav className="min-h-[70px] scroll-smooth bg-opacity-75 rounded-xl top-0 max-w-fit flex">
            <Link to="/home">
            <div className="lg:p-3 sm:p-1 ">
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
            </Link>
            <div className="lg:space-x-[20px] sm:space-x-[10px] lg:p-7 sm:p-2 flex justify-center items-center font-medium text-[15px]">
              <Link to='/men' className="hover:underline transition ease-in-out py-1.5 drop-shadow-lg px-4 ">Men</Link>
              <Link to='/women' className="hover:underline transition ease-in-out py-1.5 drop-shadow-lg px-4 ">Women</Link>
            </div>
            <div className="lg:space-x-[50px] sm:space-x-[20px] lg:p-7 sm:p-2 flex lg:ml-[1290px] justify-center items-center font-medium text-[15px] block-inline">
              <Link to='/cart&order' rel='norefferer'><span className="mr-3">Cart</span></Link>
              <Link to='/login_auth'> <button className="py-2 px-6 bg-slate-900 text-white hover:bg-slate-600 rounded-md"> Login </button></Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar 