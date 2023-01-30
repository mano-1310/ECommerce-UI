import React from 'react';
import Background from './hooks/themes/Background';
import Footer from './components/Footer';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Navbar from './components/Navbar';
import { Route, Routes,Navigate } from 'react-router-dom';
import Cart from './components/Cart';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/Create_Account';
import ViewProduct from './common/ViewProduct';
//Men Products
import Ck from './components/Men/ck';
import Adidas from './components/Men/adidas';
import Zara from './components/Men/zara';
import Puma from './components/Men/puma';

//Women Products
import CkW from './components/Women/ck';
import AdidasW from './components/Women/adidas';
import ZaraW from './components/Women/zara';
import PumaW from './components/Women/puma';

function App() {
  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate replace to="/home" />} />
        <Route path='/home' element={< Home />} />
        <Route path='/men' element={< Men />} />
        <Route path='/women' element={< Women />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/view' element={< ViewProduct />} />
        Men
        <Route path='/ck' element={< Ck />} />
        <Route path='/zara' element={< Zara />} />
        <Route path='/puma' element={< Puma />} />
        <Route path='/adidas' element={< Adidas />} />
        Women
        <Route path='/ck_w' element={< CkW />} />
        <Route path='/zara_w' element={< ZaraW />} />
        <Route path='/puma_w' element={< PumaW />} />
        <Route path='/adidas_w' element={< AdidasW />} />
        <Route path='/login_auth' element={< Login />} />
        <Route path='/create_Acc' element={<  CreateAccount />} />
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;
