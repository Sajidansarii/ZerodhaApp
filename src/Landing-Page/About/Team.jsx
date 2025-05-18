import React from "react";

const Team = () => {
  return (
    <div>
      <h1
        className="text-center"
        style={{ marginTop: "10rem", marginLeft: "10rem", fontSize: "37px" }}
      >
        People
      </h1>

      <div className="row">
        <div className="col-3" style={{ marginLeft: "15rem" }}>
          <img
            src="./public/nithin-kamath.jpg"
            className="rounded-circle"
            style={{ height: "18rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "4rem" }}>
            Nithin Kamath
          </h1>
          <p style={{ marginLeft: "5.5rem" }}>Founder, CEO</p>
        </div>

        <div className="col">
          <p className="mt-5" style={{ fontSize: "17px", marginLeft: "3rem" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the{" "}
            <br /> hurdles he faced during his decade long stint as a trader.
            Today, <br /> Zerodha has changed the landscape of the Indian
            broking industry.
          </p>
          <p style={{ fontSize: "17px", marginLeft: "3rem" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            <br /> (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ fontSize: "17px", marginLeft: "3rem" }}>
            Playing basketball is his zen.
          </p>
          <p style={{ fontSize: "17px", marginLeft: "3rem" }}>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col" style={{ marginLeft: "10rem" }}>
          <img
            src="./public/Nikhil.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "3rem" }}>
            Nikhil Kamath
          </h1>
          <p style={{ marginLeft: "4rem" }}>Co-founder & CFO</p>
          <a href="#" className="text-black" style={{ marginLeft: "7rem" }}>
          </a>
        </div>
        <div className="col">
          <img
            src="./public/kailash.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "3rem" }}>
            Dr. Kailash Nadh
          </h1>
          <p style={{ marginLeft: "8rem" }}>CTO</p>
        </div>
        <div className="col">
          <img
            src="./public/Venu.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "3rem" }}>
            Venu Madhav
          </h1>
          <p style={{ marginLeft: "8rem" }}>COO</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col" style={{ marginLeft: "8rem" }}>
          <img
            src="./public/Hanan.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "4rem" }}>
            Hanan Delvi
          </h1>
          <p style={{ marginLeft: "7rem" }}>CCO</p>
        </div>
        <div className="col">
          <img
            src="./public/Seema.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "4rem" }}>
            Seema Patil
          </h1>
          <p style={{ marginLeft: "7rem" }}>Director</p>
        </div>
        <div className="col">
          <img
            src="./public/Karthik.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "3rem" }}>
            Karthik Rangappa
          </h1>
          <p style={{ marginLeft: "5rem" }}>Chief of Education</p>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ marginLeft: "7rem" }}>
          <img
            src="./public/Austin.jpg"
            className="rounded-circle"
            style={{ height: "16rem" }}
          />
          <h1 className="fs-4 fw-normal mt-3" style={{ marginLeft: "3rem" }}>
            Austin Prakesh
          </h1>
          <p style={{ marginLeft: "4rem" }}>Director Strategy</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
