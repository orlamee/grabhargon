import React from "react";
import market from "../../assets/unravel.svg";

function Benefits() {
  return (
    <section className="benefits">
      <div className="container" style={{ marginTop: "-120px" }}>
        <div className="row  justify-content-center">
          <div className="col-sm-10  text-center">
            <h2 className="my-5">
              Unravel the benefits of a <br></br>

              <span style={{ color: "#23A323" }}> Vibrant Marketplace</span>
            </h2>

            <p className="" >
              With Hargon, there is no shortage of benefits. Whether it is more
              sales, reach, or cash-friendly customers. Come onboard and take
              your time to unravel all the positive impacts of Hargon on your
              business.
            </p>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-sm-10 text-center">
              <img
                src={market}
                alt="marketplace "
                className="img-fluid w-100 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
