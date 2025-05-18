import React from "react";

function demateAccount(){
    return(
        <div className="container">
            <h1 className="fs-2 text-center" style={{marginTop:"8rem"}}>Investment options with Zerodha demat account</h1>
            <div className="row" style={{marginLeft:"7rem",marginTop:"5rem"}}>
                <div className="col-6">
                    <img  src="./public/stocks-acop.svg" />  
                    <h1 style={{marginLeft:"8rem",marginTop:"-5rem"}} className="fs-2 fw-normal">Stocks</h1>
                    <p style={{marginLeft:"8rem"}}>Invest in all exchange-listed <br/> securities</p>
                </div>
                <div className="col-6">
                    <img  src="./public/mf-acop.svg" />  
                    <h1 style={{marginLeft:"9rem",marginTop:"-5rem"}} className="fs-2 fw-normal">Mutual funds</h1>
                    <p style={{marginLeft:"9rem"}}>Invest in commission-free direct<br/>  mutual funds</p>
                </div> 
            </div>
            <div className="row" style={{marginLeft:"7rem",marginTop:"5rem"}}>
                <div className="col-6">
                    <img  src="./public/ipo-acop.svg" />  
                    <h1 style={{marginLeft:"9rem",marginTop:"-5rem"}} className="fs-2 fw-normal">IPO</h1>
                    <p style={{marginLeft:"9rem"}}>Apply to the latest IPOs instantly <br/> via UPI</p>
                </div>
                <div className="col-6">
                     <img  src="./public/fo-acop.svg" />  
                    <h1 style={{marginLeft:"9rem",marginTop:"-5rem"}} className="fs-3 fw-normal">Futures & options</h1>
                    <p style={{marginLeft:"9rem"}}>Hedge and mitigate market risk <br/> through simplified F&O trading</p>
                </div>
                <button className="w-25 bg-primary text-white mt-5" style={{marginLeft:"20rem",fontSize:"20px"}}>Explore Investments</button>
                </div>   
        </div>
    );
}

export default demateAccount;