import { createUserWithEmailAndPassword } from "firebase/auth"
import { useContext, useState } from "react"
import {  Link, useNavigate } from "react-router-dom"
import {Typography, Button,TextField, Container} from "@mui/material";
import {auth} from "../../DataBase/firebase"
import  signup_img from '../../assets/011 1.png';
import instagram_logo from "../../assets/download.jpeg"
import Loading from "../Loading";


const SignUp = () => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState('')
    const [signUpLoading, setSignUpLoading] = useState(false)
    const navigate = useNavigate()

    function handleInputsSignupChange(e) {
        const {name, value} = e.target
        setCurrentUser(prevUser => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    function handleSignUpSubmit(e) {
        e.preventDefault()
        const {email, password} = currentUser.email
                
        createUserWithEmailAndPassword(auth, email, password)
            // .then(() => navigate('/Home'))
            .catch((err) => setError(err))
    }

    return ( 
        <>
            {signUpLoading && <Loading />}
            {error && <p className=" text-center">{error.toString()}</p>}
            <div className="signup d-flex justify-content-center align-items-center">
                <div className="signup-card card text-center px-5 py-4">
                    <div className="title d-flex justify-content-center align-items-center gap-3">
                        <img src={instagram_logo} className='insta-logo' alt="" />
                        <h2 className="mt-2" >KO-gram</h2>
                    </div>
                    <Typography  className="to-see-photos mt-3 lh-sm" variant="span">
                        Sign up to see photos and videos from your friends
                    </Typography>
                    <form action="" className="mt-4 signup gap-4 d-flex justify-content-center align-items-center flex-column" onSubmit={(event) => handleSignUpSubmit(event)}>
                        <TextField 
                            className="w-100"
                            label="email"
                            type='email'
                            color="primary" 
                            value={currentUser.email.value}
                            name="email"
                            onChange={(event) => handleInputsSignupChange(event)} 
                            placeholder="Enter Your Email Here"
                            required
                            focused 
                        />
                        <TextField 
                            className="w-100"
                            label="password"
                            type='password'
                            color="primary" 
                            value={currentUser.password.value}
                            name="password"
                            onChange={(event) => handleInputsSignupChange(event)} 
                            placeholder="Enter Your Password Here"
                            required
                            focused 
                        />
                        <Button 
                            variant="contained"
                            type="submit"
                            className="w-100 mt-2"
                        >Sign Up</Button>
                    </form>
                    <Typography color='primary' className="mt-4">Have an account? <Link to="/login">Login</Link></Typography>
                </div>
            </div>
        </>
     );
}
 
export default SignUp;