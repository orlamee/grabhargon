import React from "react";
import { Link } from "react-router-dom";

function PressHero() {
  return (
    <section className="transparency">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center blonde">
            <h2 className=" my-5"> Press & Media Resources </h2>
            <div className="d-flex justify-content-center align-content-start text-white">
              <p className=" mx-4"> News</p>
              <Link to="/press/logos">
                <p>
                  Logos and Badges
                  <hr
                    style={{
                      height: "3px",
                      background: "white",
                      width: "120px",
                      marginTop: "7px",
                    }}
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressHero;