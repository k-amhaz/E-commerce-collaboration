import '../../css/ProductDetails.css'
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/MainContext";
import Item from "./Item";
import { Button } from '@mui/material';
import SubHeader from '../SubHeader';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Details = () => {

    const {data, linkedProduct, HalfRating, handleCartItems, linkBtn} = useContext(Context)
    const [detailedProduct, setDetailedProduct] = useState([])

    useEffect(() => {
        setDetailedProduct(data.filter(product => product.id === parseInt(linkedProduct.id)))
    }, [])


    return (
        <div className="details">
            <SubHeader
                loc={"Home . Pages"}
                path={"Product Details"}
            />
            {detailedProduct.map((product, index) => {
                return(
                    <div className="product-details px-0" id={product.id} key={index}>
                        <div className="container-lg mt-5 mb-5">
                            <div className="card shadow-lg py-5 px-3 d-flex ">
                                <div className="row d-flex justify-content-center align-items-center gap-5 gap-lg-0">
                                    <div className="col-12 col-lg-4 text-center">
                                        <img src={product.image} alt="" className="product-img"/>
                                    </div>
                                    <div className="col-12 col-lg-8 ">
                                        <div className="product-title">
                                            <div className="styled-h2 text-start">
                                                {product.title}
                                            </div>
                                        </div>
                                        <div className="product-body mt-4">
                                            <div className="rating d-flex justify-content-start gap-2">
                                                {HalfRating(product)} 
                                                <p className='count'>({product.rating.count})</p> 
                                            </div>
                                            <p className='price d-flex gap-3 fw-bold'>
                                                ${product.price}
                                                <span>${product.price * 2}</span>
                                            </p>
                                            <p className='description-title mt-4 fw-bold'>Description</p>
                                            <p className='description m-0 mt-1 lh-lg'>{product.description}</p>
                                        </div>
                                        <div className="product-footer mt-3">
                                            <Button 
                                                endIcon={<ShoppingCartOutlinedIcon/>}
                                                className="add-to-cart-btn"
                                                onClick={handleCartItems}
                                                id={product.id}
                                                >
                                                Add To Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Details; 