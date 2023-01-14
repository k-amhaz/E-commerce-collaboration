import "../../css/Header.css";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="up-header ">
                <div className='container-lg up-header-container d-flex justify-content-between align-items-center'>
                    <div className="left d-flex justify-content-center  align-items-center gap-5">
                        <div className="left-mail d-flex justify-content-center  align-items-center gap-2">
                            <i className="bi bi-envelope"></i>
                            <p>example@gmail.com</p>
                        </div>
                        <div className="left-phone d-flex justify-content-center  align-items-end gap-2">
                            <i className="bi bi-telephone-plus "></i>
                            <p>(123456) 7800</p>
                        </div>
                    </div>
                    <div className="right d-flex justify-content-center  align-items-center gap-2">
                        <div className="right-menu d-flex justify-content-center  align-items-end gap-2">
                            <p>Login</p>
                            <i className="bi bi-person"></i>
                            <p>Wishlist</p>
                            <i className="bi bi-heart"></i>
                        </div>
                        <i className="bi bi-cart ms-4"></i>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    </>
  );
};

export default Header;
