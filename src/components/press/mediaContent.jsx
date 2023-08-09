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
import man from "../../assets/penhead.png";
import tex from "../../assets/peng1.png";
import app from "../../assets/peng2.png";
import pen from "../../assets/peng4.png";
import one from "../../assets/peng5.png";
import fam from "../../assets/peng6.png";
import snap from "../../assets/peng7.png";
import woh from "../../assets/peng8.png";
import deb from "../../assets/peng9.png";
import peg from "../../assets/page1.svg";

function MediaContent() {
  return (
    <section className=" media-top">
      <div className="container">
        <div className="row justify-content-center  ">
          <div className="">
            <div className="row justify-content-center media-bg ">
            <div className="col-sm-6">
            <h2 className="text-white text-center my-5">Press & Media Resources</h2>
          </div>
          <div className="row justify-content-center info media-hero">
          <div className="col-sm-3 text-center">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  News
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Logos & Badges
                </button>
              </li>
            </ul>
          </div>
          </div>
            </div>
          </div>
       
          
          
        
        
          
         
        
          <div className="row justify-content-center ">
         
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <div className="anchor">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row justify-content-center my-2">
                        <div className="col-md-12">
                          <div className="text-center my-5">
                            <img
                              src={man}
                              alt=""
                              className="img-fluid mt-5 w-100"
                            />
                            <div className=" d-flex justify-content-start  my-4">
                              {" "}
                              <p>
                                <span>
                                  {" "}
                                  Tochukwu Tabansi{" "}
                                  <span className="mx-3">
                                    {" "}
                                    2 hours ago
                                  </span>{" "}
                                </span>{" "}
                              </p>
                            </div>

                            <div className="row ">
                              <div className="col-md-11">
                                <div className=" d-flex justify-content-between align-content-start  ">
                                  <h2 className="text-start">
                                    The best loan apps in Nigeria
                                  </h2>
                                  <div className="">
                                    <button
                                      className="btn btn-primary btn-success rounded-pill px-4 py-2 "
                                      to=""
                                    >
                                      Read More
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 my-3 text-start">
                              <button
                                className="btn next-blog  rounded-pill "
                                type="button"
                              >
                                {" "}
                                Press Release
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                  <div className="col-sm-4 mb-3">
                    <div className="">
                      <img src={tex} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                     
                     
                     
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div className="">
                      <img src={deb} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                     
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div className="">
                      <img src={woh} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                    
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-4 mb-3">
                    <div>
                      <img src={app} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                     
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div>
                      <img src={snap} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                     
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div>
                      <img src={fam} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                     
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-4 mb-3">
                    <div >
                      <img src={app} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div>
                      <img src={one} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                     
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div>
                      <img src={pen} alt="pressimg" className="img-fluid w-100" />
                      <p className="mt-4">
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-4">
                      Tips for Saving and Investing For beginners
                    </h3>
                    </div>
                  </div>
                </div>

                      <div className="d-flex  align-content-start justify-content-end ">
                        <p className="mx-3">
                          {" "}
                          {/* <Icon icon="ic:baseline-arrow-back"  className="mx-1"/> Previous */}
                        </p>

                        <img
                          src={peg}
                          alt="page"
                          className="img-fluid"
                          style={{ marginTop: "-5px" }}
                        />

                        <p className="mx-3">
                          {" "}
                          {/* Next <Icon icon="teenyicons:arrow-right-solid" /> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              <div className="container">
                <div className="row justify-content-center mt-5">
                  <div className="col-sm-12">
                    <div className="logo-content mt-5">
                      <p className="mt-5">
                        Hargon is a fully licensed digital lending platform.
                        Hargon offers innovative financial solutions including
                        investments and credit services. Our credit solution
                        allows businesses and individuals to buy anything and
                        pay for it in installments across online and offline
                        Merchants by providing them with instant access to
                        credit at the point of checkout.
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
                            <h5>Flat Inverted Logo</h5>
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
                    <div className="logo-content my-5">
                      <div className="my-5">
                        <h2> Don’ts</h2>
                        <p className="my-2">
                          {" "}
                          Our logo represents our brand and it's important that
                          it's well presented consistently everywhere.
                        </p>
                      </div>
                      <div className="my-5">
                        <h5>No squashing or pulling</h5>
                        <h5> No drop shadows </h5>
                      </div>
                      <div>
                        <h5>
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
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </section>
  );
}

export default MediaContent;
