import React, { useState } from "react";
import "../../css/SignIn.css";
import SubHeader from "../SubHeader";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { auth } from "../../data/DataBase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor,
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor,
    },
  },
}));
export default function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: [value],
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(auth, email,password)
      // .then((cred) => {
      //   // console.log(cred.user)
        
      // })
      .then((cred) => {
        console.log(cred.user)
        window.location.assign('/home')}
      )
      .catch(err => window.alert(err))
  }


  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <SubHeader loc={"Account"} path="Log in" />

      {/* <Link to='/' className='mt-5'>
        <a className="navbar-brand" href="#">
          Hekto
        </a>
      </Link> */}
      <div className="login-container m-4">
        <div className="login-card card ">
          <h4>Log in</h4>
          <p>Please log in using account detail bellow</p>
          <form className="login-form"  onSubmit={(e) => handleSubmit(e)}>
            <CssTextField
              focusColor="#fb2e86"
              name="email"
              label="Email"
              variant="outlined"
              onChange={(event) => handleChange(event)}
              value={userData.email}
              required
              fullWidth
              type={"email"}
              className={"margin-field text-field"}
            />
            <CssTextField
              focusColor="#fb2e86"
              name="password"
              label="Password"
              variant="outlined"
              onChange={(event) => handleChange(event)}
              value={userData.password}
              required
              fullWidth
              type={"password"}
              className="text-field"
            />
            {/* <p className="forgot">Forgot you password?</p> */}
            <Button className="login-button mt-4" variant="contained" type="submit">
              Sign in
            </Button>
          </form>

          <p className="to-signup">
            Don't you have an account?{" "}
            <Link to={"/signup"} className="to-signup">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

//  onSubmit={handleSubmit}