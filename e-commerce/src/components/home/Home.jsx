import React from 'react'
import { useContext } from 'react'
import '../../css/Home.css'
import canape_img from "../../assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
import lamp_img from "../../assets/image 32.png"
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Cards from './Cards';
import { Context } from '../../context/MainContext';

const Home = () => {
    const {data} = useContext(Context)

    const cards = data.map((product) => {
        return (
            <div className="card" id={product.id}>
                <img src={product.image} className="card-img-top w-25" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title product-title">{product.title}</h5>
                    {/* <p className="card-text product-description">{product.description}</p> */}
                    <p className="card-price product-price">$   {product.price}</p>
                    <p className="product-category">{product.category}</p>
                </div>
            </div>   
        )
    })
    const featured_cards = []

    for (let index = 0; index < 4; index++) {
        const random = Math.floor(Math.random() * data.length)
        featured_cards.push(cards[random])
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
        </div>
     );
}

export default Home