import React from "react";

function PricingmainPage(){
    return(
        <div className="container" style={{marginTop:"8rem"}}>
            <div className="row">
                <div className="col-3" style={{height:"12rem",marginLeft:"5rem"}}>
                    <img src="./public/zero.png.svg" />
                    <h1 className="fs-3" >Free equity delivery</h1>
                    <p className="mt-3" style={{marginLeft:"-2.1rem"}}>All equity delivery investments (NSE, BSE),
                        <br/> <span style={{marginLeft:"1rem"}}>are absolutely free — ₹ 0 brokerage.</span></p>
                </div>
                <div className="col-3" style={{height:"12rem", marginLeft:"2.7rem"}}>
                    <img  src="./public/twenty.png.svg"/>
                    <h1 className="fs-3" style={{marginRight:"-4rem"}} >Intraday and F&O trades</h1>
                    <p className="mt-3" style={{marginLeft:"1rem",marginRight:"-3rem"}}>Flat ₹ 20 or 0.03% (whichever is lower)<br/> per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-3" style={{height:"12rem", marginLeft:"2.7rem"}}>
                    <img  src="./public/zero.png.svg"/>
                    <h1 className="fs-3" style={{marginLeft:"3rem"}} >Free direct MF</h1>
                    <p className="mt-3" style={{marginLeft:"2rem",marginRight:"-2rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <div>
            <h1 className="fs-5 text-center" style={{marginTop:"13rem",marginLeft:"2rem"}}>
                  <span className="text-primary">Calculate your costs upfront</span> using our brokerage calculator</h1>
            </div>
            <h1 className="fs-3 mt-5" style={{marginLeft:"3rem"}}>Charges explained</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="fs-5" style={{marginTop:"3rem",marginLeft:"3rem"}}>Securities/Commodities transaction tax</h1>
                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>Tax by the government when transacting on the exchanges. Charged as  above on <br/> both buy  and sell sides  when trading equity delivery. Charged only on selling side <br/> when trading intraday or on F&O.</p>
                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br/> Important to keep a tab.</p>
                        <h1  className="fs-5" style={{marginTop:"1rem",marginLeft:"3rem"}}>Transaction/Turnover Charges</h1>

                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per <br/> crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new <br/> group X w.e.f 01.12.2017)</p>

                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore<br/> of gross turnover.</p>

                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>BSE has revised transaction charges for group A, B and other non exclusive scrips <br/> (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover <br/> on flat rate basis w.e.f. December 1, 2022.</p>

                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore <br/> of gross turnover.</p>

                        <h1  className="fs-5" style={{marginTop:"1rem",marginLeft:"3rem"}}>Call & trade</h1>
                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha <br/> including auto square off orders.</p>

                        <h1 className="fs-5" style={{marginTop:"1rem",marginLeft:"3rem"}}>Stamp charges</h1>

                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-9rem"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for<br/> transacting  in instruments on the stock exchanges and depositories.</p>

                        <h1 className="fs-5" style={{marginTop:"1rem",marginLeft:"3rem"}}>NRI brokerage charges</h1>
                        <ul style={{marginLeft:"2.2rem",marginTop:"1.1rem",fontSize:"13px",marginRight:"-10rem"}}>
                            <li>₹100 per order for futures and options.</li>
                            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        </ul>
                        <h1 className="fs-5" style={{marginTop:"2rem",marginLeft:"3rem"}}>Account with debit balance</h1>
                        <p style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-8rem"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed <br/> order instead of ₹20 per executed order.</p>
                        <h1 className="fs-5" style={{marginTop:"2rem",marginLeft:"3rem",marginRight:"-9rem"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h1>
                        <ul style={{fontSize:"13px",marginLeft:"2.2rem",marginRight:"-8rem"}}>
                            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST 
                                <br/> of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>
                        <h1 className="fs-5" style={{marginTop:"2rem",marginLeft:"3rem"}}>Margin Trading Facility (MTF)</h1>
                        <ul style={{fontSize:"13px",marginLeft:"2.2rem",marginRight:"-8rem"}}>
                            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest <br/> is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                        </ul>
                    </div>



                    <div className="col-6">
                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"3rem"}}>GST</h1>
                        <p className="mt-4" style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + <br/> SEBI charges + transaction charges)</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>SEBI Charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India<br/> for regulating the markets.</p>


                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>DP (Depository participant) charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on <br/> the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 <br/> per transaction on the CDSL fee.</p>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 <br/> on the CDSL fee.</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>Pledging charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>₹30 + GST per pledge request per ISIN.</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>AMC (Account maintenance charges)</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.<br/> To learn more about BSDA, <span className="text-primary">Click here</span></p>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).<br/> To learn more about AMC, <span className="text-primary">Click here</span></p>

                        <h1 className="fs-5" style={{marginLeft:"3.3rem",marginTop:"2rem"}}>Corporate action order charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders
                            <br/> placed through Console.</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>Off-market transfer charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>₹25 per transaction.</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>Physical CMR request</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent <br/> requests.</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>Payment gateway charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>₹9 + GST (Not levied on transfers done via UPI)</p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>Delayed Payment Charges</h1>
                        <p style={{fontSize:"13px",marginLeft:"3.3rem",marginRight:"-8rem"}}>Interest is levied at 18% a year or 0.05% per day on the debit balance 
                            <br/>in your trading account. <span className="text-primary">Learn more.</span></p>

                        <h1 className="fs-5" style={{marginLeft:"3rem",marginTop:"2rem"}}>Trading using 3-in-1 account with block functionality</h1>
                        <p style={{fontSize:"13px",marginLeft:"3rem",marginRight:"-8rem"}}>
                            <ul>
                                <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                                <li>Intraday Brokerage: 0.05% per executed order.</li>
                            </ul>
                        </p>
                        <h1 className="fs-5" style={{marginTop:"7rem",marginLeft:"-32rem"}}>Disclaimer</h1>
                        <p className="mt-3" style={{marginLeft:"-32rem",fontSize:"13px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>

                        <h1 className="fs-3 mt-5" style={{marginLeft:"-32rem"}}>Charges for account opening</h1>
                    </div>

                    <table className="mt-5" style={{marginLeft:"4rem"}}>
                        <thead>
                            <tr>
                                <th>Type of account </th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Online account</td>
                                <td><span class="free-tag">free</span></td>
                            </tr>
                            <tr>
                                <td>Offline account</td>
                                <td> <span class="free-tag">free</span></td>
                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>&#8377;500</td>
                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td>&#8377;500</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h1 className="fs-3 mt-5" style={{marginLeft:"8rem"}}>Charges for optional value added services</h1>

                    <table className="mt-4" style={{marginLeft:"4rem"}}>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Billing Frquency</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 2000 | Historical: 2000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PricingmainPage;

