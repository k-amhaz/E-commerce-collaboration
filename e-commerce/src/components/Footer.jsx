import React from "react";
import { Container } from "@mui/material";
import "../css/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container className="footer-links">
          <div className="footer-info">
            <h3 className="footer-title">Hekto</h3>
            <div className="footer-phone-number footer-contact">
              <i className="fa-solid fa-phone"></i>
              <p>+1 (1234) 56789</p>
            </div>
            <div className="footer-email footer-contact">
              <i className="fa-solid fa-envelope"></i>
              <p>ex@kocode.contact</p>
            </div>
          </div>
          <div className="footer-pages">
            <h5>Pages</h5>
            <p>Contact us</p>
            <p>About us</p>
            <p>F&Q</p>
            <p>Shop</p>
            <p>Cart</p>
            <p>Favorites</p>
          </div>
          <div className="footer-categories">
            <h5>Categories</h5>
            <p>Electronics</p>
            <p>Jewelry</p>
            <p>Men's clothing</p>
            <p>Woman's clothing</p>
          </div>

          <div className="footer-account">
            <h5>Account</h5>
            <p>Sign up</p>
            <p>Log in</p>
          </div>
        </Container>
        <footer>
          <div className="footer-bottom-container">
            <p>
              <span>KO code</span> © 2023
            </p>
            <div className="footer-icons">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
