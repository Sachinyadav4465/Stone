import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiTrash2, FiShoppingCart, FiChevronLeft } from "react-icons/fi";
import { useCart } from "../components/CartContext";

const Wishlist = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [wishlistItems, setWishlistItems] = useState([]);

    // LocalStorage ya state se items load karne ke liye
    useEffect(() => {
        const savedWishlist = localStorage.getItem("wishlistProducts");
        if (savedWishlist) {
            setWishlistItems(JSON.parse(savedWishlist));
        } else {
            // Testing ke liye dummy data agar wishlist khali ho (Isko aap baad me hata sakte hain)
            const sampleWishlist = [
                { id: 1, title: "Amethyst Cluster", image: "https://i.pinimg.com/1200x/10/04/f3/1004f3b4b0ec5e76a910803078b96528.jpg", price: 1999 },
                { id: 2, title: "Rose Quartz Sphere", image: "https://i.pinimg.com/1200x/1e/05/ee/1e05ee1af47ba14e60a192d3f2f177f5.jpg", price: 2299 }
            ];
            setWishlistItems(sampleWishlist);
            localStorage.setItem("wishlistProducts", JSON.stringify(sampleWishlist));
        }
    }, []);

    // Wishlist se item delete karne ka function
    const handleRemoveItem = (id) => {
        const updatedWishlist = wishlistItems.filter(item => item.id !== id);
        setWishlistItems(updatedWishlist);
        localStorage.setItem("wishlistProducts", JSON.stringify(updatedWishlist));
    };

    // Wishlist se utha kar Cart me daalne aur wahan se hatane ke liye
    const handleMoveToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: 1,
            image: product.image
        });
        handleRemoveItem(product.id);
        alert(`${product.title} moved to cart!`);
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="wishlist-page bg-black text-white py-5 text-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <h3 className="text-gold mb-3" style={{ color: "#cca43b" }}>Your Wishlist is Empty</h3>
                    <p className="text-muted mb-4">Save your favorite crystal items here to buy them later.</p>
                    <button className="btn text-black fw-bold px-4 py-2" onClick={() => navigate("/")} style={{ backgroundColor: "#cca43b", border: "none" }}>
                        Discover Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="wishlist-wrapper py-5" style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
            <div className="container">
                {/* Back Button */}
                <button 
                    className="btn text-white d-flex align-items-center gap-2 mb-4 p-0" 
                    onClick={() => navigate(-1)}
                    style={{ border: "none", background: "none", fontSize: "15px" }}
                >
                    <FiChevronLeft style={{ color: "#cca43b", fontSize: "20px" }} /> Back
                </button>

                <h2 className="fw-bold mb-5 font-serif text-uppercase" style={{ letterSpacing: "1px", color: "#cca43b" }}>
                    My Wishlist ({wishlistItems.length})
                </h2>

                <div className="row g-4">
                    {wishlistItems.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                            <div className="card h-100 position-relative p-2" style={{ backgroundColor: "#0a0a09", border: "1px solid #222", borderRadius: "8px" }}>
                                
                                {/* Delete Button Icon */}
                                <button 
                                    className="position-absolute border-0 rounded-circle d-flex align-items-center justify-content-center shadow"
                                    style={{ right: "15px", top: "15px", width: "35px", height: "35px", backgroundColor: "#fff", color: "#dc3545", zIndex: 2 }}
                                    onClick={() => handleRemoveItem(item.id)}
                                    title="Remove from Wishlist"
                                >
                                    <FiTrash2 />
                                </button>

                                {/* Product Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="img-fluid card-img-top" 
                                    style={{ height: "250px", objectFit: "cover", borderRadius: "6px", cursor: "pointer" }}
                                    onClick={() => navigate(`/product/${item.id}`)}
                                />

                                {/* Card Body */}
                                <div className="card-body d-flex flex-column justify-content-between px-2 pt-3 pb-1">
                                    <div>
                                        <h6 className="fw-bold mb-2 text-white text-truncate" style={{ cursor: "pointer" }} onClick={() => navigate(`/product/${item.id}`)}>
                                            {item.title}
                                        </h6>
                                        <h5 className="fw-bold mb-3" style={{ color: "#cca43b" }}>₹{item.price.toLocaleString('en-IN')}</h5>
                                    </div>

                                    {/* Move to Cart Action */}
                                    <button 
                                        className="btn w-100 text-uppercase fw-bold d-flex align-items-center justify-content-center gap-2"
                                        onClick={() => handleMoveToCart(item)}
                                        style={{ backgroundColor: "#cca43b", color: "#000", border: "none", height: "40px", fontSize: "13px" }}
                                    >
                                        <FiShoppingCart /> Move To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Wishlist;