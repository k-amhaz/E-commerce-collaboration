import React, { useState } from "react";
import "../../css/SignIn.css";
import SubHeader from "../SubHeader";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { auth, provider } from "../../data/DataBase";
import { signInWithEmailAndPassword } from "firebase/auth";

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
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirm: "",
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
    e.preventDefault();

    const { email, password, confirm } = userData;
    if (password === confirm) {
    } else {
      setError("Passwords do not match");
    }
  }
  function AliIsgay() {
    console.log("ali is gay");
  }
  return (
    <>
      <SubHeader loc={"Account"} path="Sign up" />
      <div className="login-container">
        <Card className="login-card">
          <h4>Sign up</h4>
          <p>Create an account using account detail bellow</p>
          <h3 className="error"> {error && error}</h3>
          <form className="login-form" onSubmit={handleSubmit}>
            <CssTextField
              focusColor="#fb2e86"
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
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
              onChange={handleChange}
              value={userData.password}
              required
              fullWidth
              type={"password"}
              className="text-field margin-field"
            />
            <CssTextField
              focusColor="#fb2e86"
              name="confirm"
              label="Confirm Password"
              variant="outlined"
              onChange={handleChange}
              value={userData.confirm}
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
