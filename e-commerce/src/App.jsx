import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import SubHeader from "./components/SubHeader";
// import Home from './Components/home/Home'
import { Routes, Route } from "react-router-dom";
// import PrivateRoute from './Components/auth/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route element={<PrivateRoute/>}>
            <Route path={'/Home'} element={<Home/>}/>
          </Route> */}
        {/* <Route path={'/'} element={<Welcome/>}/> */}
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
