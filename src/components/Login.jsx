import React from 'react';
// import './Auth.css';
import { LuMail, LuLock } from 'react-icons/lu';
import { FaGoogle } from 'react-icons/fa'; 

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card shadow-sm">
        <div className="text-center mb-4">
          <h2 className="auth-title m-0">Welcome Back</h2>
          <p className="auth-subtitle mt-1">Login to access your crystal collection</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label auth-label">Email Address</label>
            <div className="auth-input-group">
              <LuMail className="auth-icon" />
              <input 
                type="email" 
                className="form-control auth-input" 
                placeholder="Enter your email" 
                required 
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label auth-label m-0">Password</label>
              <a href="#forgot" className="auth-link">Forgot?</a>
            </div>
            <div className="auth-input-group">
              <LuLock className="auth-icon" />
              <input 
                type="password" 
                className="form-control auth-input" 
                placeholder="Enter your password" 
                required 
              />
            </div>
          </div>

          <div className="mb-4 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" style={{ accentColor: '#c5a880' }} />
            <label className="form-check-label" htmlFor="rememberMe" style={{ fontSize: '0.85rem', color: '#555' }}>
              Remember me
            </label>
          </div>

          <button type="submit" className="btn auth-btn shadow-sm">Sign In</button>
        </form>

        <div className="auth-divider">OR</div>

        <button className="btn social-auth-btn mb-4">
          <FaGoogle style={{ color: '#db4437' }} /> Continue with Google
        </button>

        <p className="text-center m-0" style={{ fontSize: '0.85rem', color: '#555' }}>
          Don't have an account? <a href="/signup" className="auth-link">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;