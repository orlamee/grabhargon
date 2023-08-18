import React from "react";
import short from "../../assets/payphone.svg";
import our from "../../assets/payloans.svg";

function Payloan() {
  return (
    <section className="pyloan">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-7">
            <img src={short} alt="short on cash" className="img-fluid mb-3" />
          </div>
          <div className="col-sm-5 mt-5">
            <img src={our} alt="payday loans" className="img-fluid"  />
            <p className="w-75 mt-4">
            Our payday loans offer a convenient way to tackle your immediate cash needs with minimal requirements and fast approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payloan;
