import React from 'react'
import '../css/Home.css'
import canape_img from "../assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
import lamp_img from "../assets/image 32.png"
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const Home = () => {
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
                <div className="container-lg">
                    <div class="row mt-5">
                        <div class="col-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Home