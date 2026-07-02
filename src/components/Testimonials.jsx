import React from 'react';

import { 
  LuUsers, LuBox, LuShieldCheck, LuStar, LuGem, LuSparkles, LuSparkle, LuGraduationCap, LuAward 
} from "react-icons/lu";

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Priya Sharma", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150", text: "The crystals are 100% authentic and energy feels so positive. Packaging was beautiful and delivery was fast." },
    { id: 2, name: "Rahul Mehta", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150", text: "I ordered a Citrine tree and the quality is amazing. Highly recommended Stonemers!" },
    { id: 3, name: "Ananya Verma", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", text: "Beautiful collection and genuine products. My go-to store for all healing crystals." }
  ];

  const features = [
    { id: 1, icon: <LuGem />, title: "Authentic", desc: "100% Natural Crystals" },
    { id: 2, icon: <LuSparkles />, title: "Premium Quality", desc: "Handpicked with Care" },
    { id: 3, icon: <LuBox />, title: "Secure Packaging", desc: "Safe & Elegant Packaging" },
    { id: 4, icon: <LuSparkle />, title: "Energy Cleansing", desc: "Cleansed & Charged Before Shipping" },
    { id: 5, icon: <LuGraduationCap />, title: "Expert Guidance", desc: "Crystal Experts 24/7 Support" },
    { id: 6, icon: <LuAward />, title: "Trusted Brand", desc: "India's Largest Crystal Store" }
  ];

  return (
 
    <div className="container-fluid px-lg-5 my-5 testimonial-wrapper">
      
      {/* 1. TOP STATS BANNER */}
      <div className="stats-banner py-4 px-3 mb-5" style={{ backgroundColor: '#000', color: '#cca43b', borderRadius: '8px' }}>
        <div className="row text-center align-items-center g-3 m-0">
          <div className="col-6 col-md-3" style={{ borderRight: '1px solid #333' }}>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <LuUsers style={{ color: '#cca43b', fontSize: '20px' }} />
              <div>
                <div className="fw-bold m-0" style={{ fontSize: '18px' }}>50K+</div>
                <div className="small " style={{ fontSize: '12px', color: '#cca43b' }}>Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 d-none d-md-block" style={{ borderRight: '1px solid #333' }}>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <LuBox style={{ color: '#cca43b', fontSize: '20px' }} />
              <div>
                <div className="fw-bold m-0" style={{ fontSize: '18px' }}>100K+</div>
                <div className="small " style={{ fontSize: '12px', color: '#cca43b' }}>Orders Delivered</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3" style={{ borderRight: '1px solid #333' }}>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <LuShieldCheck style={{ color: '#cca43b', fontSize: '20px' }} />
              <div>
                <div className="fw-bold m-0" style={{ fontSize: '18px' }}>100%</div>
                <div className="small " style={{ fontSize: '12px', color: '#cca43b' }}>Authentic Crystals</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <LuStar style={{ color: '#cca43b', fontSize: '20px' }} />
              <div>
                <div className="fw-bold m-0" style={{ fontSize: '18px' }}>4.8/5</div>
                <div className="small " style={{ fontSize: '12px', color: '#cca43b' }}>Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TESTIMONIAL MAIN BOX (Cream Color Box) */}
      <div className="testimonial-section p-4 p-md-5 mb-5 shadow-sm" style={{ backgroundColor: '#faf6f0', borderRadius: '12px' }}>
        <div className="text-center mb-5">
          <h2 className="text-uppercase m-0 fw-bold" style={{ fontSize: '22px', letterSpacing: '1px', color: '#111' }}>What Our Customers Say</h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#cca43b', margin: '12px auto' }}></div>
          <div><LuStar style={{ fill: '#e69a2a', stroke: '#e69a2a', fontSize: '18px' }} /></div>
        </div>

        <div className="row g-4 justify-content-center m-0">
          {reviews.map((review) => (
            <div key={review.id} className="col-12 col-md-4 d-flex align-items-start px-3">
              <div className="me-3 flex-shrink-0">
                <img src={review.img} alt={review.name} style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div>
                <h6 className="mb-1 fw-bold" style={{ color: '#222' }}>{review.name}</h6>
                <div className="mb-2 text-warning" style={{ fontSize: '13px' }}>
                  <LuStar style={{ fill: '#e69a2a' }} /><LuStar style={{ fill: '#e69a2a' }} /><LuStar style={{ fill: '#e69a2a' }} /><LuStar style={{ fill: '#e69a2a' }} /><LuStar style={{ fill: '#e69a2a' }} />
                </div>
                <p className="mb-0 text-muted" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <span className="mx-1 d-inline-block rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#cca43b' }}></span>
          <span className="mx-1 d-inline-block rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#ddd' }}></span>
          <span className="mx-1 d-inline-block rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#ddd' }}></span>
        </div>
      </div>

   
      <div className="features-section py-4 px-3 shadow-sm" style={{ backgroundColor: '#ffffff', border: '1px solid #f0f0f0', borderRadius: '12px' }}>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center m-0">
          {features.map((feature) => (
            <div key={feature.id} className="col">
              <div className="text-center px-1">
                <span className="mb-2 d-inline-block" style={{ fontSize: '26px', color: '#cca43b' }}>{feature.icon}</span>
                <h6 className="fw-bold mb-1" style={{ fontSize: '14px', color: '#111' }}>{feature.title}</h6>
                <p className="mb-0 text-muted" style={{ fontSize: '11.5px', lineHeight: '1.3' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Testimonials;