import React from "react";
function Hero(){
    return(
        <div>
            <img className="Heroimg" src="./public/Hero.png"/>
            <h1 className="HeroHead">Invest in everything</h1>
            <p className="HeroPara">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
            <button className="heroBtn ">Sign up for free</button>
        </div>
    );
}

export default Hero;