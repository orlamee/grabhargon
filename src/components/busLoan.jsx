import React from 'react'
import get from "../assets/dlogo.png";
import all from "../assets/busleft.svg";
import pay from "../assets/busright.svg";
import cling from "../assets/busdown.svg";
import logo from "../assets/delogo.svg";
import { Link } from "react-router-dom";

function BusLoan() {
  return (
    <section className="busloan pb-0">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Link to="/">
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
          <img src={get} alt="get started" className="img-fluid float-end" />
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-9">
        <div className="col-sm-6" style={{ marginBottom: "-50px" }}>
          <img
            src={all}
            alt="Harness the Power of Credit for Your Business"
            className="img-fluid"
          />
          <p className=" my-4 w-50 ms-3">
          Unlock new possibilities and take your business to the next level with our credit facility.
          </p>

          <img
            src={cling}
            alt=" Fill the form below to get credit"
            className="img-fluid"
          />
        </div>

        <div className="col-sm-6" style={{ marginTop: "-70px" }}>
          <img src={pay} alt="form" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default BusLoan;