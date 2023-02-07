import "../css/Error.css"
import error_img from "../assets/disaster-or-mental-health-crisis.png"
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Error = () => {
    return ( 
        <div className="error-page ">
            <SubHeader
                loc={"Home . Page"}
                path={"404 Not Found"}
            />
            <div className="container section d-flex justify-content-center align-items-center flex-column pt-0">
                <img src={error_img} alt=""  className="w-100"/>
                <h5>oops! The page you requested was not found!</h5>
                <Button variant="contained">
                    <Link to='/home' className="link">Back To Home</Link>
                </Button>
            </div>
        </div>
     );
}
 
export default Error;