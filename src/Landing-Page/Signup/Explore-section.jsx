import React from "react";

function ExploreSection() {
    return(
        <div className="container">
            <h1 className="fs-2 text-center" style={{marginTop:"7rem"}}>Explore different account types</h1>
            <div className="row" style={{marginLeft:"2rem",marginTop:"3rem"}}>
                <div className="col-4 border pt-4" style={{width:"20rem",marginLeft:"2rem"}}>
                    <img style={{marginLeft:"-1.4rem"}} src="./public/acop-individual.svg" alt="" />
                    <h1 className="fs-5" style={{marginTop:"-1.5rem",marginLeft:"1rem"}}>Individual Account</h1>
                    <p style={{marginLeft:"1rem",marginTop:"1.4rem"}}>Invest in equity, mutual funds and <br/> derivatives</p>
                </div>
                <div className="col-4 border pt-4" style={{width:"20rem",marginLeft:"3rem"}}>
                    <img style={{marginLeft:"-1.4rem"}} src="./public/acop-huf.svg" alt=""/>
                    <h1 className="fs-5" style={{marginTop:"-1.5rem",marginLeft:"1rem"}}>HUF Account</h1>
                    <p style={{marginLeft:"1rem",marginTop:"1.4rem"}}>Make tax-efficient investments for <br/> your family</p>
                </div>
                <div className="col-4 border pt-4" style={{width:"20rem",marginLeft:"3rem"}}>
                     <img style={{marginLeft:"-1.4rem"}} src="./public/acop-nri.svg" alt=""/>
                    <h1 className="fs-5" style={{marginTop:"-1.5rem",marginLeft:"1rem"}}>NRI Account</h1>
                    <p style={{marginLeft:"1rem",marginTop:"1.4rem"}}>Invest in equity, mutual funds, <br/> debentures, and more</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4 border pt-4" style={{width:"20rem",marginLeft:"4.8rem"}}>
                    <img style={{marginLeft:"-1.4rem"}} src="./public/acop-nri.svg" alt=""/>
                    <h1 className="fs-5" style={{marginTop:"-1.5rem",marginLeft:"1rem"}}>Individual Account</h1>
                    <p style={{marginLeft:"1rem",marginTop:"1.4rem"}}>
                        Teach your little ones about money <br/> &amp; invest for their future with them
                    </p>
                </div>
                <div className="col-4 border pt-4" style={{width:"20rem",marginLeft:"3rem"}}>
                    <img style={{marginLeft:"-1.4rem"}} src="./public/acop-nri.svg" alt=""/>
                    <h1 className="fs-5" style={{marginTop:"-1.5rem",marginLeft:"1rem"}}>Individual Account</h1>
                    <p style={{marginLeft:"1rem",marginTop:"1.4rem"}}>
                        Manage your business surplus and investments easily
                    </p>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default ExploreSection;