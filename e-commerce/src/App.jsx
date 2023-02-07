import "../src/css/App.css";
import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import SubHeader from "./components/SubHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ShopGrid from './components/Shop/ShopGrid';
import Details from "./components/Shop/Details";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { auth } from "./data/DataBase";
import { Context } from "./context/MainContext";
import Error from "./components/Error";
import Checkout from "./components/Checkout";
// import PrivateRoute from './Components/auth/PrivateRoute'

function App() {

  const {reducer} = useContext(Context)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('the user is', authUser)

      if(authUser) {
        reducer({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        reducer({
          type: "SET_USER",
          user: null,
        })
      }
    })
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     console.log(user)
  //     // ...
  //   } else {
  //     console.log("user is not logged in")
  //     // User is signed out
  //     // ...
  //   }
  // });
  
  }, [])

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path={'/home'} element={<Home/>}/>
          </Route>
          <Route exact path={"/"} element={<SignUp />} /> 
          <Route path="/shop" element={<ShopGrid />} />
          <Route path={"/about"} element={<AboutUs />} />
          <Route path={"/contact"} element={<ContactUs />} />
          <Route path={"/details"} element={<Details />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/checkout"} element={<Checkout/>}></Route>
          <Route path={"*"} element={<Error />}/>
        </Routes>
      <Footer />
    </div>
  );
}


export default App;
