import '../css/AboutUs.css'
import SubHeader from "./SubHeader";
import intro_img from "../assets/Rectangle 56.png"
import { Button } from '@mui/material';
import client1 from "../assets/OhKElOkQ3RE.png"
import client2 from "../assets/GH-mSApoKO0.png"
import client3 from "../assets/RukI4qZGlQs.png"

const AboutUs = () => {
    return ( 
        <div className="about-us">
            <SubHeader
                loc={"Home . Page"}
                path={"About Us"}
            />
            <div className="container-lg section">
                <div className="introduction">
                    <div className="row  d-block d-md-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-6 d-flex justify-content-end">
                            <div className="intro-img">
                                <img src={intro_img} alt="" className=''/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex mt-5 mt-lg-0">
                            <div className="intro-text">
                                <div className="styled-h2 text-start">
                                    Know About Our Ecomerce Business, History
                                </div>
                                <p className='mt-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                                </p>
                                <Button className="about-us-btn mt-5">
                                    About Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features section">
                <div className="container-lg">
                    <div className="styled-h2">
                        Our Features
                    </div>
                    <div className="row cards mt-5 text-center gap-4 gap-md-0">
                        <div className="col-12 col-md-6 col-lg-3 mt-3">
                            <div className="card shadow p-3 ">
                                <i className="bi bi-building-fill-gear"></i>
                                <h4>Free Delivery</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-3">
                            <div className="card shadow p-3 ">
                                <i className="bi bi-bank"></i>
                                <h4>100% Cash Back</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-3">
                            <div className="card shadow p-3 ">
                                <i className="bi bi-trophy"></i>
                                <h4>Quality Product</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-3">
                            <div className="card shadow p-3 ">
                                <i className="bi bi-bag-check-fill"></i>
                                <h4>24/7 Support</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clients-reviews section">
                <div className="styled-h2">
                    Our Client Says!
                </div>
                <div className="container-lg text-center d-flex flex-column justify-content-center align-items-center">
                    <div className="clients-imgs d-flex gap-3">
                        <img src={client1} alt="" className='shadow'/>
                        <img src={client2} alt="" className='shadow'/>
                        <img src={client3} alt="" className='shadow'/>
                    </div>
                    <div className="client-talks mt-4">
                        <h4>Selina Gomez</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUs;