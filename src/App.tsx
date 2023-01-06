import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
function App() {
  return (
    <Background>
      < Navbar/>
      <Home />
      <Products />
      <Contact />
      <About />
      <Footer />
    </Background>
  );
}

export default App;
