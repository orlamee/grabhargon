import React from 'react'
import day from "../../assets/marketcircle.svg";
import deach from "../../assets/moretitle.svg";

function More() {
  return (
    <section className="logistics">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mt-9">
        <img src={deach} alt="more reach business customers" className="img-fluid" />
        <p className='w-75 mt-5'>
        Reach more customers and grow your business through Hargon’s marketplace. Your customers buy on credit; you get a direct deposit, and your business does better.
        </p>
         
        </div>
        <div className="col-sm-6">
          <img src={day} alt="hargon marketplace" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default More;