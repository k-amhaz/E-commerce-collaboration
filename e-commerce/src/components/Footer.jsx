import React from "react";
import { Container } from "@mui/material";
import "../css/Footer.css";
import { useContext } from "react";
import { Context } from "../context/MainContext";
import { Link } from "react-router-dom";

export default function Footer() {

  const {realItems} = useContext(Context)

  return (
    <>
      <div className="footer">
        <div className="footer-links container-lg">
          <div className="footer-info">
            <h3 className="footer-title">KO code</h3>
            <div className="footer-phone-number footer-contact">
              <i className="fa-solid fa-phone"></i>
              <p>+1 (1234) 56789</p>
            </div>
            <div className="footer-email footer-contact">
              <i className="fa-solid fa-envelope"></i>
              <p>{realItems.user ? realItems.user.email : "example@gmail.com"}</p>
            </div>
          </div>
          <div className="footer-pages">
            <h5>Pages</h5>
            <Link className="link-decoration" to='/home'><p>Home</p></Link>
            <Link className="link-decoration" to='/contact'><p>Contact us</p></Link>
            <Link className="link-decoration" to='/about'><p>About us</p></Link>
            <Link className="link-decoration" to='/shop'><p>Shop</p></Link>
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
            <Link className="link-decoration" to='/signup'><p>Sign up</p></Link>
            <Link className="link-decoration" to='/login'><p>Log in</p></Link>
          </div>
        </div>
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
