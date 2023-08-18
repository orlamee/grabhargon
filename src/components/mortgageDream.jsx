import React from 'react'
import get from "../assets/destart.svg";
import you from "../assets/mortageyour.svg"
import daydream from "../assets/mortagedrem.svg"
import logo from "../assets/delogo.svg";
import { Link } from "react-router-dom";

function mortgageDream() {
  return (
    <section className='dream pb-0'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
            <img src={get} alt="get started" className="img-fluid float-end" />
          </div>
        </div>
        <div className="mt-9">
        <div className="row justify-content-center">
        <div className="col-sm-6 text-center">
            <img src={you} alt="your" className="img-fluid" />
            <img src={daydream} alt="dream home at your fingertips" className="img-fluid mt-4" />
          </div>

          
        </div>
        </div>
       
        <div className="row justify-content-center mt-4">
          <div className="col-sm-4  text-center">
            <p className=' w-50 mx-auto '> Buy, rent, or build your dream property with effortless financing.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default mortgageDream