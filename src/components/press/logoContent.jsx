import React from "react";
import alas from "../../assets/1hard.png";
import alpha from "../../assets/2hard.png";
import athen from "../../assets/3hard.png";
import ciao from "../../assets/4hrad.png";
import card from "../../assets/5hard.png";
import cray from "../../assets/6hard.png";
import zane from "../../assets/lg4.png";
import zept from "../../assets/log5.png";
import zigy from "../../assets/gan1.png";
import zany from "../../assets/gan2.png";


function LogoContent() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12">
            <div className="logo-content mt-5">
              <p className="mt-5">
                Hargon is a fully licensed digital lending platform. Hargon
                offers innovative financial solutions including investments and
                credit services. Our credit solution allows businesses and
                individuals to buy anything and pay for it in installments
                across online and offline Merchants by providing them with
                instant access to credit at the point of checkout.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12 mt-5">
                <div className="row justify-content-center mt-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={alas}
                      alt="new-blog"
                      className="img-fluid w-100 mb-3"
                    
                    />
                     <h5>primary logo</h5>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={alpha}
                      alt="new-blog"
                      className="img-fluid w-100 mb-3"
                    />
                    <h5>
                    Flat Inverted Logo
                    </h5>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={athen}
                      alt="new-blog"
                      className="img-fluid w-100 mb-3"
                    />
                    Flat Logo
                   
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={ciao}
                      alt="new-blog"
                      className="img-fluid w-100 mb-3"
                    />
                    Primary Logo Mark
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={card}
                      alt="new-blog"
                      className="img-fluid w-100 mb-3"
                    />
                    Flat Inverted Logo Mark
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={cray}
                      alt="new-blog"
                      className="img-fluid w-100 mb-3"
                    />
                    Flat Logo Mark
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-content">
              <div className="my-5">
                <h2> Don’ts</h2>
                <p>
                  {" "}
                  Our logo represents our brand and it's important that it's
                  well presented consistently everywhere.
                </p>
              </div>
              <div className="my-5">
                <h5>No squashing or pulling</h5>
                <h5> No drop shadows </h5>
              </div>
              <div>
                <h5 className="my-5">
                  No gradients <br></br>
                  No tracing or recreation{" "}
                </h5>
              </div>
            </div>
            <div className="mt-5">
              <div className="log-fill">
                <div className="row">
                  <div className="col-md-3 ">
                  <img
                    src={zigy}
                    alt="new-logo"
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={zany}
                    alt="new-logo"
                    className="img-fluid mb-3 "
                  />
                </div>
                <div className="col-md-3 ">
                  <img
                    src={zept}
                    alt="new-logo"
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="col-md-3 ">
                  <img
                    src={zane}
                    alt="new-logo"
                    className="img-fluid mb-3"
                  />
                </div>
                </div>
              </div>
              
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoContent;
