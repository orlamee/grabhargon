import React from "react";
import three from "../../assets/midleft.svg";
import middle from "../../assets/midone.svg";
import percent from "../../assets/midright.svg";

function Somuch() {
  return (
    <section className="somore">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4 mt-5 " >
            <img src={three} alt="do so much for only 3% interest" className="img-fluid mt-5"  />
            <p className="w-75 mt-5">
            Solve your financial needs today for only a  little interest on your payday loans.
            </p>
          </div>
          <div className="col-sm-4">
            <img src={middle} alt="instant loan" className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <img src={percent} alt="instant loan" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Somuch;
