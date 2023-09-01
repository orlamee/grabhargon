import React from "react";
import pack from "../../assets/marketphone.svg";
import buy from "../../assets/buytitle.svg";
import strap from "../../assets/marketmiddle.svg";

function Buynow() {
  return (
    <section className="logistics">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-5">
            <img
              src={buy}
              alt="buy now pay later"
              className="img-fluid w-100"
            />
            <p className="w-50 mt-4">
              Buy your favourite products from your favourite vendors and pay
              later using Hargon’s credit
            </p>
          </div>
          <div className="col-sm-7">
            <img src={pack} alt="credit anywhere" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-12 text-center">
            <img src={strap} alt="cash strapped? No problem" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buynow;
