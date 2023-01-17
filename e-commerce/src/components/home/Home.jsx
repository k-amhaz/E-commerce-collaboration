import React from 'react'
import { useContext } from 'react'
import '../../css/Home.css'
import canape_img from "../../assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
import lamp_img from "../../assets/image 32.png"
import { Container } from '@mui/system';
import { Typography } from '@mui/material'
import { Context } from '../../context/MainContext';
import reactangle_img from "../../assets/Rectangle 102 (1).png"

const Home = () => {
    const {data, getProducts} = useContext(Context)

    getProducts()  

    const cards = data.map((product) => {
        return (
            <div className="card shadow featured-card text-start d-flex justify-content-center align-items-center flex-column" id={product.id} key={product.id}>
                <div className="card-img d-flex justify-content-center align-items-center">
                    <img src={product.image} className="card-img-top my-4 " alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className=" product-title">{product.title}</h5>
                    <p className=" product-price text-center mt-2 ">$   {product.price}</p>
                </div>
            </div> 
        )
    })

    const featured_cards = []
    const leatest_cards  = []
    const unique_card = []
    
    for (let index = 0; index < 1; index++) {
        const random = Math.floor(Math.random() * data.length)
        unique_card.push(cards[random])
    }

    function getRandomProducts(numberOfItems, arrayOfItems) {
        for (let index = 0; index < numberOfItems; index++) {
            const random = Math.floor(Math.random() * data.length)
            arrayOfItems.push(cards[random])
        }
        return arrayOfItems
    }

    getRandomProducts(4, featured_cards)
    getRandomProducts(6, leatest_cards)

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
                    <div className="left">
                        <img 
                            src={lamp_img}
                            alt=""
                            className='lamp_img '
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
                    <div className="right">
                        <div className="discount d-none d-md-block  text-center d-flex justify-content-center align-items-center ">
                            50% off
                        </div>
                        <img 
                            src={canape_img} 
                            alt="" 
                            className='canape_img d-none d-md-block'
                        />
                    </div>
                </div>
            </div>
            <div className="featured-products section">
                <div className="styled-h2">
                    Featured Products
                </div>
                <div className="container-lg mt-5">
                    <div className="row">
                        {featured_cards.map((card) => {
                            return (
                                <div className="col-3">
                                    {card}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="leatest-products section d-flex justify-content-center align-items-center flex-column">
                <div className="styled-h2">
                    Leatest Products
                </div>
                <ul class="nav nav-pills mt-3 ">
                    <li class="nav-item">
                        <a class="nav-link" href="#">New Arrival</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Best Seller</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Featured</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Special Offer</a>
                    </li>
                </ul>
                <div className="container-lg mt-5">
                    <div className="row">
                        {leatest_cards.map((card) => {
                            return (
                                <div className="col-4 mt-5">
                                    {card}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="offer section ">
                <div className="styled-h2">
                    What Shopex Offer!
                </div>
                <div className="container-lg mt-5">
                    <div className="row">
                        <div className="col-3">
                            {offer_card(<i class="bi bi-building-fill-gear"></i>)}
                        </div>
                        <div className="col-3">
                            {offer_card(<i class="bi bi-bank"></i>)}
                        </div>
                        <div className="col-3">
                            {offer_card(<i class="bi bi-trophy"></i>)}
                        </div>
                        <div className="col-3">
                            {offer_card(<i class="bi bi-bag-check-fill"></i>)}
                        </div>
                    </div>
                </div> 
            </div>
            <div className="unique-feature section ">
                <div className="container-lg d-flex justify-content-center align-items-center py-4">
                    <img 
                            src={unique_card.image} 
                            alt="" 
                            className='canape_img d-none d-md-block unique-img'
                    />
                    <div className="content w-50 ms-5">
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
                            <div className="details">
                                <p className='m-0'>{unique_card.title}</p>
                            </div>
                        </div>
                    </div>
                                <p className='m-0'>{unique_card.price}</p>
                </div>
            </div>
            <div className="discount-item section d-flex justify-content-center align-items-center flex-column" >
                <div className="styled-h2">
                    Discount Item
                </div>
                <div className="container-lg ">
                    <ul class="nav nav-pills mt-3">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Wood Chair</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Plastic Chair</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sofa Collection</a>
                        </li>
                    </ul>
                    <div className="container-lg d-flex justify-content-center align-items-center mt-3" >
                        <div className="content">
                            <div className="styled-h2 text-start">20% Discount Of All Products</div>
                            <h5 className='mt-2'>Eams Sofa Compact</h5>
                            <p className='w-50 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rem aliquid assumenda voluptates quisquam perspiciatis ipsa nisi si eos?</p>
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
                        <img src={unique_card.image} alt="" className='w-25' />
                    </div>
                </div>
            </div>
            <div className="latest-update text-center">
                <div className="background-img">
                    <img src={reactangle_img} alt="" />
                </div>
                <div className="container-lg d-flex justify-content-center align-items-center">
                    <div className="content w-50">
                        <div className="styled-h2">
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