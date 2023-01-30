import '../css/ShoppingCart.css'
import SubHeader from "./SubHeader";
import Item from './Shop/Item';
import { Button, useThemeProps } from "@mui/material";
import { useContext, useState } from 'react';
import { Context } from '../context/MainContext';

const Cart = () => {
    const {cartItems, data, handleFinalItems, finalItems} = useContext(Context)
    // const items = JSON.parse(sessionStorage.getItem("shopping-cart"))
    const items = JSON.parse(sessionStorage.getItem("shopping-cart"))
    console.log((items))
    // for (let i = 0; i < data.length; i++) {
    //     //console.log(items[i] == data[i].id)// ?  handleFinalItems(data[i]) : cartItems
    //     // console.log(finalItems)
    //     // console.log(items[i] == data[i].id.toString())
    //     console.log(parseInt(items[i]) == parseInt(data[i].id))
    //     // console.log(parseInt(data[i].id))
    // }

    return (  
        <div className="shopping-cart">
            <SubHeader
                loc="Home . Page"
                path="Shopping Cart"
            />
            <div className="container-lg section">
                <div className="row">
                    <div className="col-8">
                        {items.map((products) => {
                            return products.map((product) => {
                                return (
                                    <div className="product-card" id={product.id} key={product.id}>
                                        <div className="product">
                                            <img src="" alt="" />
                                            <div className="details">
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        })}
                    </div>
                    <div className="col-4 cart-totals">
                        <h5 className='text-center'>Cart Totals</h5>
                        <div className="card p-4 mt-5">
                            <div className="subtotals d-flex justify-content-between">
                                <p>Subtotals:</p>
                                <p>$999</p>
                            </div>
                            <div className="totals d-flex justify-content-between">
                                <p>Totals:</p>
                                <p>$999</p>
                            </div>
                            <br />
                            <p className='shipping'>Shipping & taxes calculated at checkout</p>
                            <Button 
                                fullWidth
                                className="checkout-btn mt-3"
                                >
                                    Proceed To Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;