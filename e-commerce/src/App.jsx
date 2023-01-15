import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import SignUp from "./components/Auth/SignUp";
// import Home from './Components/home/Home'
import { Routes, Route } from "react-router-dom";
// import PrivateRoute from './Components/auth/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
