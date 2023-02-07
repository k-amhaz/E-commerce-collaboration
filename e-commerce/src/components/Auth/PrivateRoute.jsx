import { onAuthStateChanged } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../../context/MainContext";
import { auth } from "../../data/DataBase";

export default function PrivateRoute() {

    const isLoggedIn = auth.onAuthStateChanged((authUser) => {
        return authUser !== null ? true : false
    })

    return ( 
        <>
            {isLoggedIn ? <Outlet/> : <Navigate to='/signup' replace='true'/>}
        </>
     );
}