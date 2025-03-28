import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import ProductPage from "@pages/Product";
import Header from "@components/Header";
import CartPage from "@pages/Cart";
import NotFoundPage from "@pages/404";
import ContactSupport from "@pages/Support";
import s from "./App.module.scss";
import MainLayout from "./layout/main";
const App = () => {
  console.log("Junaid", s);
  return (
    <div className={s.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/support" element={<ContactSupport />} />
            <Route
              path="/category/:categoryName"
              element={<div>Hello there</div>}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
