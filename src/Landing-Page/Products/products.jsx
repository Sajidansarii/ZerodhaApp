import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Top from "./Top";
import Main from "./mainContent";
import Universe from "./universe";

function Product(){
    return(
        <>
        <Navbar/>
        <Top/>
        <Main/>
        <Universe/>
        <Footer/>
        </>
    );
}

export default Product;