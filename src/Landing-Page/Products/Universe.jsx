import React from "react";

function universe(){
    return(
        <div className="container">
            <h1 className="fs-2 text-center mt-5">The Zerodha Universe</h1>
            <p className="mt-4 text-center" style={{fontSize:"19px"}}>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row mt-5">
                <div className="col-4">
                    <img className="w-50" style={{marginLeft:"7rem"}} src="./public/zerodhafundhouse.png" />
                    <p className="mt-3 text-center text-light-grey" style={{marginRight:"-3rem"}}>Our asset management venture<br/>
                    that is creating simple and transparent index<br/>
                    funds to help you save for your goals.</p>
                </div>
                <div className="col-4">
                <img className="w-50" style={{marginLeft:"8rem"}} src="./public/sensibull-logo.svg" />
                    <p className="mt-3 text-center" style={{marginRight:"-6rem"}}><br/>Options trading platform that lets you<br/>
                    create strategies, analyze positions, and examine<br/>
                    data points like open interest, fII/DII,and more</p>
                </div>
                <div className="col-4">
                <img className="w-50" style={{marginLeft:"8.3rem",marginTop:"-0.5rem"}} src="./public/tijori.svg" />
                    <p className="mt-3 text-center" style={{fontSize:"15px",marginLeft:"6rem"}}>Investment research platform<br/>
                    that offers details insights on stocks,<br/>
                    sectors, supply chains,and more.</p>
                </div>

                {/* Second row */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4">
                        <img className="w-50" style={{marginLeft:"8rem"}} src="./public/streak-logo.png" />
                    <p className="mt-3 text-center" style={{marginRight:"-6rem"}}>Systematic trading platform<br/>
                    that allows you to create and backtest<br/>
                    strategies without coding.</p>
                        </div>
                        <div className="col-4 mt-3">
                        <img className="w-50" style={{marginLeft:"8rem"}} src="./public/smallcase-logo.png" />
                    <p className="mt-3 text-center" style={{marginRight:"-5rem"}}>
                        Thematic investing platform<br/>
                        that hepls you invest in diversified<br/>
                        baskets of stocks on EFTs.
                    </p>
                        </div>
                        <div className="col-4">
                        <img className="w-50" style={{marginLeft:"8rem"}} src="./public/ditto-logo.png" />
                    <p className="mt-3 text-center" style={{marginRight:"-5rem"}}>
                        Personalized advice on life<br/>
                        and health insurance. No spam<br/>
                        and no mis-selling.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mt-5 w-25 bg-primary text-white fs-5" style={{marginLeft:"28rem"}}>Sign up for free</button>
        </div>
    );
}

export default universe;