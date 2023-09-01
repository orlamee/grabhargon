import React from "react";
import pack from "../../assets/luxurysneak.svg";
import bot from "../../assets/backbtn.svg";

function MarkHero() {
  return (
    <section className="reachmore pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h2 className="mb-3">
              <span style={{ color: "#23A323" }}> Buying and selling </span>{" "}
              amplified with
              <span style={{ color: "#ffbd00" }}> credit </span>
            </h2>
            <img src={bot} alt="luxury" className="img-fluid mt-4" />
          </div>
          <div className="col-sm-7">
            <img src={pack} alt="luxury" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarkHero;
