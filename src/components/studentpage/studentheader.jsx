import React from "react";
import levy from "../../assets/graduate.svg";

function Studentheader() {
  return (
    <section className="pyday">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <h2  className="mb-4">
              Seize the{" "}
              <span style={{ color: "#23A323" }}> opporunity, </span> invest  in
              your future
            </h2>
            <p className="w-75 mt-4">
              Education is a right and one of the surest paths to a bright
              future. So why let financial limitations hold you back when you
              can partner with Hargon and turn your educational aspirations into
              your reality?
            </p>
            <button
              className="btn rounded-pill px-5 py-3 mt-4"
              style={{ background: " #23A323 ", color: "#ffffff" }}
              to=""
            >
              Access student loans now
            </button>
          </div>
          <div className="col-sm-6" style={{ marginTop: "-35px" }}>
            <img src={levy} alt="student" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Studentheader;
