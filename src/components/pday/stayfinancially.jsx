import React from "react";
import levy from "../../assets/leverage.png";

function Stayfinancially() {
  return (
    <section className="pyday">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2 className="my-5">
              Stay <span style={{ color: "#23A323" }}>Financially secure</span>{" "}
              by bridging the gap between{" "}
              <span style={{ color: "#ffbd00" }}>Paydays.</span>
            </h2>
            <button
              className="btn rounded-pill px-5 py-3 mt-4"
              style={{ background: " #23A323 ", color: "#ffffff" }}
              to=""
            >
              Get Payday loans
            </button>
          </div>
          <div className="col-sm-6">
            <img src={levy} alt="woman" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stayfinancially;
