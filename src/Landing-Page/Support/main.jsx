import React from "react";

function main(){
    return(
       <div>
        <div className="container" style={{marginLeft:"3.2rem",marginBottom:"20rem",marginTop:"5rem"}}>
                 <div className="row pb-5 pt-5 mt-3 bg-primary">
                    <div className="col-6">
                <p className="mt-4 text-white fs-5 fw-normal" style={{marginLeft:"3rem"}}>Support Portal</p>
                <p className="fs-5 mt-5 text-white" style={{marginLeft:"3rem"}}>Search for an answer or browse help topics to create a 
                    <br/>ticket</p>
                    <input  type="text" placeholder="   Eg:how do i activate F&Q,why is my order getting rejected..." className="py-2" style={{width:"95%",marginLeft:"3rem"}}/><br/><br/>
       
                <a href="#" className="text-white fw-normal"  style={{marginLeft:"2rem"}}>Track account opening</a>
                <a href="#" className="text-white fw-normal" style={{marginLeft:"1rem"}}> Track segment activation</a>
                <a href="#" className="text-white fw-normal" style={{marginLeft:"1rem"}}> Intraday margins</a>
                <a href="#" className="text-white fw-normal" style={{marginLeft:"2rem"}}> Kite user manual</a>
            </div>
            <div className="col-6">
                <a href="#" className="text-white fw-normal fs-5 text-decoration-underline"  style={{marginLeft:"20rem"}}>Track tickets</a>
                <h1 className="fs-5 text-white" style={{marginTop:"8rem",marginLeft:"3rem"}}>Featured</h1>
                <p className="text-white text-decoration-underline" style={{marginLeft:"5rem"}}>1.Offer for sale (OFS) – May 2025</p>
                <p className="text-white text-decoration-underline" style={{marginLeft:"5rem"}}>2.Rights Entitlements listing in May 2025</p>
            </div>
            </div>
            </div>
            
            <div style={{marginTop:"-18rem"}}>
                <h1 className="fs-5 fw-normal" style={{color:"#666666",marginLeft:"7rem"}}>To create a ticket, select a relevant topic</h1>
                <div className="container">
                    <div className="row mt-5" style={{marginLeft:"7rem"}}>
                        <div className="col-4">
                            <h1 className="fs-5 mb-4"><a href="#" className="text-black fw-normal"> Account Opening</a></h1>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Resident individual</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Minor</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Non Resident Indian (NRI)</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Company, Partnership, HUF and LLP</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Glossary</a>
                        </div>
                        <div className="col-4">
                            <h1 className="fs-5 f mb-4"><a href="#" className="text-black fw-normal">Your Zerodha Account</a></h1>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Your Profile</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Account modification</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Client Master Report (CMR) and Depository</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Participant (DP)</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Nomination</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Transfer and conversion of securities</a><br/>

                        </div>
                        <div className="col-4">
                            <h1 className="fs-5 f mb-4"><a href="#" className="text-black fw-normal ">Kite</a></h1>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>IPO</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Trading FAQs</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Charts and orders</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Alerts and Nudges</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>General</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-5" style={{marginLeft:"7rem"}}>
                        <div className="col-4">
                            <h1 className="fs-5 mb-4"><a href="#" className="text-black fw-normal"> Funds</a></h1>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Add money</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Withdraw money</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Add bank accounts</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>eMandates</a><br/>
                        </div>
                        <div className="col-4">
                            <h1 className="fs-5 f mb-4"><a href="#" className="text-black fw-normal">Console</a></h1>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Portfolio</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Corporate actions</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Funds statement</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Reports</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Profile</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Segments</a><br/>

                        </div>
                        <div className="col-4">
                            <h1 className="fs-5 f mb-4"><a href="#" className="text-black fw-normal ">Coin</a></h1>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Understanding mutual funds and Coin</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Coin app</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Coin web</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>Transactions and reports</a><br/>
                            <a href="#" className="fw-normal" style={{fontSize:"14px"}}>National Pension Scheme (NPS)</a><br/>
                        </div>
                    </div>
                </div>

            </div>
    );
}
export default main;