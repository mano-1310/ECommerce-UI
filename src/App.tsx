import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './views/components/Footer';
import Home from './views/components/Home';
import Navbar from './views/components/Navbar';
import Posts from './views/components/Posts';

function App() {
  return (
    <Background>
      <Navbar />
      <Home />
      <Posts />
      <Footer />
    </Background>
  );
}

export default App;
