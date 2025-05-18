import React from "react";

function Pricing(){
    return(
        <div className="container mt-5">
            <div className="row" id="pricingtop">
                <div className="col-6">
                    <h1 className="fs-1 mb-4">Unbeatable pricing</h1>
                    <p className="fs-6">We pioneered the concept of discount broking and price <br/> transparency in India. Flat fees and no hidden charges. </p>
                    <p className="text-primary">See pricing
                <i class="fa-solid fa-arrow-right"></i>
                    </p>
                </div>
                <div className="col-6">
                    <img src="./public/zero.png.svg" style={{width:"23%",marginLeft:"-8rem",marginTop:"2rem"}}/>
                    <p style={{fontSize:"11px",marginTop:"-2.8rem",marginLeft:"-1.8rem"}} className="text-muted">Free account<br/>
                    opening</p>

                    <img src="./public/Zero.png.svg" style={{width:"23%",marginLeft:"4rem",marginTop:"-8rem"}}/>
                    <p className="text-muted" style={{fontSize:"11px",marginLeft:"10.7rem",marginTop:"-5rem"}}>Free equity delivery <br/>and direct mutual funds</p>

                    <img src="./public/twenty.png.svg" style={{width:"23%",marginLeft:"20rem",marginTop:"-7rem"}} />
                    <p style={{fontSize:"11px",marginLeft:"28rem",marginTop:"-5rem"}} className="text-muted">Intraday and <br/> F&O</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;