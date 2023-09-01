import React from 'react'
import dream from "../../assets/tourtitle.png";
import pack from "../../assets/tourbag.svg";

function Planfor() {
  return (
    <section className="pyday ">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mb-3 mt-9">
          <img src={dream} alt="plan for your dream vacation" className="img-fluid" />
          <p className='w-75 mt-4'>
          Take advantage of our financing options to plan and save towards your next travel experience. You now have the means to make lasting memories with friends and loved ones.
          </p>
           
          </div>
          <div className="col-sm-7">
            <img src={pack} alt="travelbox" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planfor;