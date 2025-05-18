import React from "react";

function PriceSection(){
    return(
        <div className="container" style={{marginTop:"6rem"}}>
            <div className="row">
                <div className="col-6" style={{marginTop:"5rem"}} >
                    <img className="w-75" style={{marginLeft:"5rem"}} src="./public/acop-benefits.svg" />
                </div>
                <div className="col-6">
                    <h1 className="fs-5 fw-normal">Unbeatable pricing</h1>
                    <p className="mt-3">Zero charges for equity & mutual fund investments. Flat ₹20 fees for <br/> intraday and F&O trades.</p>

                    <h1 className="fs-5 mt-5 fw-normal">Best investing experience</h1>
                    <p className="mt-3">Simple and intuitive trading platform with an easy-to-understand user <br/> interface.</p>

                    
                    <h1 className="fs-5 mt-5 fw-normal">No spam or gimmicks</h1>
                    <p className="mt-3">Committed to transparency — no gimmicks, spam, "gamification", or <br/> intrusive push notifications.

</p>

                    
                    <h1 className="fs-5 mt-5 fw-normal">The Zerodha universe</h1>
                    <p className="mt-3">More than just an app — gain free access to the entire ecosystem of <br/> our partner products.</p>
                </div>
            </div>
        </div>
    );
}

export default PriceSection;