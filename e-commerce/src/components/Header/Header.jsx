import "../../css/Header.css";
import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Context } from "../../context/MainContext";

const Header = () => {

    const {linkBtn} = useContext(Context)

    return (
        <>
            <div className="header">
                <div className="up-header ">
                    <div className='container-lg up-header-container  d-flex justify-content-start justify-content-md-between align-items-center'>
                        <div className="left d-none d-md-flex justify-content-center  align-items-center gap-5">
                            <div className="left-mail d-flex justify-content-center  align-items-center gap-2">
                                <i className="bi bi-envelope"></i>
                                <p>example@gmail.com</p>
                            </div>
                            <div className="left-phone d-flex  justify-content-center  align-items-end gap-2">
                                <i className="bi bi-telephone-plus "></i>
                                <p>(123456) 7800</p>
                            </div>
                        </div>
                        <div className="right d-flex justify-content-center  align-items-center gap-2">
                            <div className="right-menu d-flex justify-content-center  align-items-end gap-2">
                                <div className="right-menu-login d-flex justify-content-center  align-items-center gap-2">
                                    <p>Login</p>
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="right-menu-fav d-flex justify-content-center  align-items-center gap-2">
                                    <p>Wishlist</p>
                                    <i className="bi bi-heart"></i>
                                </div>
                            </div>
                            {linkBtn('cart', <i className="bi bi-cart text-light"></i>)}
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        </>
    );
};

export default Header;
