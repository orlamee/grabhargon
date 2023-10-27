import React from "react";
import { Link } from "react-router-dom";
import "../styles/comingsoon.css";

function ComingSoonDropDown() {
  return (
    <div className="dropdown-menu company-menu sol-menu">
      <div className="row">
        <div className="col-sm-12">
          <li className="d-flex flex-row mb-4">
            {/* <img src={cc} alt="About" className="img-fluid me-3" /> */}
            <h6 className="mt-2">Partnership</h6>
          </li>
          <Link to="/auction" className="d-flex flex-row mb-4 auction">
            {/* <img src={al} alt="Career" className="img-fluid me-3" /> */}
            {/* <h6 className="mt-2">Auction</h6> */}

            <h6 className="mt-2">Auction</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonDropDown;
