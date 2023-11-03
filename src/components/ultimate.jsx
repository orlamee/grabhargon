import React from "react";
import get from "../assets/ultimatetitle.svg";
import way from "../assets/ultphone.svg";

export default function Ultimate() {
  return (
    <section className="ultmate">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
          <img src={get} alt="creditgalore" className="img-fluid w-100 " />
          <p className="text-white w-75 mt-9">
          Our savings and fixed deposit options give you the chance to accumulate and grow your wealth at zero risk
          </p>
          </div>
          <div className="col-sm-6">
          <img src={way} alt="creditgalore" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
