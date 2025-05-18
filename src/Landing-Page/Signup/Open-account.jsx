import React from "react";

function OpenAccount() {
    return(
        <div className="container p-5" style={{marginTop:"8rem",marginLeft:"3rem",backgroundColor:"rgb(250 250 251)"}}>
            <h1 className="fs-3" style={{marginLeft:"14rem"}}>Steps to open a demat account with Zerodha</h1>
            <div className="row">
                <div className="col-6">
                    <img style={{marginLeft:"8rem",marginTop:"3rem"}} src="./public/steps-acop.svg" />
                </div>
                <div className="col-6" style={{marginTop:"7rem"}}>
                    <p className="fs-5"><span className="border rounded-circle p-1">01</span> Enter the requested details</p><hr/>
                    <p className="fs-5"><span className="border rounded-circle p-1">02</span> Complete e-sign & verification</p><hr/>
                    <p className="fs-5"><span className="border rounded-circle p-1">03</span> Start investing!</p>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;