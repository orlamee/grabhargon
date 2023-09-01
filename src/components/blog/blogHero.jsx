import React from 'react'
import header from "../../assets/penhead.png";
import app from "../../assets/guideside.png";
import one from "../../assets/deb-mid.png";
import woh from "../../assets/expo-mid.png";
import deb from "../../assets/mild1.png";
import lock from "../../assets/unlock frame.png";
import into from "../../assets/turnframe.png";
import fact from "../../assets/myhtsframe.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function BlogHero() {
  return (
    <section className="anchor">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-center my-4">
              <div className="col-md-12">
                <div className="text-center my-5">
                  <h6 className="mt-5">The Blog </h6>
                  <h5> Check out our blogs for informations</h5>
                  <img src={header} alt="" className="img-fluid mt-5 w-100" />
                  <div className=" d-flex justify-content-start  my-4">
                    {" "}
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="row ">
                    <div className="col-md-11">
                      <div className=" d-flex justify-content-between align-content-start my-3  ">
                        <h2 className="text-start">
                          The best loan apps in Nigeria
                        </h2>
                        <div className="">
                          <Link to="/blog/lending-apps">
                            <button
                              className="btn btn-primary btn-success rounded-pill px-4 py-2 "
                              to=""
                            >
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6  text-start">
                    <button
                      className="btn next-blog  rounded-pill  "
                      type="button"
                    >
                      {" "}
                      Personal Loans
                    </button>
                    <button
                      className="btn next-blog  rounded-pill mx-2 "
                      type="button"
                    >
                      {" "}
                      Business Loans
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="row  justify-content-center mt-3">
                  <div className="col-md-4 mb-3">
                    <img
                      src={one}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>

                    <Link to="/blog/steps">
                      <h3 className="my-3">
                      8 Steps To Get Out of Debt

                      </h3>
                    </Link>

                    <div className="">
                      <button
                        className="btn  rounded-pill  next-blog"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type=""
                      >
                        {" "}
                        Personal Loan{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={woh}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <Link to="/blog/explore">
                      <h3 className="my-3">Exploring Various Types of Savings Challenges
 </h3>
                    </Link>

                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Terms Loan
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <img
                      src={app}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>

                    <Link to="/blog/guides">
                      <h3 className="my-3">
                        {" "}
                        Guide for Startups

                      </h3>
                    </Link>

                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Personal Loan
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                </div>
               
               
                <div className="row  justify-content-center my-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={lock}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <Link to="/blog/unlocking-financial">
                      <h3 className="my-3"> Unlocking Financial Success in Nigeria
</h3>
                    </Link>

                    <div className="col-sm">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                       Investment
                      </button>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <img
                      src={into}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>

                    <Link to="/blog/turn-savings">
                      <h3 className="my-3"> Turn Savings Into An Investment</h3>
                    </Link>

                    

                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Savings
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                       Investment
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={fact}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>

                    <Link to="/blog/creditmyths">
                      <h3 className="my-3"> Credit Myths in Nigeria Exposed</h3>
                    </Link>
                   

                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Term Loan 
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={deb}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <Link to="/blog/popular-loan">
                      <h3 className="my-3">
                        {" "}
                        Popular Loan Terms and Their Meaning

                      </h3>
                    </Link>

                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        Loan Eligibility
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                

                 
                </div>
              </div>
            </div>

            <div className="d-flex  align-content-start justify-content-end  mt-5">
                <Link to="/blogs">
                <p className="mx-3">
                {" "}
                <Icon icon="ic:baseline-arrow-back" className="mx-1" /> Previous
              </p>
                </Link>
              

              {/* <img
                src={peg}
                alt="page"
                className="img-fluid"
                style={{ marginTop: "-5px" }}
              /> */}

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;