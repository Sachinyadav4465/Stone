import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const Features = () => {
    const sliderRef = useRef(null);
    const intervalRef = useRef(null); 
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const products = [
        { id: 1, title: "Amethyst Cluster", image: "https://i.pinimg.com/1200x/10/04/f3/1004f3b4b0ec5e76a910803078b96528.jpg", price: 1999, oldPrice: "2,499", discount: "20% OFF", review: 128 },
        { id: 2, title: "Rose Quartz Sphere", image: "https://i.pinimg.com/1200x/1e/05/ee/1e05ee1af47ba14e60a192d3f2f177f5.jpg", price: 2299, oldPrice: "2,999", discount: "23% OFF", review: 210 },
        { id: 3, title: "Citrine Crystal Tree", image: "https://i.pinimg.com/736x/e7/a9/ea/e7a9ea659fbed532a1372066b3e23b95.jpg", price: 1799, oldPrice: "2,399", discount: "25% OFF", review: 160 },
        { id: 4, title: "Clear Quartz Point", image: "https://i.pinimg.com/1200x/80/1a/b6/801ab691b5d6a5da253560cf8bc16fe7.jpg", price: 499, oldPrice: "699", discount: "20% OFF", review: 167 },
        { id: 5, title: "Black Tourmaline", image: "https://i.pinimg.com/736x/59/d3/11/59d311fb4a31c170ece74a5e3936ee6a.jpg", price: 599, oldPrice: "899", discount: "22% OFF", review: 134 },
        { id: 6, title: "Amethyst Cluster Deluxe", image: "https://i.pinimg.com/1200x/10/04/f3/1004f3b4b0ec5e76a910803078b96528.jpg", price: 1999, oldPrice: "2,499", discount: "20% OFF", review: 128 },
        { id: 7, title: "Rose Quartz Sphere Pro", image: "https://i.pinimg.com/1200x/1e/05/ee/1e05ee1af47ba14e60a192d3f2f177f5.jpg", price: 2299, oldPrice: "2,999", discount: "23% OFF", review: 210 },
        { id: 8, title: "Citrine Crystal Tree Large", image: "https://i.pinimg.com/736x/e7/a9/ea/e7a9ea659fbed532a1372066b3e23b95.jpg", price: 1799, oldPrice: "2,399", discount: "25% OFF", review: 160 },
        { id: 9, title: "Clear Quartz Point Raw", image: "https://i.pinimg.com/1200x/80/1a/b6/801ab691b5d6a5da253560cf8bc16fe7.jpg", price: 499, oldPrice: "699", discount: "20% OFF", review: 167 },
        { id: 10, title: "Black Tourmaline Stone", image: "https://i.pinimg.com/736x/59/d3/11/59d311fb4a31c170ece74a5e3936ee6a.jpg", price: 599, oldPrice: "899", discount: "22% OFF", review: 134 }
    ];

   
    const startAutoPlay = () => {
        
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            const slider = sliderRef.current;
            if (!slider) return;

            const card = slider.querySelector(".product-card");
            if (!card) return;

            const width = card.offsetWidth + 20; 

           
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 20) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: width, behavior: "smooth" });
            }
        }, 2500); 
    };

  
    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; 
        }
    };

    
    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay(); 
    }, []);

    const slideLeft = () => {
        sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const slideRight = () => {
        sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section className="arrival-wrapper py-4">
            <div className="container-fluid px-lg-5">
                <div className="section-heading text-center mb-4">
                    <h2>SHOP BY CATEGORY</h2>
                    <div className="heading-line">
                        <span></span> ★ <span></span>
                    </div>
                </div>

                <div className="position-relative slider-container-box">
                    <button className="slider-btn left-btn" onClick={slideLeft} aria-label="Slide left">
                        <FiChevronLeft />
                    </button>

                    
                    <div 
                        className="products-slider d-flex gap-3 overflow-hidden" 
                        ref={sliderRef} 
                        style={{ scrollBehavior: 'smooth' }}
                        onMouseEnter={stopAutoPlay}
                        onMouseLeave={startAutoPlay}
                    >
                        {products.map((item) => (
                            <div 
                                className="product-card card product-main-card  text-white" 
                                key={item.id} 
                                style={{ minWidth: '280px', border: '1px solid #222', cursor: 'pointer',backgroundColor:'#0a0a09' }}
                                onClick={() => navigate(`/product/${item.id}`)} 
                            >
                                <div className="product-image position-relative">
                                    <span className="new-tag position-absolute badge bg-warning text-black m-2">NEW</span>
                                    <img src={item.image} alt={item.title} className="card-img-top" style={{ height: '280px', objectFit: 'cover' }} />
                                    <div className="product-icons">
                                        <FiHeart 
                                            className="mx-1 text-black" 
                                            style={{ cursor: 'pointer' }} 
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h6 className="card-title fw-bold m-0 mb-1">{item.title}</h6>
                                        <div className="rating text-warning small mb-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <AiFillStar key={star} />
                                            ))}
                                            <small className="text-white ms-1">({item.review})</small>
                                        </div>

                                        <div className="price d-flex align-items-center gap-2 mb-3">
                                            <h5 className="m-0 fw-bold" style={{ color: '#cca43b' }}>₹{item.price}</h5>
                                            <del className="text-white small">₹{item.oldPrice}</del>
                                            <span className="badge bg-white text-dark small" style={{ fontSize: '10px' }}>{item.discount}</span>
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-gold w-100 text-uppercase fw-bold small-btn"
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            addToCart({
                                                id: item.id,
                                                name: item.title,
                                                price: item.price,
                                                image: item.image,
                                            });
                                        }}
                                        style={{
                                            backgroundColor: "#cca43b",
                                            color: "#000",
                                            border: "none",
                                            fontSize: "13px",
                                            height: "34px",   
                                            lineHeight: "1",
                                        }}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="slider-btn right-btn" onClick={slideRight} aria-label="Slide right">
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;