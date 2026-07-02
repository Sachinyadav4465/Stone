import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; 
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

import { CartProvider } from "./components/CartContext";
import CartDrawer from "./components/CartDrawer";

import "./styles/style.css";

function App() {
  return (

    <CartProvider>
      <Router>
        <Navbar />
        
       
        <CartDrawer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;