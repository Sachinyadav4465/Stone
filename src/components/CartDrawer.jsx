
import React from 'react';
import { useCart } from '../components/CartContext';

const CartDrawer = () => {
  const { cartItems, isDrawerOpen, toggleDrawer, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop overlay */}
      {isDrawerOpen && <div className="cart-overlay" onClick={toggleDrawer}></div>}

      {/* Side Drawer */}
      <div className={`cart-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header d-flex justify-content-between align-items-center p-3">
          <h5 className="m-0 text-uppercase gold-text fw-bold">Your Cart ({cartItems.length})</h5>
          <button className="btn-close btn-close-white" onClick={toggleDrawer}></button>
        </div>

        <div className="drawer-body p-3">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted my-5">
              <p>Your cart is empty.</p>
              <button className="btn btn-gold btn-sm" onClick={toggleDrawer}>Shop Collection</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item d-flex align-items-center mb-3 pb-3">
                <img src={item.image} alt={item.name} className="img-fluid rounded" />
                <div className="item-details ms-3 flex-grow-1">
                  <h6 className="product-name m-0">{item.name}</h6>
                  <p className="gold-text m-0 small">₹{item.price}</p>
                  
                  {/* Quantity Controller */}
                  <div className="quantity-controls d-flex align-items-center mt-2 text-white">
                    <button className="btn btn-sm btn-outline-light py-0 px-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="mx-2 item-qty">{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-light py-0 px-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="btn btn-link text-danger p-0 ms-2" onClick={() => removeFromCart(item.id)}>
                  <i className="bi bi-trash"></i> Delete
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer p-3">
            <div className="d-flex justify-content-between mb-3">
              <span className="text-uppercase fw-semibold">Subtotal:</span>
              <span className="gold-text fw-bold fs-5">₹{totalPrice}</span>
            </div>
            <button className="btn btn-gold w-100 text-uppercase fw-bold mb-2">Proceed to Checkout</button>
            <button className="btn btn-outline-light w-100 text-uppercase btn-sm" onClick={toggleDrawer}>Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;