import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
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
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;
