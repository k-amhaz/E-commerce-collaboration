import '../../css/Home.css'
import React from 'react'
import canape_img from "../../assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
import lamp_img from "../../assets/image 32.png"
import reactangle_img from "../../assets/eRwDMy.webp"
import { Typography, Rating, Stack } from '@mui/material'
import { Context } from '../../context/MainContext';
import { useContext, useState } from 'react'

const Home = () => {

    const {data} = useContext(Context)
    console.log(data.length)
    const [hovered, setHovered] = useState(false)

    const HalfRating = (product) => {
        return (
            <Stack spacing={1}>
                {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                <Rating className="half-rating-read mb-4" defaultValue={product.rating.rate} precision={0.5} readOnly />
            </Stack>
        );
    }

    const getRandomProducts = (numberOfItems, arrayOfItems, rate) => {
        for (let index = 0; index < numberOfItems; index++) {
            const random = Math.floor(Math.random() * data.length)
            arrayOfItems.push(cards[random])
        }
        return arrayOfItems
    }

    const cards = data.map((product) => {
        return (
            <div 
                className="card shadow featured-card text-start d-flex justify-content-center align-items-center flex-column" 
                id={product.id} 
                key={product.id}
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
            >
                <div className="card-img d-flex justify-content-center align-items-center">
                    <img src={product.image} className="card-img-top my-4 " alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className=" product-title">{product.title}</h5>
                    <p className=" product-price text-center mt-2 ">$   {product.price}</p>
                    <p>{product.rating.rate}</p>
                </div>
            </div> 
        )
    })

    
    const topRatingProducts = data.filter((product) => {
        return product.rating.rate >= 4.7
    })

    

    const featured_cards = topRatingProducts.map((product) => {
        return (
            <div 
                className="card mt-5 shadow-lg featured-card text-start d-flex justify-content-center align-items-center flex-column" 
                id={product.id} 
                key={product.id}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="card-img d-flex justify-content-center align-items-center">
                    <img src={product.image} className="card-img-top my-4 " alt="..."/>
                </div>
                <div className="card-body text-center mt-4">
                    <p className=" product-title">{product.title}</p>
                    <h5 className=" product-price text-center fw-bold mb-0">$ {product.price}</h5>
                </div>
                {HalfRating(product)}
                <div className="btn add-to-cart-btn ">
                    Add To Cart
                </div>
            </div> 
        )
    })

    const offer_card = (icon) => {
        return (
            <div className="offer_card text-center">
                {icon}
                <h5 className='mt-3'>24/7 Support</h5>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt quasi maiore.</p>
            </div>
        )
    }

    return ( 
        <div className="home">
            <div className="subheader">
                <div
                    className='container-lg d-flex justify-content-between align-items-center py-5'
                >
                    <div className="left text-center text-md-start">
                        <img 
                            src={lamp_img}
                            alt=""
                            className='lamp_img d-none d-lg-block'
                        />
                        <Typography >
                            Best Furniture For Your Castle....
                        </Typography>
                        <Typography variant='h3' className='fw-bold'>
                            New Furniture Collection Trends in 2020
                        </Typography>
                        <Typography className='lh-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </Typography>
                        <div className="btn py-2">Shop Now</div>

                    </div>
                    <div className="right d-none d-lg-block">
                        <div className="discount  d-flex justify-content-center align-items-center ">
                            50% off
                        </div>
                        <img 
                            src={canape_img} 
                            alt="" 
                            className='canape_img d-none d-md-block img-fluid'
                        />
                    </div>
                </div>
            </div>
            <div className="featured-products section">
                <div className="styled-h2">
                    Featured Products
                </div>
                <div className="container-lg ">
                    <div className="row">
                        {featured_cards.map((card) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                                    {card}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="offer section mt-5 mb-5">
                <div className="styled-h2">
                    What Shopex Offer!
                </div>
                <div className="container-lg mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            {offer_card(<i class="bi bi-building-fill-gear"></i>)}
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            {offer_card(<i class="bi bi-bank"></i>)}
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            {offer_card(<i class="bi bi-trophy"></i>)}
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            {offer_card(<i class="bi bi-bag-check-fill"></i>)}
                        </div>
                    </div>
                </div> 
            </div>
            <div className="unique-feature section ">
                <div className="container-lg d-flex justify-content-center align-items-center py-4">
                    <div className="row">
                        <div className="col-5 d-flex justify-content-center align-items-center">
                            {data.length > 0 && <img 
                                src={data[8].image} 
                                alt="" 
                                className='unique-img d-none d-md-block w-100'
                            />}
                        </div>
                        <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="content w-100 w-lg-50 ms-5">
                                <div className="styled-h2 text-start">
                                    Unique Features Of leatest & Trending Poducts
                                </div>
                                <ul className='list-unstyled d-flex justify-content-center align-items-start flex-column gap-2 mt-2'>
                                    <li>All frames constructed with hardwood solids and laminates</li>
                                    <li className=''>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
                                    <li>Arms, backs and seats are structurally reinforced</li>
                                </ul>
                                <div className="content-product-details d-flex justify-content-start align-items-center gap-4">
                                    <div className="btn add-to-cart-btn">
                                        Add To Cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="discount-item section d-flex justify-content-center align-items-center flex-column">
                <div className="styled-h2">
                    Discount Item
                </div>
                <div className="container-lg text-center text-lg-start d-flex justify-content-center align-items-center mt-5" >
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="content">
                                <div className="styled-h2 my-4 text-center text-lg-start">20% Discount Of All Products</div>
                                    <h5 className='mt-2'>Eams Sofa Compact</h5>
                                    <p className='w-100 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rem aliquid assumenda voluptates quisquam perspiciatis ipsa nisi si eos?</p>
                                <div className="row">
                                    <div className="col-6">
                                        <p><i class="bi bi-check-lg"></i> Material expose like metals</p>
                                        <p><i class="bi bi-check-lg"></i> Clear lines and geomatric figures</p>
                                    </div>
                                    <div className="col-6">
                                        <p><i class="bi bi-check-lg"></i> Simple neutral colours.</p>
                                        <p><i class="bi bi-check-lg"></i> Material expose like metals</p>
                                    </div>
                                </div>
                                <div className="btn mt-3">
                                    Shop Now
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            {data.length > 0 && <img 
                                src={data[0].image} 
                                alt="" 
                                className='unique_img d-none d-md-block w-100'
                            />}
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-update text-center">
                <div className="background-img">
                    <img src={reactangle_img} alt="" />
                </div>
                <div className="container-lg d-flex justify-content-center align-items-center text-center">
                    <div className="content w-100 text-center">
                        <div className="styled-h2 ">
                        Get Leatest Update By Subscribe 0ur Newslater
                        </div>
                        <div className="btn mt-4">
                            Shop Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home