import React from "react";
import Navbar from "../Navbar";
import Pricingtop from "./Pricingtop";
import PricingmainPage from "./PricingmainPage";
import Footer from "../Footer"


function Pricing(){
    return(
        <>
        <Navbar/>
        <Pricingtop/>
        <PricingmainPage/>
        <Footer/>
        </>
    );
};

export default Pricing;