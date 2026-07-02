import React from 'react';
// import './Auth.css';
import { LuUser, LuMail, LuLock } from 'react-icons/lu';
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // साइनअप लॉजिक यहाँ आएगा भाई
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card shadow-sm">
        <div className="text-center mb-4">
          <h2 className="auth-title m-0">Create Account</h2>
          <p className="auth-subtitle mt-1">Join Stonemart & explore the healing energy</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label auth-label">Full Name</label>
            <div className="auth-input-group">
              <LuUser className="auth-icon" />
              <input 
                type="text" 
                className="form-control auth-input" 
                placeholder="Enter your full name" 
                required 
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-3">
            <label className="form-label auth-label">Email Address</label>
            <div className="auth-input-group">
              <LuMail className="auth-icon" />
              <input 
                type="email" 
                className="form-control auth-input" 
                placeholder="name@example.com" 
                required 
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label auth-label">Password</label>
            <div className="auth-input-group">
              <LuLock className="auth-icon" />
              <input 
                type="password" 
                className="form-control auth-input" 
                placeholder="Create a strong password" 
                required 
              />
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="mb-4 form-check">
            <input type="checkbox" className="form-check-input" id="terms" required style={{ accentColor: '#c5a880' }} />
            <label className="form-check-label" htmlFor="terms" style={{ fontSize: '0.82rem', color: '#555', lineHeight: '1.3' }}>
              I agree to the <a href="#terms" className="auth-link">Terms of Service</a> and <a href="#privacy" className="auth-link">Privacy Policy</a>
            </label>
          </div>

          {/* Signup Button */}
          <button type="submit" className="btn auth-btn shadow-sm">Register Now</button>
        </form>

        <div className="auth-divider">OR</div>

        {/* Google Signup */}
        <button className="btn social-auth-btn mb-4">
          <FaGoogle style={{ color: '#db4437' }} /> Sign up with Google
        </button>

        <p className="text-center m-0" style={{ fontSize: '0.85rem', color: '#555' }}>
          Already have an account? <a href="/login" className="auth-link">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;