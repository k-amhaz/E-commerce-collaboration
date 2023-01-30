import "../src/css/App.css";
import React from "react";
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
// import PrivateRoute from './Components/auth/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          {/* <Route element={<PrivateRoute/>}>
            <Route path={'/Home'} element={<Home/>}/>
          </Route> */}
          <Route exact path={"/"} element={<Home />} />
          <Route path="/shop" element={<ShopGrid />} />
          <Route path={"/about"} element={<AboutUs />} />
          <Route path={"/contact"} element={<ContactUs />} />
          <Route path={"/details"} element={<Details />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<SignIn />} />
        </Routes>
      <Footer />
    </div>
  );
}


export default App;
