import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

// Saare Icons Jo Error de rahe the
import { FiChevronLeft, FiHeart, FiShoppingCart, FiZap, FiCheckCircle } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isWishlist, setIsWishlist] = useState(false);

    const productsBase = [
        { id: 1, title: "Amethyst Cluster", image: "https://i.pinimg.com/1200x/10/04/f3/1004f3b4b0ec5e76a910803078b96528.jpg", price: 1999, oldPrice: "2,499", discount: "20% OFF", review: 128 },
        { id: 2, title: "Rose Quartz Sphere", image: "https://i.pinimg.com/1200x/1e/05/ee/1e05ee1af47ba14e60a192d3f2f177f5.jpg", price: 2299, oldPrice: "2,999", discount: "23% OFF", review: 210 },
        { id: 3, title: "Citrine Crystal Tree", image: "https://i.pinimg.com/736x/e7/a9/ea/e7a9ea659fbed532a1372066b3e23b95.jpg", price: 1799, oldPrice: "2,399", discount: "25% OFF", review: 160 },
        { id: 4, title: "Clear Quartz Point", image: "https://i.pinimg.com/1200x/80/1a/b6/801ab691b5d6a5da253560cf8bc16fe7.jpg", price: 499, oldPrice: "699", discount: "20% OFF", review: 167 },
        { id: 5, title: "Black Tourmaline", image: "https://i.pinimg.com/736x/59/d3/11/59d311fb4a31c170ece74a5e3936ee6a.jpg", price: 599, oldPrice: "899", discount: "22% OFF", review: 134 }
    ];

    const product = productsBase.find(p => p.id === parseInt(id)) || productsBase[0];

    const handleQuantity = (type) => {
        if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
        if (type === "inc") setQuantity(quantity + 1);
    };

    // Updated 'Buy It Now' click handler with localStorage protection
    const handleBuyNow = () => {
        const itemsToCheckout = [
            {
                id: product.id,
                name: product.title,
                desc: `Quantity: ${quantity} | Premium Handpicked`,
                price: product.price * quantity // Total calculated price
            }
        ];

        // 1. Storage safety wrapper lagaya jo Checkout backup read karega
        localStorage.setItem("checkoutProducts", JSON.stringify(itemsToCheckout));

        // 2. Navigate to checkout with fallback state pass
        navigate("/checkout", { state: { checkoutProducts: itemsToCheckout } });
    };

    return (
        <section className="product-detail-wrapper py-5" style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
            <div className="container-fluid px-lg-5">
                
                <button 
                    className="btn text-white d-flex align-items-center gap-2 mb-4 p-0" 
                    onClick={() => navigate(-1)}
                    style={{ border: "none", background: "none", fontSize: "15px" }}
                >
                    <FiChevronLeft style={{ color: "#cca43b", fontSize: "20px" }} /> Back to Shop
                </button>

                <div className="row g-5">
                    {/* LEFT COLUMN */}
                    <div className="col-12 col-md-6">
                        <div className="position-relative p-2" style={{ backgroundColor: "#0a0a09", border: "1px solid #222", borderRadius: "8px" }}>
                            <span className="badge text-black position-absolute m-3 fw-bold" style={{ backgroundColor: "#cca43b", zIndex: 2 }}>NEW</span>
                            
                            <button 
                                className="position-absolute border-0 rounded-circle d-flex align-items-center justify-content-center shadow"
                                style={{ right: "25px", top: "25px", width: "40px", height: "40px", backgroundColor: isWishlist ? "#cca43b" : "#fff", color: "#000", zIndex: 2 }}
                                onClick={() => setIsWishlist(!isWishlist)}
                            >
                                <FiHeart style={{ fill: isWishlist ? "#000" : "none" }} />
                            </button>

                            <img src={product.image} alt={product.title} className="img-fluid w-100" style={{ height: "500px", objectFit: "cover", borderRadius: "6px" }} />
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                        <div>
                            <h2 className="fw-bold mb-2" style={{ letterSpacing: "1px" }}>{product.title}</h2>
                            
                            <div className="rating text-warning small mb-3 d-flex align-items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <AiFillStar key={star} style={{ fontSize: "16px" }} />
                                ))}
                                <span className="text-white small ms-2">({product.review} Customer Reviews)</span>
                            </div>

                            <div className="price-box d-flex align-items-center gap-3 mb-4 py-2 px-3 rounded" style={{ backgroundColor: "#0a0a09", border: "1px solid #222", width: "fit-content" }}>
                                <h3 className="m-0 fw-bold" style={{ color: "#cca43b" }}>₹{product.price * quantity}</h3>
                                <span className="badge bg-white text-dark fw-bold">{product.discount}</span>
                            </div>

                            <p className=" mb-4" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                                Experience the powerful positive vibrations of this natural {product.title}. Handpicked with premium craftsmanship, it helps in cleansing environment energies.
                            </p>

                            <div className="mb-4 small">
                                <div className="d-flex align-items-center gap-2 mb-2"><FiCheckCircle style={{ color: "#cca43b" }} /> 100% Authentic Natural Crystal</div>
                                <div className="d-flex align-items-center gap-2 mb-2"><FiCheckCircle style={{ color: "#cca43b" }} /> Cleansed & Charged before shipping</div>
                            </div>

                            {/* Quantity Control Selector */}
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <span className="fw-bold" style={{ fontSize: "14px" }}>Quantity:</span>
                                <div className="d-flex align-items-center border" style={{ borderColor: "#333", borderRadius: "4px" }}>
                                    <button className="btn text-white px-3 py-1" onClick={() => handleQuantity("dec")} style={{ border: "none" }}>-</button>
                                    <span className="px-3 fw-bold" style={{ minWidth: "40px", textAlign: "center" }}>{quantity}</span>
                                    <button className="btn text-white px-3 py-1" onClick={() => handleQuantity("inc")} style={{ border: "none" }}>+</button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <button 
                                    className="btn w-100 text-uppercase fw-bold d-flex align-items-center justify-content-center gap-2"
                                    onClick={() => addToCart({ 
                                        id: product.id, 
                                        name: product.title, 
                                        price: product.price, 
                                        quantity: quantity, 
                                        image: product.image 
                                    })}
                                    style={{ backgroundColor: "transparent", color: "#cca43b", border: "2px solid #cca43b", height: "48px", fontSize: "14px" }}
                                >
                                    <FiShoppingCart /> Add To Cart
                                </button>
                            </div>
                            <div className="col-12 col-sm-6">
                                <button 
                                    className="btn w-100 text-uppercase fw-bold d-flex align-items-center justify-content-center gap-2" 
                                    onClick={handleBuyNow}
                                    style={{ backgroundColor: "#cca43b", color: "#000", border: "none", height: "48px", fontSize: "14px" }}
                                >
                                    <FiZap /> Buy It Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;