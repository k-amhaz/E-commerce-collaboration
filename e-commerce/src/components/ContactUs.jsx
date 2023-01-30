import "../css/ContactUs.css"
import SubHeader from "./SubHeader";
import contact_img from "../assets/undraw_team_work_k-80-m.svg"
import { Box, TextField, Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/MainContext";

const ContactUs = () => {

    const {addToCartBtn} = useContext(Context)

    return ( 
        <div className="contact-us">
            <SubHeader
                loc={"Home . Pages"}
                path={"Contact Us"}
            />
            <div className="container-lg section">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-5 info">
                        <div className="styled-h2 text-start">
                            Information About us
                        </div>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className="colored-bulls">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 contact-way mt-5 mt-md-0">
                        <div className="styled-h2 text-start mt-3 mt-md-0">
                            Contact Way
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 mt-4 mt-md-2">
                                <p>Tel: 877-67-88-99</p>
                                <p>E-Mail: shop@store.com</p>
                            </div>
                            <div className="col-12 col-md-6 mt-4 mt-md-2">
                                <p>Support Forum</p>
                                <p>For over 24hr</p>
                            </div>
                            <div className="col-12 col-md-6 mt-4">
                                <p>20 Margaret st, London</p>
                                <p>Great britain, 3NM98-LK</p>
                            </div>
                            <div className="col-12 col-md-6 mt-4">
                                <p>Free standard shipping</p>
                                <p>on all orders.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row contact-form gap-5 gap-lg-0  d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-5">
                        <form
                            method="POST"
                            className="d-flex flex-column gap-4 justify-content-start"
                            action="https://formsubmit.co/d012481abf9a3391791dda308cfb0edb"
                            >
                                <div className="row d-flex">
                                    <div className="col-6">
                                        <TextField
                                            required
                                            id="outlined-name-input"
                                            label="Name"
                                            type="text"
                                            name="Name"
                                            autoComplete="current-name"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <TextField
                                            required    
                                            id="outlined-required"
                                            label="E-mail"
                                            type='email'
                                            name="Email"
                                            autoComplete="current-email"
                                        />  
                                    </div>
                                </div>
                                <TextField
                                    required
                                    id="outlined-subject-input"
                                    label="Subject"
                                    type="text"
                                    name="Subject"
                                    autoComplete="current-subject"
                                    fullWidth
                                />
                                <TextField
                                    required
                                    multiline
                                    id="outlined-message-input"
                                    label="Type Your Message"
                                    type="text"
                                    name="Message"
                                    autoComplete="current-message"
                                    rows={6}
                                    fullWidth
                                />
                            {addToCartBtn("send mail", '', '', 'submit')}
                        </form>
                    </div>
                    <div className="col-12 col-md-6 ps-5">
                        <img src={contact_img} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;