import React from "react";

function Footer (){
    return(
        <div className="container  mt-5" style={{marginLeft:"8rem"}}><hr style={{width:"75rem",marginLeft:"-8.5rem"}}/>
            <div className="row mt-4">
                <div className="col-3">
                    <a href="/">
                    <img src="./public/logo.png.svg"  style={{width:"64%"}} />
                    </a>
                    <p className="text-muted" style={{fontSize:"13px",marginTop:"20px"}}> &copy;2010 - 2025, Zerodha Broking Ltd.<br/> All rights reserved.</p>
                    <div className="border-bottom fs-5 text-muted">                          
                    <i class="fa-brands fa-x-twitter me-4 mb-3"></i>
                    <i class="fa-brands fa-square-facebook me-4 "></i>
                    <i class="fa-brands fa-instagram me-4"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="fs-5 text-muted mt-2">
                    <i class="fa-brands fa-youtube me-4"></i>
                    <i class="fa-brands fa-whatsapp me-4"></i>
                    <i class="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div className="col-3">
                    <h1 className="fs-4">Company</h1>
                        <a href="#"  className="link-secondary">About</a><br/>
                        <a href="#"  className="link-secondary">Products</a><br/>
                        <a href="#"  className="link-secondary">Pricing</a><br/>
                        <a href="#"  className="link-secondary">Referral programme</a><br/>
                        <a href="#"  className="link-secondary">Careers</a><br/>
                        <a href="#"  className="link-secondary">Zerodha.tech</a><br/>
                        <a href="#"  className="link-secondary">Open source</a><br/>
                        <a href="#"  className="link-secondary">Press & media</a><br/>
                        <a href="#"  className="link-secondary">Zerodha Cares (CSR)</a>
                </div>
                <div className="col-3">
                    <h1 className="fs-4">Support</h1>
                        <a href="#" className="link-secondary">About</a><br/>
                        <a href="#"  className="link-secondary">Products</a><br/>
                        <a href="#"  className="link-secondary">Pricing</a><br/>
                        <a href="#"  className="link-secondary">Referral programme</a><br/>
                        <a href="#"  className="link-secondary">Careers</a><br/>
                        <a href="#"  className="link-secondary">Zerodha.tech</a><br/>
                        <a href="#"  className="link-secondary">Open source</a><br/>
                        <a href="#"  className="link-secondary">Press & media</a><br/>
                        <a href="#"  className="link-secondary">Zerodha Cares (CSR)</a>
                    </div>
                <div className="col-3">
                    <h1 className="fs-4">Account</h1>
                        <a href="#" className="link-secondary">Open an account</a><br/>
                        <a href="#"  className="link-secondary">Fund transfer</a><br/>
                    </div>
                </div>

                <p className="text-muted mt-5" style={{fontSize:"11px"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity <br/> Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence <br/> Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span className="text-primary">complaints@zerodha.com,</span> for DP related to <span className="text-primary">dp@zerodha.com.</span> <br/> Please ensure you carefully read the Risk Disclosure  Document as prescribed by SEBI | ICF </p>

                <p className="text-muted" style={{fontSize:"11px"}}>Procedure to file a complaint on <span className="text-primary">SEBI SCORES:</span> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective <br/> Communication, Speedy  redressal of the grievances </p>

                <p className="text-primary" style={{fontSize:"11px"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism </p>

                <p className="text-muted" style={{fontSize:"11px"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing. </p>

                <p className="text-muted" style={{fontSize:"11px"}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with <br/> your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account <br/> statement issued by NSDL/CDSL every month. </p>

                <p className="text-muted" style={{fontSize:"11px"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email <br/> at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.),<br/> you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account<br/> number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give <br/> stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <span className="text-primary">create a ticket here.</span> </p>
            </div>
    );
}

export default Footer;