import React from 'react';

import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPinterestP,
  FaWhatsapp,
  FaRegCommentDots
} from 'react-icons/fa';
import { LuGift, LuPhone, LuMail, LuClock, LuMapPin } from 'react-icons/lu';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-wrapper pt-5 pb-4 mt-5">
    
      <div className="container-fluid px-lg-5">
        
      
        <div className="newsletter-box mb-5 shadow" style={{ padding: '25px', borderRadius: '8px' }}>
          <div className="row align-items-center g-4 m-0">
           
            <div className="col-12 col-md-4 p-0">
              <h3 className="newsletter-title m-0 text-uppercase fw-normal" style={{ fontSize: '20px', letterSpacing: '1px' }}>Stay Connected</h3>
              <p className="m-0 mt-2 " style={{ fontSize: '13px' }}>Subscribe to get exclusive offers, new arrivals and crystal healing tips.</p>
            </div>
            
      
            <div className="col-12 col-md-5 d-flex justify-content-md-center p-0">
              <div className="input-group custom-input-group" style={{ maxWidth: '450px', width: '100%' }}>
                <input 
                  type="email" 
                  className="form-control newsletter-input" 
                  placeholder="Enter your email address" 
                  aria-label="Email Address"
                  style={{ fontSize: '14px' }}
                />
                <button className="btn subscribe-btn" type="button" style={{ backgroundColor: '#cca43b', color: '#000', fontWeight: 'bold', fontSize: '14px' }}>Subscribe</button>
              </div>
            </div>
            
         
            <div className="col-12 col-md-3 text-md-end p-0">
              <div className="d-inline-flex align-items-center gap-2">
                <LuGift className="gift-icon-gold" style={{ color: '#cca43b', fontSize: '20px' }} />
                <span className="offer-text fw-medium" style={{ fontSize: '13px' }}>Get 10% OFF on your first order</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. MAIN FOOTER LINKS ================= */}
        <div className="row g-4 m-0">
          
          {/* Brand/About Column */}
          <div className="col-12 col-md-6 col-lg-3 footer-v-line pe-md-4 p-0">
            <h4 className="footer-logo m-0 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Stonemart</h4>
            <span className="footer-subtitle text-uppercase mb-3 d-block " style={{ fontSize: '11px', letterSpacing: '0.5px' }}>India's Largest Crystal Store</span>
            <p className="footer-desc mb-4 " style={{ fontSize: '13px', lineHeight: '1.6' }}>
              We bring the magic of natural crystals to your life. Authentic, premium and full of positive energy.
            </p>
            {/* Social Icons */}
            <div className="social-icons d-flex gap-3">
              <a href="#facebook" aria-label="Facebook" style={{ color: '#cca43b' }}><FaFacebookF /></a>
              <a href="#instagram" aria-label="Instagram" style={{ color: '#cca43b' }}><FaInstagram /></a>
              <a href="#youtube" aria-label="Youtube" style={{ color: '#cca43b' }}><FaYoutube /></a>
              <a href="#pinterest" aria-label="Pinterest" style={{ color: '#cca43b' }}><FaPinterestP /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-6 col-md-3 col-lg-2 ms-lg-auto p-0">
            <h5 className="footer-heading mb-3 fw-bold" style={{ fontSize: '15px' }}>Quick Links</h5>
            <div className="footer-links-list d-flex flex-column gap-2" style={{ fontSize: '13px' }}>
              <a href="#about" className="text-decoration-none ">About Us</a>
              <a href="#story" className="text-decoration-none ">Our Story</a>
              <a href="#blog" className="text-decoration-none ">Blog</a>
              <a href="#track" className="text-decoration-none ">Track Your Order</a>
              <a href="#contact" className="text-decoration-none ">Contact Us</a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-6 col-md-3 col-lg-2 p-0">
            <h5 className="footer-heading mb-3 fw-bold" style={{ fontSize: '15px' }}>Shop</h5>
            <div className="footer-links-list d-flex flex-column gap-2" style={{ fontSize: '13px' }}>
              <a href="#all" className="text-decoration-none ">All Crystals</a>
              <a href="#new" className="text-decoration-none ">New Arrivals</a>
              <a href="#bestsellers" className="text-decoration-none ">Best Sellers</a>
              <a href="#combos" className="text-decoration-none ">Combos</a>
              <a href="#gifts" className="text-decoration-none ">Gift Cards</a>
            </div>
          </div>

          {/* Help & Support Column */}
          <div className="col-6 col-md-3 col-lg-2 p-0">
            <h5 className="footer-heading mb-3 fw-bold" style={{ fontSize: '15px' }}>Help & Support</h5>
            <div className="footer-links-list d-flex flex-column gap-2" style={{ fontSize: '13px' }}>
              <a href="#shipping" className="text-decoration-none ">Shipping Policy</a>
              <a href="#returns" className="text-decoration-none ">Returns & Refunds</a>
              <a href="#terms" className="text-decoration-none ">Terms & Conditions</a>
              <a href="#privacy" className="text-decoration-none ">Privacy Policy</a>
              <a href="#faq" className="text-decoration-none ">FAQ's</a>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="col-12 col-md-9 col-lg-3 ps-lg-4 p-0">
            <h5 className="footer-heading mb-3 fw-bold" style={{ fontSize: '15px' }}>Contact Us</h5>
            
            <div className="contact-item d-flex align-items-center gap-2 mb-2" style={{ fontSize: '13px' }}>
              <LuPhone style={{ color: '#cca43b' }} />
              <span className="">+91 95 5555 8687</span>
            </div>
            
            <div className="contact-item d-flex align-items-center gap-2 mb-2" style={{ fontSize: '13px' }}>
              <LuMail style={{ color: '#cca43b' }} />
              <span className="">support@stonemart.co.in</span>
            </div>
            
            <div className="contact-item d-flex align-items-center gap-2 mb-2" style={{ fontSize: '13px' }}>
              <LuClock style={{ color: '#cca43b' }} />
              <span className="">Mon - Sun / 9:00 AM - 8:00 PM</span>
            </div>
            
            <div className="contact-item d-flex align-items-center gap-2" style={{ fontSize: '13px' }}>
              <LuMapPin style={{ color: '#cca43b' }} />
              <span className="">India</span>
            </div>
          </div>

        </div>

      </div>

      {/* ================= 3. FLOATING WIDGETS (WHATSAPP & CHAT) ================= */}
      <div className="floating-widgets">
        <a href="https://wa.me/919555558687" target="_blank" rel="noreferrer" className="whatsapp-btn" aria-label="Chat on WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="#chat" className="chat-btn" aria-label="Open Live Chat">
          <FaRegCommentDots />
        </a>
      </div>
    </footer>
  );
};

export default Footer;