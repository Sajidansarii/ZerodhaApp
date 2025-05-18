import React from "react";

function Education(){
    return(
        <div className="container">
            <div className="row" id="Educationtop">
                <div className="col-6">
                    <img src="./public/Education.png.svg" />
                </div>
                <div className="col-6">
                    <h1 className="fs-2 mb-4" style={{fontWeight:"505"}}>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advanced trading. </p>
                    <p className="text-primary mb-5">Varsity 
                    <i class="fa-solid fa-arrow-right"></i>
                    </p>

                    <p style={{fontFamily:"sans-serif"}}>TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries. </p>
                    <p className="text-primary">TradingQ&A 
                    <i class="fa-solid fa-arrow-right"></i> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;