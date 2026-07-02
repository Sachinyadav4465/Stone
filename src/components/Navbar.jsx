import React from "react";

import { Link } from "react-router-dom"; 
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { GiCrystalBars } from "react-icons/gi";


import { useCart } from "../components/CartContext"; 

const Navbar = () => {

  const { toggleDrawer, cartItems } = useCart();

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-strip">
        <div className="container-fluid px-lg-5">
          <div className="top-strip-inner">
            <span>FREE EXPRESS SHIPPING ON ORDERS ABOVE ₹1499</span>
            <span> 100% AUTHENTIC CRYSTALS</span>
            <span> EASY 7 DAYS RETURNS</span>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-xl navbar-dark main-navbar">
        <div className="container-fluid px-lg-5">
        
          <Link to="/" className="navbar-brand logo-area">
            <div className="logo-circle">
              <GiCrystalBars />
            </div>
            <div className="logo-text">
              <h2>STONEMART</h2>
              <p>INDIA'S LARGEST CRYSTAL STORE</p>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainMenu">
            {/* Menu Links */}
            <ul className="navbar-nav mx-auto menu-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Shop By Category <BiChevronDown size={16}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Shop By Intention <BiChevronDown size={16}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Best Sellers
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/" className="nav-link">
                  About Us
                </Link>
              </li> */}
            </ul>

            {/* Right Side Actions */}
            <div className="right-side">
              {/* Search Box */}
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search crystals, products..."
                />
                <FiSearch />
              </div>

              {/* Account Link - अब इसपर क्लिक करने से /login पेज खुलेगा */}
              <Link to="/login" className="nav-action text-decoration-none text-white">
                <IoPersonOutline />
                <small>Account</small>
              </Link>

              {/* Wishlist Link - अभी के लिए होम पर या आपके विशलिस्ट रूट पर डाल सकते हैं */}
              <Link to="/" className="nav-action text-decoration-none text-white">
                <FiHeart />
                <small>Wishlist</small>
              </Link>

              {/* Cart Button - इसपर क्लिक करते ही साइड ड्रॉर खुलेगा */}
              <div 
                className="nav-action cart" 
                onClick={toggleDrawer} 
                style={{ cursor: 'pointer' }}
              >
                <FiShoppingBag />
                <small>Cart</small>
                {/* डायनामिक कार्ट काउंट */}
                <span className="cart-badge">
                  {totalCartItems}
                </span>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;