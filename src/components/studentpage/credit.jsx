import React from "react";
import box from "../../assets/facilities.svg";

function Credit() {
  return (
    <section className="worry" >
      <div className="container studies">
        <div className=" row justify-content-center my-4">
          <div className="col-sm-8 text-center">
            <img src={box} alt="credit facility for international studies" className="img-fluid" />
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-sm-4  text-center">
              <p className=" w-75  m-auto">
                International studies can be expensive, but you can leverage
                Hargon to demonstrate your financial capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credit;
