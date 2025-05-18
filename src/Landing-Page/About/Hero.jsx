import React from "react";

function Hero(){
    return(
        <div>
           <h1 className="fs-2 mb-5 text-muted border-bottom" style={{marginLeft:"7rem",marginTop:"9rem",  fontWeight:"600",paddingLeft:"9rem",paddingRight:"9rem",paddingBottom:"7rem"}}>We pioneered the discount broking model in India.<br/>
           Now, we are breaking ground with our technology. </h1>
           <div className="row">
            <div className="col-5 mt-xl-5" style={{marginLeft:"14rem",fontSize:"18px"}}>
                <p>We kick-started operations on the 15th of August, 2010 <br/> with the goal of breaking all barriers that traders and <br/> investors face in India in terms of cost, support, and <br/> technology. We named the company Zerodha, a<br/> combination of Zero and "Rodha", the Sanskrit word for <br/> barrier.<br/><br/>
                Today, our disruptive pricing models and in-house <br/> technology have made us the biggest stock broker in <br/> India.<br/><br/>
                Over 1.6+ crore clients place billions of orders every year <br/> through our powerful ecosystem of investment <br/> platforms, contributing over 15% of all Indian retail <br/> trading volumes.</p>
            </div>
            </div>
            <div className="col-5" style={{marginLeft:"45rem",marginTop:"-26.5rem",fontSize:"18px"}}>
            <p>In addition, we run a number of popular open online <br/> educational and community initiatives to empower retail <br/> traders and investors.<br/><br/>
                <span className="text-primary">Rainmatter</span>, our fintech fund and incubator, has invested <br/> in several fintech startups with the goal of growing the <br/> Indian capital markets.<br/><br/>
                And yet, we are always up to something new every day.<br/> Catch up on the latest updates on our <span className="text-primary">blog</span> or see what <br/> the media is <span className="text-primary">saying about us</span> or learn more about our <br/> business and product <span className="text-primary">philosophies.</span></p>
            </div>
           </div>

    );
}

export default Hero;