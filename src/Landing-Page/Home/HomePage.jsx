import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Trust from "./Trust";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";


function HomePage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Trust/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
    );
}

export default HomePage;
