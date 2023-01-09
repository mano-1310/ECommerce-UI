import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
function App() {
  return (
    <Background>
      < Navbar/>
      <Home />
      <Products />
      <Footer />
    </Background>
  );
}

export default App;
