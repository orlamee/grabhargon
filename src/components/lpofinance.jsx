import React from "react";
import dlogo from "../assets/hard-logo.png";
// import get from '../assets/getstarted.svg';
import start from "../assets/get logo.png";
import all from "../assets/all the.svg";
import pay from "../assets/gegetright.svg";
import { Link } from "react-router-dom";

function Lpofinance() {
  return (
    <section className="lpofinance pb-0">
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-12">
            <Link to="/">
              <img src={dlogo} alt="logo" className="img-fluid w-25" />
            </Link>
            <img
              src={start}
              alt="get started"
              className="img-fluid  w-25 float-end"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-5">
        <div className="col-sm-5 mt-9">
            <img
              src={all}
              alt="all the funding you need to complete your order"
              className="img-fluid"
            />
             <p className="text-white mt-4 w-75 ms-3">
             You have done the hard part. You got your client's trust and secured the 
          </p>
          
                      <button
                        className="btn  rounded-pill px-5 py-3 mt-5" style={{ background: " #23A323 " , color:"#ffffff" }}
                        to=""
                      >
                        Apply Now
                      </button>
                   
          </div>
         
        
          <div className="col-sm-7">
          <img src={pay} alt="form" className="img-fluid w-100" />
        </div>

        </div>
          
        
      </div>
    </section>
  );
}

export default Lpofinance;
