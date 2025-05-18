import React from "react";

function TopSection(){
    return(
        <div>
            <div className="text-center mt-5" style={{marginLeft:"3rem"}}>
            <h1 className="fs-1 mb-4" style={{marginTop:"10rem"}}>Open a free demat and trading account online</h1>
            <p style={{fontSize:"19px"}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className="container mt-5">
                <div className="row" style={{marginLeft:"20%"}}>
                    <div className="col-6">
                        <img style={{width:"30rem",marginLeft:"-5rem"}} src="./public/account_open_Signup.svg" alt="OpenAccount Logo" />
                    </div>
                    <div className="col-6">
                        <h1 className="fs-2 mt-5">Signup now</h1>
                        <p style={{color:"#9b9b9b"}}>Or track your existing application</p>
                        <img src="./public/" alt="" />
                        <input type="text" placeholder="  Enter your mobile number" className="w-75" style={{height:"3rem"}}/><br/>
                        <button className="bg-primary mt-4 w-50 text-white">Get OPT</button>
                        <p className="mt-3" style={{fontSize:"11px"}}>By proceeding, you agree to the Zerodha <span className="text-primary">terms</span> & <span className="text-primary">privacy policy</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopSection;