import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './views/components/Footer';
import Home from './views/components/Home';
import Products from './views/components/Products';
import Contact from './views/components/Contact';
import About from './views/components/About';
import Navbar from './views/components/Navbar';
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
