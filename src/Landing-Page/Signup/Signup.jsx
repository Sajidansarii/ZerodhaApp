import React from "react";
import Navbar from "../Navbar";
import TopSection from "./Top-section"; 
import DemateAccount from "./demateAccount";
import Openacount from "./Open-account";
import Price from "./Price-section";
import ExploreSection from "./Explore-section";
import Faqs from "./Faqs";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
 
function SignupSection(){
    return(
        <>
        <Navbar/>
        <TopSection/>
        <DemateAccount/>
        <Openacount/>
        <Price/>
        <ExploreSection/>
        <OpenAccount/>
        <Footer/>
        </>
    );
}

export default SignupSection;