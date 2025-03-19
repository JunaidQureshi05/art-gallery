import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import ProductPage from "@pages/Product";
import Header from "@components/Header";
import CartPage from "@pages/Cart";
import NotFoundPage from "@pages/404";
import ContactSupport from "@pages/Support";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/support" element={<ContactSupport />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
