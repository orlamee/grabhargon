import React from "react";
import all from "../../assets/oneplace.png";
import watch from "../../assets/marketcar.png";

function Everything() {
  return (
    <section className="reachmore pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <img
              src={all}
              alt="everything you need in one place"
              className="img-fluid w-100"
            />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-sm-6 text-center">
            <p className="w-75 mx-auto">
              Buy your favourite items from all your favourite vendors in one
              place, using Hargon's credit.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <img src={watch} alt="car" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Everything;
