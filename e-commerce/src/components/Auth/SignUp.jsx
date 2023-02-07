import React, { useState } from "react";
import "../../css/SignIn.css";
import SubHeader from "../SubHeader";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { auth } from "../../data/DataBase";
import { createUserWithEmailAndPassword, } from "firebase/auth";

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
export default function SignUp() {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [id]: [value],
      };
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault()
  
      const email = e.target.email.value
      const password = e.target.password.value
      createUserWithEmailAndPassword(auth, email,password)
        .then((cred) => {
          console.log(cred.user)
        })
        .then(window.location.assign('/login'))
        .catch(err => window.alert(err)) 
  }

  return (
    <>
      <SubHeader loc={"Account"} path="Sign up" />
      <div className="login-container">
        <Card className="login-card m-4">
          <h4>Sign up</h4>
          <p>Create an account using account detail bellow</p>
          {error && <h3 className="error">{error}</h3>}
          <form className="signup-form" onSubmit={(event) => handleSubmit(event)}>
            <CssTextField
              focusColor="#fb2e86"
              id="email"
              label="Email"
              variant="outlined"
              value={userData.email}
              onChange={(event) => handleChange(event)}
              name='email'
              required
              fullWidth
              type={"email"}
              className={"margin-field text-field"}
            />
            <CssTextField
              focusColor="#fb2e86"
              id="password"
              label="Password"
              variant="outlined"
              value={userData.password}
              onChange={(event) => handleChange(event)}
              name='password'
              required
              fullWidth
              type={"password"}
              className="text-field margin-field"
            />
            <CssTextField
              focusColor="#fb2e86"
              id="confirm"
              label="Confirm Password"
              variant="outlined"
              value={userData.confirm}
              onChange={(event) => handleChange(event)}
              required
              fullWidth
              type={"password"} 
              className="text-field"
            />
            <p className="forgot">Forgot you password?</p>
            <Button className="login-button" variant="contained" type="submit">
              Sign up
            </Button>
          </form>

          <p className="to-signup">
            Have an account?{" "}
            <Link to={"/login"} className="to-signup">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </>
  );
}

// onSubmit={(e) => handleSubmit(e)}