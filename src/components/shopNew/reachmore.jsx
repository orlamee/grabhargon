import React from "react";
import join from "../../assets/pinkman.svg";
import vend from "../../assets/vendors.svg";
import extra from "../../assets/Extravaganza.svg";

function Reachmore() {
  return (
    <section className="reach" style={{ marginTop: "120px" }}>
      <div className="container" >
        <div className="row  justify-content-between ">
          <div className="col-sm-6 " style={{ marginTop: "50px" }}>
            <img
              src={vend}
              alt="checkout "
              className="logo-img mb-5 "
              style={{ width: "180px" }}
            />
            <img src={extra} alt="checkout " className="img-fluid w-100 mb-4" />

            <p className="w-75  ">
              Join us, reach more people, cease more opportunities, and grow
              your business through enhanced sales. With Hargon, you have a
              window to a new cash-friendly market. What are you waiting for?
            </p>
          </div>

          <div className="col-sm-6 ">
            <img src={join} alt="checkout " className=" img-fluid w-100" style={{ marginTop: "-100px" }}  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reachmore;
