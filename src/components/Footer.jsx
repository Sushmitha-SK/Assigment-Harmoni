import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-grid">
                <div className="footer-column">
                    <h3 className="footer-heading">Exclusive</h3>
                    <h4>Subscribe</h4>
                    <p>Get 10% off your first order</p>
                    <div className="subscribe-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="subscribe-input"
                        />
                        <button className="subscribe-button">
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="footer-heading" >Support</h3>
                    <p className="support-list">1234 Park Street, <br />DL-111111, India</p>
                    <p className="support-list-email">Test@testmail.com</p>
                    <p className="support-list">+91-999-999-9999</p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-heading">Account</h3>
                    <ul className="footer-list">
                        <li>My Account</li>
                        <li>Login/Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-list">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <hr className="footer-divider" />

            <p className="footer-copyright">
                &copy; Copyright Harmoni 2025. All right reserved
            </p>
        </footer>
    );
};

export default Footer;
