import React from "react";
import sort from "../../assets/free.svg";
import cute from "../../assets/happyface.svg";

function Worryfree() {
  return (
    <section className="reachmore">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 my-4">
            <img src={sort} alt="study worry free" className="img-fluid" />
            <p className="ms-4 ps-5 w-75">
              Partner with Hargon today for all school bills and create the
              right environment for worry-free studies.
            </p>
          </div>
          <div className="col-sm-6">
            <img src={cute} alt="students" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Worryfree;
