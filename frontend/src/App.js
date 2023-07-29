import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Address from "./Componant/Checkout/AddressPage/Address";
import Payment from "./Componant/Checkout/PaymentPage/payment";
import Footer from "./Componant/Footer/Footer";
import Home from "./Componant/Homepage/Home";

import Navbar from "./Componant/Navbar/Navbar";
import { PrivateComponent } from "./Componant/PrivetComponant";
import Product from "./Componant/Product/Product";
import ProductDetails from "./Componant/ProductDetails/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:query" element={<Product />}></Route>
        <Route path="/product/:query/:productname/:id" element={<ProductDetails/>}></Route>
        <Route
          path="/adress"
          element={
            <PrivateComponent>
              <Address />
            </PrivateComponent>
          }
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
