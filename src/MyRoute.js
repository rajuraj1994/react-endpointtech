import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./admin/Dashboard";
const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="productdetails/:productId" element={<ProductDetails />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<Login />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
        {/* admin routes */}
        <Route path="/admin/" element={<AdminRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
