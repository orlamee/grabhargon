import React from "react";
import { Slide } from "react-awesome-reveal";
import maldives from "../../assets/tourladies.svg";

function Unleash() {
  return (
    <section className="leash">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mb-3 mt-4">
            <h2>
              Unleash your{" "}
              <span style={{ color: "#ffbd00" }}> wanderlust </span> with
              <span style={{ color: "#23A323" }}> Hargon's credit</span>{" "}
            </h2>
            <button
              className="btn rounded-pill px-5 py-3 my-4"
              style={{ background: " #23A323 ", color: "#ffffff" }}
              to=""
            >
              Take advantage now
            </button>
          </div>
          <div className="col-sm-7" style={{ marginTop: "-50px" }}>
            <img src={maldives} alt="travel" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-8 text-center">
               <Slide cascade>
               <h2 className="mb-4">
              {" "}
              Discovering  <span style={{ color: "#23A323" }}>
                {" "}
                the world
              </span>{" "}
              through
              <span style={{ color: "#ffbd00" }}> credit </span> with
            </h2>
            </Slide>
           
            <p className="mt-4 w-50 m-auto">
            With Hargon's credit, your travel plans just got easier. You can unlock the thrills of unforgettable experiences through convenient credit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unleash;
