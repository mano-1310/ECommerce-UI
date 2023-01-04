import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './views/components/Footer';
import Home from './views/components/Home';
import Products from './views/components/Products';
import Contact from './views/components/Contact';
import About from './views/components/About';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
function App() {
  return (
    <Background>
      <BrowserRouter>
        <div className="fixed bg-purple-600">
          <nav className="min-h-[70px] bg-purple-900  top-0 max-w-fit  container flex">
            <div className="p-6 text-5xl">
              <h1 className="font-poppins font-semibold">E_Com</h1>
            </div>
            <div className="space-x-[100px] p-7  flex justify-center items-center font-poppins text-2xl ml-[350px] block-inline">
              <Link to='#home' className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4">Home</Link>
              <Link to='#product' className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 ">Products</Link>
              <Link to='#contact' className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 ">contact</Link>
              <Link to='#about' className="hover:underline  font-semibold transition ease-in-out py-1.5 drop-shadow-lg px-4 ">About</Link>
            </div>
            <div className="py-6 ml-[200px]">
              <button className="text-2xl bg-black py-1.5  transition ease-in-out delay-50  hover:bg-white hover:text-black font-semibold rounded-lg px-4">Login</button>
            </div>
            <div className="py-7 flex justify-center items-center font-poppins text-2xl ml-[5px] block-inline">
              <Link to='#' className="font-bold px-[100px]">Cart</Link>
            </div>
          </nav>
        </div>
      </BrowserRouter>
      <Home />
      <Products />
      <Contact />
      <About />
      <Footer />
    </Background>
  );
}

export default App;
