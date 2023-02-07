import "../css/Checkout.css"
import SubHeader from "./SubHeader";
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="checkout-page">
            <SubHeader 
                loc="Home . Page"
                path="Order Completed"
            />
            <div className="container">
                <div className="checkout section d-flex justify-content-center align-items-center flex-column text-center">
                    <div className="checked shadow ">
                        <CheckIcon
                            className='checked-icon'
                        />
                    </div>
                    <div className="styled-h2 mt-4">Your Order Is Completed!</div>
                    <p className="mt-3">Thank you for your order! Your order is being processed and will be completed within 3-6
                    hours. You will receive an email confirmation when your order is completed.</p>
                    <Button
                        variant="contained"
                    >
                        <Link to="/shop" className="link-decoration">Continue Shopping</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;