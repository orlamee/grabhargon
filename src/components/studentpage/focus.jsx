import React from "react";
import sort from "../../assets/focusleft.svg";
import out from "../../assets/focusright.svg";

function Focus() {
  return (
    <section className="focused">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-4">
            <img src={sort} alt="student loan form " className="img-fluid" />
          </div>
          <div className="col-sm-6 mt-5">
          <img src={out} alt="focus on your studies while we sort out your bills" className="img-fluid w-100" />
            <p className="pt-4 w-75">
            Funding your schooling internationally or locally can come easy with Hargon. Get a student loan that takes care of all your school worries. We believe in your dream and we will do everything we can to get you that degree!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Focus;
