import React from 'react'
import { Link } from "react-router-dom";

function LogoHero() {
  return (
    <section className="transparency">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center blonde">
            <h2 className=" my-5"> Press & Media Resources </h2>
            <div className="d-flex justify-content-center align-content-start text-white">
             
              <Link to="/press-media-resources">
              <p className=" mx-5">
                  News</p>
                  <hr
                    style={{
                      height: "7px",
                      color: "#ffffff",
                      width: "120px",
                      marginTop: "4px",
                    }}
                  /> 
              </Link>
              <p>
                  Logos and Badges
                 
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoHero;