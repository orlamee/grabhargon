import React from "react";
import get from "../assets/stud.png";
import all from "../assets/all the.svg";
import pay from "../assets/loforms.png";
import logo from "../assets/dwl-logo.svg";
import { Link } from "react-router-dom";

function Lpofinance() {
  return (
    <section className="lpofinance pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
            <img src={get} alt="get started" className=" float-end" />
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-9">
          <div className="col-sm-5">
            <img
              src={all}
              alt="all the funding you need to complete your order"
              className="img-fluid"
            />
            <p className="text-white mt-4 w-75 ms-3">
              You have done the hard part. You got your client's trust and
              secured the
            </p>

            <button
              className="btn  rounded-pill px-5 py-3 mt-5"
              style={{ background: " #23A323 ", color: "#ffffff" }}
              to=""
            >
              Apply Now
            </button>
          </div>

          <div className="col-sm-6">
            <img src={pay} alt="form" className="img-fluid" style={{marginTop: "-80px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lpofinance;
