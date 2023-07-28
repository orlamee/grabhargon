import React from "react";
import credit from "../../assets/shoptopic.svg";
import phone from "../../assets/midsav.png";
import merchant from "../../assets/bynsell.png";
import check from "../../assets/checkout.png";

function Shophero() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="row justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <div>
                  <img
                    src={credit}
                    alt="powering commerce with credit"
                    className="img-fluid w-100 mb-5 "
                  />
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-main rounded-pill px-5 py-3"
                      to="/grabhargon"
                    >
                      Experience it
                    </button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-8">
                  <img
                    src={phone}
                    alt="phone-img"
                    className="img-fluid w-100 mt-5"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row d-flex justify-content-between">
              <div className="col-sm-6 mb-3 mt-5">
                <img
                  src={merchant}
                  alt="Buy and sell "
                  className="img-fluid w-100"
                />
                <p className="w-75 my-3" style={{ marginLeft: "48px" }}>
                  Buying and selling just got better! Hargon's shopping platform
                  enhances barter between vendors and customers, giving each
                  party the ultimate trading experience.
                </p>
              </div>
              <div className="col-sm-6">
                <img
                  src={check}
                  alt="checkout "
                  className="img-fluid w-100 mx-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shophero;
