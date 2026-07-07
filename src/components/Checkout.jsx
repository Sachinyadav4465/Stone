import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaShippingFast, 
  FaUndo, 
  FaLock, 
  FaShoppingCart, 
  FaTicketAlt 
} from 'react-icons/fa';

// Prop (products) ko ignore maar rahe hain taaki parent ka purana data block ho sake
const Checkout = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 1. Sabse pehle strict check karo ki navigation state me kya aaya hai
    if (location.state?.checkoutProducts && location.state.checkoutProducts.length > 0) {
      setCartItems(location.state.checkoutProducts);
    } else {
      // 2. Agar state nahi hai toh local storage se check karo
      const savedItems = localStorage.getItem("checkoutProducts");
      if (savedItems) {
        setCartItems(JSON.parse(savedItems));
      }
    }
  }, [location.state]);

  // Dynamic calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const [promoApplied, setPromoApplied] = useState(true);
  const [promoCode, setPromoCode] = useState('STONE10');
  
  const discount = promoApplied ? Math.round(subtotal * 0.10) : 0; 
  const totalAmount = subtotal - discount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'STONE10') {
      setPromoApplied(true);
    } else {
      alert('Invalid Promo Code');
      setPromoApplied(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page bg-dark-theme text-white py-5 text-center" style={{ minHeight: "100vh" }}>
        <div className="container">
          <h3 className="text-gold mb-3">No Products Selected</h3>
          <p className="">Please go back to the shop and buy a product first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page bg-dark-theme text-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-gold font-serif text-uppercase tracking-wider">Stonemart</h2>
          <p className=" small">
            <FaLock className="me-1 text-gold" /> Secure Checkout — India's Largest Crystal Store
          </p>
        </div>

        <div className="row g-5">
          {/* Left Column */}
          <div className="col-lg-7">
            <h4 className="mb-4 text-gold section-title">Billing Details</h4>
            <form className="needs-validation" onSubmit={(e) => {
              e.preventDefault();
              alert('Order Placed Successfully for ₹' + totalAmount);
            }}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label ">First name</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label ">Last name</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
                <div className="col-12">
                  <label className="form-label ">Address</label>
                  <input type="text" className="form-control custom-input" placeholder="1234 Main St" required />
                </div>
                <div className="col-md-5">
                  <label className="form-label ">Country</label>
                  <select className="form-select custom-input" required>
                    <option>India</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label ">State</label>
                  <select className="form-select custom-input" required>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label ">Zip</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
              </div>

              <hr className="my-4 border-secondary" />

              <h4 className="mb-3 text-gold section-title">Payment Method</h4>
              <div className="my-3 custom-radio-group">
                <div className="form-check mb-2">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input custom-radio" defaultChecked required />
                  <label className="form-check-label" htmlFor="credit">Credit/Debit Card</label>
                </div>
                <div className="form-check mb-2">
                  <input id="upi" name="paymentMethod" type="radio" className="form-check-input custom-radio" required />
                  <label className="form-check-label" htmlFor="upi">UPI / Net Banking</label>
                </div>
                <div className="form-check mb-2">
                  <input id="cod" name="paymentMethod" type="radio" className="form-check-input custom-radio" required />
                  <label className="form-check-label" htmlFor="cod">Cash on Delivery (COD)</label>
                </div>
              </div>

              <button className="btn btn-gold-filled w-100 btn-lg mt-4" type="submit">
                PLACE ORDER (₹{totalAmount.toLocaleString('en-IN')})
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="col-lg-5">
            <div className="order-summary-card p-4 rounded">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-gold section-title"><FaShoppingCart className="me-2 mb-1" />Your Cart</span>
                <span className="badge bg-gold text-dark rounded-pill">{cartItems.length}</span>
              </h4>
              
              <ul className="list-group mb-3 bg-transparent">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between lh-sm px-0">
                    <div>
                      <h6 className="my-0 font-serif text-gold-light">{item.name}</h6>
                      <small className="">{item.desc}</small>
                    </div>
                    <span className="text-white">₹{item.price.toLocaleString('en-IN')}</span>
                  </li>
                ))}

                {promoApplied && (
                  <li className="list-group-item bg-transparent border-secondary d-flex justify-content-between px-0 text-success">
                    <div className="text-success">
                      <h6 className="my-0"><FaTicketAlt className="me-1" /> Promo code ({promoCode})</h6>
                      <small>10% OFF Special Offer</small>
                    </div>
                    <span>−₹{discount.toLocaleString('en-IN')}</span>
                  </li>
                )}

                <li className="list-group-item bg-transparent text-white border-0 d-flex justify-content-between px-0 pt-3">
                  <span className="fw-bold text-uppercase tracking-wider">Total (INR)</span>
                  <strong className="text-gold fs-5">₹{totalAmount.toLocaleString('en-IN')}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;