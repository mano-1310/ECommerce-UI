import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './components/Footer';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/order&Cart';
import Login from './components/auth/Login';
//brands
import Ck from './components/brand_products/ck';
import Adidas from './components/brand_products/adidas';
import Zara from './components/brand_products/zara';
import Puma from './components/brand_products/puma';

function App() {
  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/home' element={< Home />} />
        <Route path='/men' element={< Men />} />
        <Route path='/women' element={< Women />} />
        <Route path='/cart&order' element={< Cart />} />
        <Route path='/ck' element={< Ck />} />
        <Route path='/zara' element={< Zara />} />
        <Route path='/puma' element={< Puma />} />
        <Route path='/adidas' element={< Adidas />} />
        <Route path='/login_auth' element={< Login />} />
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;
