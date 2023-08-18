import React from 'react'
import get from "../assets/destart.svg";
import all from "../assets/pofdown.svg";
import pay from "../assets/pofs.svg";
import btn from "../assets/pofleft.svg";
import logo from "../assets/delogo.svg";
import { Link } from "react-router-dom";

function PoForms() {
  return (
    <section className=" busloan pb-0">
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
              alt="show your financial prowess and stand out "
              className="img-fluid"
            />
            <p className="my-5 w-75 ms-3">
            Articulate your financial capability, Stand out with the proof
            </p>
            <img
              src={btn}
              alt="make it happen"
              className="img-fluid"
            />
           
          </div>

          <div className="col-sm-6">
            <img src={pay} alt="man-img" className="img-fluid"  style={{  marginTop:"-75px" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PoForms