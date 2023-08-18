import React from "react";
import sort from "../../assets/focusleft.svg";
import out from "../../assets/focusright.svg";

function Focus() {
  return (
    <section className="focused">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-4">
            <img src={sort} alt="student loan form " className="img-fluid" />
          </div>
          <div className="col-sm-6 mt-5">
          <img src={out} alt="focus on your studies while we sort out your bills" className="img-fluid" />
            <p className="mt-4 w-75">
              Get all the benefits of your next pay make it work for you today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Focus;
