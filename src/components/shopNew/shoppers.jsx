import React from "react";
import bot from "../../assets/shoppers.png";
import deals from "../../assets/manleft.png";

function Shoppers() {
  return (
    <section className="shopers">
      <div className="container">
        <div className="row  justify-content-between">
          <div className="col-sm-6">
            <img src={deals} alt="man-img" className="img-fluid w-100" />
          </div>

          <div className="col-sm-5" >
            <img src={bot} alt="for-shoppers" className="mb-3" style={{ width: "170px" }} />
            <h2 className="mt-2">
              <span style={{ color: "#23A323" }}>Best Deals</span> on <br></br>
              the market
            </h2>
            <p className="w-75 mt-4">
              {" "}
              Find everything you need and get the best deals on the market, all
              on credit. From fashion to home essentials, and business
              purchases, Hargon is truly your one-stop shopping delight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shoppers;
