import React from 'react'
import get from "../assets/destart.svg";
import pay from "../assets/mircoleft.png";
import logo from "../assets/delogo.svg";
import { Link } from "react-router-dom";

function MicrolendForm() {
  return (
    <section className="lendform pb-0">
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
        <div className="col-sm-6">

          <h2 className='w-75'>
           Take <span  style={{  color: "#ffbd00" }}>small loans</span>, Make <span style={{  color: "#23A323" }}>big moves</span>
            
          </h2>
        
          <p className=" my-4 w-75 ms-3">
          Unlock new possibilities and take your business to the next level with our credit facility.
          </p>

          <button
              className="btn  rounded-pill px-5 py-3 mt-5"
              style={{ background: " #23A323 ", color: "#ffffff" }}
              to=""
            >
              Start Now
            </button>
        </div>

        <div className="col-sm-6" style={{ marginTop: "-70px" }}>
          <img src={pay} alt="form" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default MicrolendForm;