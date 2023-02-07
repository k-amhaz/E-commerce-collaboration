import '../css/ShoppingCart.css'
import SubHeader from "./SubHeader";
import Item from './Shop/Item';
import { Button, useThemeProps, Alert } from "@mui/material";
import { useContext, useState, useEffect } from 'react';
import { Context } from '../context/MainContext';

const Cart = () => {
    const {cartItems, data , addToCartBtn, realItems, subtotals, getRealItemsTotal, reducer} = useContext(Context)
    const clearBasket = () => {
        reducer({
            type: 'CLEAR_BASKET',
            item: {}
        })
    }

    const handleCheckout = () => {
        if(!realItems.basket.length) {
            return window.alert("Your basket is empty")
        } else {
            window.location.assign("/checkout")
        }
    }


    return (  
        <div className="shopping-cart ">
            <SubHeader
                loc="Home . Page"
                path="Shopping Cart"
            />


            <div className="container-lg section">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-6 d-flex flex-column gap-5 mt-5 items-list">
                        {

                            <div>
                            <table class="table" >
                                <thead>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    {/* <th scope="col">Quantity</th>
                                    // <th scope="col">total</th> */}
                                </thead>
                                <tbody className='mt-5'>
                                    {realItems.basket.map((product, index) => {

                                        const removeFromBasket = () => {
                                            reducer({
                                                type: 'REMOVE_FROM_BASKET',
                                                item: {
                                                    id: product.id,
                                                }
                                            })
                                            console.log(realItems)
                                        }

                                        return (
                                                <tr>
                                                    <td>
                                                        <div className="product d-flex gap-3">
                                                            <span onClick={() => removeFromBasket()}>x</span>
                                                            <div className="product-img ">
                                                                <img src={product.image} alt="" className='product-img shadow p-3'/>
                                                            </div>
                                                            <div className="details mt-2">
                                                                <h5>{product.title}</h5>
                                                                <p>Size XL</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <div className="price">
                                                            <p>${product.price}</p>
                                                        </div>
                                         
                                                    </td>
                                                    {/* <td>
                                                        <div className="quantity d-flex gap-2 text-center ms-3">
                                                            <span className="decrement mb-3" onClick={decrementQuantity}
                                                            >
                                                                -
                                                            </span>
                                                                <p>{product.quantity}</p>
                                                            <span className="increment mb-3" onClick={incrementQuantity}>
                                                                +
                                                            </span>
                                                        </div>
                                                    </td> */}
                                                    {/* <td>
                                                        <div className="product-total">
                                                            <p>${(product.price * quantity).toFixed(1)}</p>
                                                        </div>
                                                    </td> */}
                                                </tr>
                                            )
                                    })}
                                    </tbody>
                                </table>
                                <Button 
                                    className="add-to-cart-btn mt-3"
                                    onClick={() => clearBasket()}
                                    >
                                        Clear cart
                                </Button>
                                </div>
                        }
                        
                        
                        
                    </div>
                    <div className="col-12 col-lg-4 cart-totals mt-5">
                        <h5 className='text-center'>Cart Totals</h5>
                        <div className="card p-4 mt-2 mt-lg-5">
                            <div className="subtotals d-flex justify-content-between">
                                <p>Subtotals:</p>
                                <p>
                                    ${getRealItemsTotal(realItems.basket).toFixed(2)}
                                    {/* {
                                        realcItems.length > 0 && realItems.bakset.reduce((prevProduct, nexProduct) => {
                                            return prevProduct.price + nexProduct.price
                                        })
                                    } */}
                                    {/* {
                                        realItems.length > 0 &&  
                                        realItems.bakset.map((nexProduct) => {
                                            return nexProduct.price
                                        })
                                    } */}
                                </p>
                            </div>
                            <div className="totals d-flex justify-content-between">
                                <p>Totals:</p>
                                <p>${(getRealItemsTotal(realItems.basket) * 1.1).toFixed(2)}</p>
                            </div>
                            <br />
                            <p className='shipping'>Shipping & taxes calculated at checkout</p>
                            <div className="w-100">
                                <Button 
                                    fullWidth
                                    className="checkout-btn mt-3"
                                    onClick={handleCheckout}
                                    >
                                        Proceed To Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;

// {items.map((products) => {
//     return products.map((product) => {
        
//         return (
//             <div className="product-card mt-3" id={product.id} key={product.id}>
//                 <div className="row">
//                     <div className="product col-6 d-flex gap-2">
//                         <img src={product.image} alt="" className='w-25'/>
//                         <div className="details">
//                             <h5>{product.title}</h5>
//                             <p>Size XL</p>
//                         </div>
//                     </div>
//                     <div className="price col-2">
//                         <p>{product.price}</p>
//                     </div>
//                     <div className="Quantity col-2">
//                         <p>1</p>
//                     </div>
//                     <div className="product-total col-2">
//                         <p>$999</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     })}) }
