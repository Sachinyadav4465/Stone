import React from "react";
import {
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

import {
  GoVerified,
} from "react-icons/go";

import {
  TbTruckDelivery,
  TbRefresh,
} from "react-icons/tb";

import {
  RiSecurePaymentLine,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="hero-section py-1 mt-0">

      <div className="container-fluid px-lg-5">

        <div className="row align-items-center">

          {/* LEFT */}

          <div className="col-lg-5">

            <p className="hero-tag">

              India's Largest Crystal Store

              <FiStar className="ms-2"/>

            </p>

            <h3 className="hero-title">

              DISCOVER THE POWER

              <span>

                OF NATURAL CRYSTALS

              </span>

            </h3>

            <p className="hero-desc">

              100% Authentic Crystals, Premium Quality,

              Handpicked with Love & Positive Energy.

            </p>
            <div className="hero-btns py-2">

              <button type="button" className="btn-gold">
                SHOP COLLECTION
                <FiArrowRight />
              </button>

              <button type="button" className="btn-outline-gold">
                EXPLORE CRYSTALS
              </button>

            </div>

          </div>

          {/* CENTER IMAGE REMOVED */}

          <div className="col-lg-4 text-center">
            {/* Image removed as requested */}
          </div>

          {/* OFFER */}

          <div className="col-lg-3">

            <div className="offer-card">

              <small>

                SPECIAL OFFER

              </small>

              <h5>

                Get Flat

              </h5>

              <h2>

                10% OFF

              </h2>

              <p>

                On Your First Order

              </p>

              <button className="coupon-btn">

                USE CODE : STONE10

              </button>

              <div className="offer-bottom">

                <div>

                  <h4>

                    50K+

                  </h4>

                  <span>

                    Happy Customers

                  </span>

                </div>

                <div className="line"></div>

                <div>

                  <h4>

                    4.8 ★

                  </h4>

                  <span>

                    Google Rating

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* TRUST BADGES */}

        <div className="row trust-row mt-3">

          <div className="col-lg-3 col-6">

            <div className="trust-item">

              <GoVerified/>

              <div>

                <h6>

                  100% Authentic

                </h6>

                <p>

                  Certified Crystals

                </p>

              </div>

            </div>

          </div>

          <div className="col-lg-3 col-6">

            <div className="trust-item">

              <TbTruckDelivery/>

              <div>

                <h6>

                  Free Shipping

                </h6>

                <p>

                  Above ₹1499

                </p>

              </div>

            </div>

          </div>

          <div className="col-lg-3 col-6">

            <div className="trust-item">

              <TbRefresh/>

              <div>

                <h6>

                  Easy Returns

                </h6>

                <p>

                  Hassle Free

                </p>

              </div>

            </div>

          </div>

          <div className="col-lg-3 col-6">

            <div className="trust-item">

              <RiSecurePaymentLine/>

              <div>

                <h6>

                  Secure Payments

                </h6>

                <p>

                  100% Safe

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;