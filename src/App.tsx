import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
//brand_products
import Ck from './components/brand_products/ck';
import Nike from './components/brand_products/nike';
import Adidas from './components/brand_products/adidas';
import Allensolly from './components/brand_products/allensolly';
import Zara from './components/brand_products/zara';
import Puma from './components/brand_products/puma';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/home' element={< Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/ck' element={< Ck />} />
        <Route path='/allensolly' element={< Allensolly />} />
        <Route path='/nike' element={< Nike />} />
        <Route path='/zara' element={< Zara />} />
        <Route path='/puma' element={< Puma />} />
        <Route path='/adidas' element={< Adidas />} />
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;
