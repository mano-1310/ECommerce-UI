import React from "react";
import Background from "./hooks/themes/Background";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/auth/Login";
import CreateAccount from "./components/auth/Create_Account";
import Forgotp from "./components/auth/Forgot_p";
import ViewProduct from "./common/ViewProduct";
import ViewProductw from "./common/ViewProductw";
//Men Products
import Ck from "./components/Men/ck";
import Adidas from "./components/Men/adidas";
import Zara from "./components/Men/zara";
import Puma from "./components/Men/puma";

//Women Products
import CkW from "./components/Women/ck";
import AdidasW from "./components/Women/adidas";
import ZaraW from "./components/Women/zara";
import PumaW from "./components/Women/puma";

function App() {
  return (
    <Background>
      <Navbar />
      <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/view" element={<ViewProduct />} />
          <Route path="/login_auth" element={<Login />} />
          <Route path="/forgot_p" element={<Forgotp />} />
          <Route path="/create_Acc" element={<CreateAccount />} />
          <Route path="/products/:id" element={<ViewProduct />} />
          Men
          <Route path="/ck" element={<Ck />} />
          <Route path="/ck/:id" element={<ViewProduct />} />
          <Route path="/zara" element={<Zara />} />
          <Route path="/zara/:id" element={<ViewProduct />} />
          <Route path="/puma" element={<Puma />} />
          <Route path="/puma/:id" element={<ViewProduct />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/adidas/:id" element={<ViewProduct />} />
          Women
          <Route path="/ck_w" element={<CkW />} />
          <Route path="/ck_w/:id" element={<ViewProductw />} />
          <Route path="/zara_w" element={<ZaraW />} />
          <Route path="/zara_w/:id" element={<ViewProductw />} />
          <Route path="/puma_w" element={<PumaW />} />
          <Route path="/puma_w/:id" element={<ViewProduct />} />
          <Route path="/adidas_w" element={<AdidasW />} />
          <Route path="/adidas_w/:id" element={<ViewProductw />} />
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;
