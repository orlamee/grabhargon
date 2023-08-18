import React from "react";
import middle from "../../assets/received.svg";


function Yourfuture() {
  return (
    <section className="pyday">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
          <img src={middle} alt="instant loan" className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <h2>
                Your
            </h2>
          <h2>
              future pay <span style={{ color: " #ffbd00" }}>Financially secure</span>{" "}
               working for
              <span style={{ color: "#23A323" }}> today</span>
            </h2>
            <p className="w-75 mt-4">
            Get all the benefits of your next pay; make it work for you today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Yourfuture;
