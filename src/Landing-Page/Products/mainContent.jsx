import React from "react";

function Main(){
    return(
        <div className="container">
        <div className="row">
            <div className="col mt-3 ">
                <img  style={{marginLeft:"4rem"}} src="./public/Kite1.png"/>
            </div>
            <div className="col" style={{marginLeft:"6rem"}}>
                <h1 className="fs-2 mb-3" style={{marginTop:"5rem"}}>Kite</h1>
                <p style={{fontSize:"16px"}}>Our ultra-fast flagship trading platform with <br/> streaming market data, advanced charts, an <br/> elegant UI, and more. Enjoy the Kite <br/>experience seamlessly on your Android and <br/> iOS devices.</p>
                <div className="row">
                    <div className="col"><a href="">Try demo</a></div>
                    <div className="col"><a href="">Learn more</a></div>
                </div>
                    <img src="Kite1-1png.svg" className="mt-4" style={{height:"3rem",width:"9rem",marginRight:"4rem"}}/>
                    <img src="Kite1-2png.svg" className="mt-4" style={{height:"3rem"}} />
            </div>
            <div className="row" style={{marginTop:"7rem"}}>
                <div className="col " style={{marginTop:"13rem"}}>
                <h1 className="fs-2" style={{marginLeft:"7rem"}}>Console</h1>
                <p className="mt-4" style={{marginLeft:"7rem",fontSize:"17px"}}>The central dashboard for your Zerodha <br/> account. Gain insights into your trades and <br/> investments with in-depth reports and<br/> visualisations.</p>
                <a href="#" style={{marginLeft:"7rem"}}>Learn more</a>
                </div>
                <div className="col">
                    <img src="./public/Kite2.png" style={{marginLeft:"-6rem"}} />
                </div>
            </div>
            <div className="row">
            <div className="col mt-5">
                <img className="mt-5" style={{marginLeft:"4rem"}} src="./public/Kite3.png"/>
            </div>
            <div className="col" style={{marginLeft:"5rem"}}>
                <h1 className="fs-2 mb-3" style={{marginTop:"10rem"}}>Coin</h1>
                <p style={{fontSize:"18px"}}>Buy direct mutual funds online, commission- <br/>free, delivered directly to your Demat <br/> account. Enjoy the investment experience <br/> on your Android and iOS devices.</p>
                <div className="row">
                    <div className="col"><a href="">Coin</a></div>
                </div>
                    <img src="Kite1-1png.svg" className="mt-4" style={{height:"3rem",width:"9rem",marginRight:"4rem"}}/>
                    <img src="Kite1-2png.svg" className="mt-4" style={{height:"3rem"}} />
            </div>
            </div>
            <div className="row">
            <div className="col" style={{marginTop:"13rem"}}>
                <h1 className="fs-2" style={{marginLeft:"6rem"}}>Kite Connect API</h1>
                <p className="mt-4" style={{marginLeft:"6rem",fontSize:"18px"}}>
                Build powerful trading platforms and <br/> experiences with our super simple <br/> HTTP/JSON APIs. If you are a startup, build <br/> your investment app and showcase it to our <br/> clientbase.
                </p>
                <a href="#" style={{marginLeft:"6rem"}}>Kite Connect</a>
                </div>
                <div className="col" style={{marginTop:"9.4rem"}}>
                    <img src="./public/Kite4.svg" style={{marginLeft:"4rem"}} />
                </div>
            </div>
            <div className="row"> 
            <div className="col mt-5">
                <img className="mt-5" style={{marginLeft:"4rem"}} src="./public/Kite5.png"/>
            </div>
            <div className="col mt-5" style={{marginLeft:"13rem"}}>
                <h1 className="fs-2 mb-4" style={{marginTop:"10rem"}}>Varsity mobile</h1>
                <p style={{fontSize:"18px"}}>An easy to grasp, collection of stock market <br/> lessons with in-depth coverage and <br/> illustrations. Content is broken down into <br/> bite-size cards to help you learn on the go.</p>
                <div className="row">
                </div>
                    <img src="Kite1-1png.svg" className="mt-4" style={{height:"3rem",width:"9rem",marginRight:"4rem"}}/>
                    <img src="Kite1-2png.svg" className="mt-4" style={{height:"3rem"}} />
            </div>
            </div>
            <p className="text-center fs-4" style={{marginTop:"7rem"}}>Want to know more about our technology stack? Check out the <span className="text-primary">Zerodha.tech</span> blog.</p>
            </div>
        </div>
    )
}

export default Main;