import "../css/ContactUs.css"
import SubHeader from "./SubHeader";

const ContactUs = () => {
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
            </div>
        </div>
     );
}
 
export default ContactUs;