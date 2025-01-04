import React, { useState } from "react";

import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Placeorder/PlaceOrder";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./Pages/verify/verify";
import MyOrders from "./Pages/myOrders/myOrders";




const App = () => {
  const [showLogin,setShowLogin] = useState(false); 


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/Verify" element={<Verify/>} />
          <Route path="/Myorders" element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
