import React from "react";

function Trust(){
    return(
        <div className="container" id="trusttop">
            <div className="row">
                <div className="col-6 mt-xl-5">
                    <h1 className="fs-2">Trust with confidence</h1>
                    <h2 className="fs-4 mt-xl-5">Customer-first always </h2>
                    <p className="mb-4">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br/> lakh crores of equity investments and contribute to 15% <br/> of daily retail exchange volumes in India.  </p>

                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="mb-4">No gimmicks, spam, "gamification", or annoying push <br/> notifications. High quality apps that you use at your <br/> pace, the way you like. <span className="text-primary">Our philosophies.</span></p>

                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="mb-4">Not just an app, but a whole ecosystem. Our investments <br/> in 30+ fintech startups offer you tailored services <br/> specific to your needs.  </p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className="mb-4">With initiatives like <span className="text-primary">Nudge</span> and <span className="text-primary">Kill Switch,</span> we don't just <br/> facilitate transactions, but actively help you do better <br/> with your money.  </p>
                </div>
                <div className="col-6">
                    <img src="./public/trust.png" style={{width:"100%"}} className="mt-5 me-5"/>
                <div className="text-primary" id="trustexplore">Explore our products
                <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="text-primary" id="trustkite">Try Kite demo
                <i class="fa-solid fa-arrow-right"></i>
                 </div>
                </div>
                 <img src="./public/trust2.png" style={{width:"63%",marginLeft:"20%",marginTop:"1%"}} />
            </div>
        </div>
    );
}

export default Trust;