import React from "react";
import sort from "../../assets/free.svg";
import cute from "../../assets/happyface.svg";

function Worryfree() {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-5 mb-5">
            <img src={sort} alt="study worry free" className="img-fluid mb-2" />
            <p className="ms-4 ps-5 w-50">
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
