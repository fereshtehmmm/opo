import React from "react";
import { Routes, Route } from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import ServicesPage from "./pages/ServicesPage";
import SocialServicesPage from "./pages/SocialServicesPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import LoginPopup from "./components/ui/LoginPopup";
import Profile from "./pages/Profile";
import AdminOrders from "./pages/AdminOrders";
import './index.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/social" element={<SocialServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPopup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
      </Routes>
    </Layout>
  );
};

export default App;
