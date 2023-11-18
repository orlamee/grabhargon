import React from "react";
import pic from "../../assets/boy.png";
import tip from "../../assets/pillls.svg";
import non from "../../assets/boximg.png";
import topic from "../../assets/guidemid.png";
import dig from "../../assets/digit-box.png";
import schoolimg from "../../assets/schbox.png";
import debit from "../../assets/scorebox.png";
import stockimg from "../../assets/stockbox.png";
import box from "../../assets/loanbox.png";
import side from "../../assets/savebox.png";
import emb from "../../assets/guid3.png";
import fill from "../../assets/guid1.png";
import out from "../../assets/guid2.png";
import fromed from "../../assets/guid4.png";
import bnyimg from "../../assets/apy.png";
import mini from "../../assets/mirco.png";
import facebook from "../../assets/Facebook logo.png";
import linkedin from "../../assets/linkedin logo.png";
import twitter from "../../assets/twitter logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function GuideContent() {
  return (
    <section className=" blog-article  mb-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="my-5">
                  <img src={tip} alt="" className="img-fluid mt-4 w-25" />{" "}
                  <h2 className="mt-3"> Hargon's Guide for Startups</h2>
                </div>
                <div className="d-flex justify-content-start align-content-start">
                  <div className="">
                    <button
                      className="btn next-blog  rounded-pill "
                      type="button"
                    >
                      {" "}
                      Finance
                    </button>
                    <button
                      className="btn next-blog rounded-pill mx-3"
                      type="button"
                    >
                      {" "}
                      Finance{" "}
                    </button>
                  </div>
                  <div className="d-flex align-items-start justify-content-center mx-5">
                    {" "}
                    <img src={pic} alt="" className="img-fluid mx-2" />{" "}
                    <p>
                      {" "}
                      Tochukwu Tabansi{" "}
                      <p>
                        {" "}
                        <span> 10 Feb 2023</span>{" "}
                      </p>
                    </p>{" "}
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="text-center my-3">
                      <img src={topic} alt="" className="img-fluid w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row mt-5">
                <div className="col-md-8 mb-5">
                  <div className="my-5">
                    <h6 className="my-3">
                      Launching a startup comes with its fair share of fun and
                      complexities. Getting your idea off the ground may be
                      daunting, but with a partner like Stackivy, you can reach
                      new heights quickly.
                    </h6>
                    <h6 className="my-3">
                      This guide reviews how you can leverage Stackivy to get
                      the most out of your startup or business.
                    </h6>
                    <h6 className="">
                      At Stackivy, we can be helpful to your startup in two
                      types of situations.
                      <ol>
                        <li>When developing an idea</li>
                        <li>When leveraging tailored products</li>
                      </ol>
                    </h6>

                    <img src={emb} alt="" className="img-fluid my-3" />

                    <h4 className="my-4">#When developing an idea</h4>
                    <h6 className="my-3">
                      Every great product begins with a great idea. At Stackivy,
                      we embody this philosophy, the secret to our success.
                    </h6>
                    <h6 className="my-3">
                      As a startup, you already have an idea. However, if you
                      find turning it into a great product difficult, you can
                      partner with Stackivy to make it possible.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      Here is how
                      <ul>
                        <li>
                          Leverage stackivy's financial portfolio in the form of
                          funding
                        </li>
                        <li>
                          Leverage stackivy's tools and talents to transform
                          your idea
                        </li>
                      </ul>
                    </h6>
                    <h4 className="my-4">#When developing an idea</h4>

                    <h6 className="my-3">
                      Every great product begins with a great idea. At Stackivy,
                      we embody this philosophy, the secret to our success.
                    </h6>
                    <h6 className="my-3">
                      As a startup, you already have an idea. However, if you
                      find turning it into a great product difficult, you can
                      partner with Stackivy to make it possible.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      Here is how
                      <ul>
                        <li>
                          Leverage stackivy's financial portfolio in the form of
                          funding
                        </li>
                        <li>
                          Leverage stackivy's tools and talents to transform
                          your idea
                        </li>
                      </ul>
                    </h6>
                    <h4 className="my-4">
                      #When leveraging Tailored Stackivy products
                    </h4>

                    <h6 className="my-3">
                      In the modern business climate, businesses run with the
                      help of tools, Whether they are accounting tools, human
                      resource tools, or data storage tools
                    </h6>
                    <h6 className="my-3">
                      At stackivy, we have developed so many financial tools
                      that can be useful for several aspects of your startup.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      Some of these tools are: Bookkeeping, payment solutions,
                      wealth management, and access to credit.
                    </h6>
                    
                    <h4 className="my-4">
                      Benefits and limitations of partnering with Stackivy
                    </h4>

                    <h6 className="my-3">
                      There are a few benefits you are entitled to when your
                      startup partners with stackivy.
                      <ol className="my-3">
                        <li>
                          You get access to funding of up to N10,000,000.00
                        </li>
                        <li>
                          You enjoy unfettered daily support from our team
                        </li>
                        <li>Free consultation with experts</li>
                        <li>Training on stackivy tools and products</li>
                      </ol>
                    </h6>
                    <h6 className="my-3">For the limitations:</h6>

                    <h6 className="my-3">
                      While Stackivy strives to provide comprehensive financial
                      solutions, it's important to note that our products have
                      specific limitations.
                    </h6>

                    <h6 className="my-3">
                      {" "}
                      These limitations vary depending on the product and the
                      services it offers. We will communicate any restrictions
                      or limitations associated with each product on our website
                      and during registration.
                    </h6>
                    <h6 className="my-3">
                      {" "}
                      <b>How to get started?</b> <br></br>
                      Getting started applying for assistance on stackivy is
                      easy. Just follow the steps outlined below to get started.
                    </h6>
                    <h6 className="my-3">
                      {" "}
                      <b>Step 1 :</b>

                      On Stackivy's menu dashboard, click on resources.
                      <img src={fill} alt="" className="img-fluid" />
                    </h6>
                    <h6 className="my-3">
                      {" "}
                      <b>Step 2 :</b>

                      You will have some options; click on stackivy for
                      startups, as seen in the image below.
                    </h6>
                    <img src={out} alt="" className="img-fluid my-3" />
                    <h6 className="my-3">
                      {" "}
                      <b>Step 3 :</b>

                      Choose from the two options on the startup's page. Pick
                      the option you wish to leverage stackivy for and get
                      started on the next step.
                      <img src={emb} alt="" className="img-fluid my-3 " />
                    </h6>
                    <h6 className="my-3">
                      {" "}
                      <b>Step 4:</b>
                      
                      You must fill out forms like this for either option. The
                      forms will help us at stackivy determine how best to help
                      your business.
                    </h6>
                    <h6 className="my-3"> It will look something like this.</h6>
                    <img src={fromed} alt="" className="img-fluid my-3" />
                    <h6 className="my-3">
                      {" "}
                      After filling out the forms, a representative from the
                      company will reach out to you to take you through the next
                      phase of the process.
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="blog-sidebar mt-5">
                    <div className="row">
                      <h5>Recent Posts </h5>
                      <div className="d-flex flex-row mt-3">
                        <img
                          src={side}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                          <Link to="/blog/saving">
                            <h6 className="mb-5">
                              Tips for Saving and Investing For beginners
                            </h6>
                          </Link>

                          <span className="blog-date"> May 6, 2023</span>
                        </div>
                      </div>

                      <div className="d-flex flex-row mt-4">
                        <img
                          src={bnyimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                          <Link to="/blog/lending-apps">
                            <h6 className="mb-4">
                              The Best Loan Apps in Nigeria
                            </h6>
                          </Link>

                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-2">
                        <img
                          src={box}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <Link to="/blog/defaulting-loans">
                            <h6 className="mb-4">
                              The Consequences of Defaulting on Loans
                            </h6>
                          </Link>

                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row mt-4">
                        <img
                          src={non}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                          <Link to="/blog/loan-Eligibility">
                            <h6 className="mb-4">
                              Demystifying Loan Eligibility in Nigeria: A
                              Comprehensive Guide
                            </h6>
                          </Link>
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={dig}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                          <Link to="/blog/digital-platforms">
                            <h6 className="mb-4">
                              Digital Investment Platforms in Nigeria
                            </h6>
                          </Link>
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={stockimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <Link to="/blog/investment">
                            <h6 className="my-3">
                              {" "}
                              Diversification of Investment
                            </h6>
                          </Link>

                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={schoolimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <Link to="/blog/student-loans">
                            <h6 className="my-3">
                              {" "}
                              Student Loan Options in Nigeria
                            </h6>
                          </Link>
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={mini}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-2">
                        <img
                          src={debit}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <Link to="/blog/creditscore">
                            <h6 className="my-3"> Credit Score in Nigeria</h6>
                          </Link>
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="text-center my-5">
              <div className="social-icon">
                <div className="flex-row">
                  
                  <button   className="btn nxt-blog  mx-1">
                    {" "}
                    <Icon icon="bx:link" className="mx-1" /> Copy Link
                  </button>{" "}
                  
                 
                  <a href="https://www.facebook.com">
                    <img
                      src={facebook}
                      alt="facebook"
                      className="img-fluid mx-1"
                    />
                  </a>{" "}
                  <a href="https://www.twitter.com">
                    <img src={twitter} alt="twitter" className="mx-1" />
                  </a>{" "}
                  <a href="https://www.linkedin.com">
                    <img src={linkedin} alt="linkedin" className="mx-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuideContent;
