import React from "react";
import dublin from "../../assets/PHONEtour.png";
import travellers from "../../assets/tourprofile.svg";

function creditfor() {
  return (
    <section className="logistics">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mb-3 mt-9">
            <h2>
              Credit for all
              <span style={{ color: "#23A323" }}> travel logistics</span>{" "}
            </h2>
            <p className="mt-4 w-75">
              Travel is more than just the journey. It is the hotels,
              experiences, and transport. Get a full tourism credit with Hargon.
            </p>
            <img src={travellers} alt="travel" className="img-fluid" />
          </div>
          <div className="col-sm-7">
            <img src={dublin} alt="phone" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default creditfor;
