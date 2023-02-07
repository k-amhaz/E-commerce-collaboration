import "../../css/Header.css";
import React, { useContext } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Context } from "../../context/MainContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../data/DataBase";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const Header = () => {

    const {linkBtn, realItems, reducer, HalfRating } = useContext(Context)

    const [activeDropDown, setActiveDropDown] = useState(false)

    const handleLogOutBtn = () => {
        signOut(auth)
            .then(() => {
                window.alert("the user signed out")
            })
            .then(window.location.assign("/signup"))
            .catch((err) => window.alert(err))
    }

    const addToBasket = (product) => {
        console.log(realItems)
        reducer({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                description: product.description,
                rating: product.rating,
                product: product.product,
            }
        })
        window.alert("Item is succefully added to cart!")
    }

    const clearWishList = () => {
        reducer({
            type: 'CLEAR_WISHLIST',
            item: {}
        })
    }

    return (
        <>
            <div className="header">
                <div className="up-header ">
                    <div className='container-lg up-header-container  d-flex justify-content-start justify-content-md-between align-items-center'>
                        <div className="left d-none d-md-flex justify-content-center  align-items-center gap-5">
                            <div className="left-mail d-flex justify-content-center  align-items-center gap-2">
                                <i className="bi bi-envelope"></i>
                                <p>{realItems.user ? realItems.user.email : "example@gmail.com"}</p>
                            </div>
                            <div className="left-phone d-flex  justify-content-center  align-items-end gap-2">
                                <i className="bi bi-telephone-plus "></i>
                                <p>(123456) 7800</p>
                            </div>
                        </div>
                        <div className="right d-flex justify-content-center  align-items-center gap-2">
                            <div className="right-menu d-flex justify-content-center  align-items-end gap-2">
                                <div className="right-menu-login d-flex justify-content-center  align-items-center gap-2">
                                    <Button className='btn text-light' onClick={handleLogOutBtn} endIcon={<PersonOutlineIcon />}>Logout</Button>
                                </div>
                                    
                                <div className="right-menu-fav d-flex justify-content-start  align-items-center gap-2">
                                    <div className="dropdown-start d-flex flex-column justify-content-start">
                                        <Button 
                                            className="text-light dropdown-toggle" 
                                            type="button" 
                                            data-bs-toggle="dropdown" 
                                            data-bs-auto-close="outside"
                                            aria-expanded="false" 
                                            endIcon={
                                                realItems.wishList.length > 0 ? 
                                                <FavoriteIcon /> :
                                                <FavoriteBorderIcon />
                                            }
                                            >
                                            WishList
                                        </Button>
                                        <ul class="dropdown-menu  shadow-lg p-3">
                                            {
                                                realItems.wishList.length > 0 

                                                ? 
                                                <div>
                                                    {/* <p className="text-center">WishList</p> */}
                                                    {realItems.wishList.map((item) => {

                                                        const removeFromWishList = () => {
                                                            reducer({
                                                                type: 'REMOVE_FROM_WISHLIST',
                                                                item: {
                                                                    id: item.id,
                                                                }
                                                            })
                                                        }
                                                        return (
                                                            <li className="dropdown-item gap-3">
                                                                <div className="item-img  shadow">
                                                                    <img src={item.image} alt="" />
                                                                </div>
                                                                <div className="item-details">
                                                                    <p>{item.title}</p>
                                                                    <p>USD  ${item.price}</p>
                                                                    <Button 
                                                                    // endIcon={<ShoppingCartOutlinedIcon/>}
                                                                    className="add-btn"
                                                                    onClick={() => addToBasket(item)}
                                                                    id={item.id}
                                                                    >
                                                                    Add To Cart
                                                                    </Button>
                                                                </div>
                                                                <DeleteIcon 
                                                                    className="rm-wishlist"
                                                                    onClick={() => removeFromWishList()}
                                                                />
                                                            </li>
                                                        )
                                                    })}
                                                </div>
                                                :

                                                    <div>
                                                        <h3>No favorite items</h3>
                                                        <Link to={`/shop`} className='link-btn btn'>  
                                                            Shop Now
                                                        </Link>
                                                    </div>
                                            }
                                            
                                            {
                                                realItems.wishList.length > 0 
                                                && 
                                                <Button 
                                                className="add-to-cart-btn mt-3"
                                                onClick={() => clearWishList()}
                                                >
                                                    Clear WishList
                                                </Button>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Button className="text-light p-0">
                                <Link to='/cart'>
                                    <i className="bi bi-cart text-light"><span class="badge fst-1">{realItems.basket.length}</span></i>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        </>
    );
};

export default Header;
