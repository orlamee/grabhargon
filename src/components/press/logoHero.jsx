import React from "react";
import topline from "../../assets/line.jpg";
import { Link } from "react-router-dom";

function LogoHero() {
  return (
    <section className="transparency">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center blonde">
            <h2 className=" my-5"> Press & Media Resources </h2>
            <div className="d-flex justify-content-center align-content-start text-white">
              <div>
                <Link to="/press-media">
                  <p className=" mx-5">News</p>
                </Link>
              </div>

              <div>
                <p>Logos and Badges</p>
                <img src={topline} alt="logo" className="img-fluid w-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoHero;
