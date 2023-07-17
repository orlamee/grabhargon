import React from "react";
import topline from "../../assets/line.jpg";
import { Link } from "react-router-dom";

function PressHero() {
  return (
    <section className="transparency">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center blonde">
            <h2 className=" my-5"> Press & Media Resources </h2>
            <div className="d-flex justify-content-center align-content-start text-white">
            <div>
                
                  <p className=" mx-5">News</p>
                  <img src={topline} alt="logo" className="img-fluid w-50" />
              
              </div>

              <div>
                <Link to="/press/logos">
                <p>Logos and Badges</p>
                </Link>
                
                
              </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressHero;