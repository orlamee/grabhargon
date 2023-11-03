import React from "react";
import { Link } from "react-router-dom";
import "../styles/comingsoon.css";
import p from "../../src/assets/partnership.svg";
import a from "../../src/assets/auction.svg";

function ComingSoonDropDown() {
  return (
    <div className="dropdown-menu company-menu sol-menu">
      <div className="row">
        <div className="col-sm-12">
          <li className="d-flex flex-row mb-4">
            <img src={p} alt="About" className="img-fluid me-3" />
            <h6 className="mt-2">Partnership</h6>
          </li>
          <Link to="/auction" className="d-flex flex-row mb-4 auction">
            <img src={a} alt="Career" className="img-fluid me-3" />

            <h6 className="mt-2">Auction</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonDropDown;
