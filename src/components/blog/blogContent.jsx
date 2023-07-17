import React from "react";
import header from "../../assets/penhead.png";
import tex from "../../assets/peng1.png";
import app from "../../assets/peng2.png";
import pend from "../../assets/peng3.png";
import pen from "../../assets/peng4.png";
import one from "../../assets/peng5.png";
import fam from "../../assets/peng6.png";
import snap from "../../assets/peng7.png";
import woh from "../../assets/peng8.png";
import deb from "../../assets/peng9.png";
import peg from "../../assets/page1.svg";
import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";

function BlogContent() {
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

                    <Link to="/blog/maximizing-loan">
                      <h3 className="my-3">
                        Maximizing Your Loan: How to Effectively Utilize Your
                        Funds
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
                    <Link to="/blog/lending-apps">
                      <h3 className="my-3">Top Lending Apps in Nigeria</h3>
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
                      src={pend}
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

                    <Link to="/blog/saving">
                      <h3 className="my-3">
                        {" "}
                        Tips for Saving and Investing For beginners{" "}
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
                <div className="row  justify-content-center mt-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={app}
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

                    <h3 className="my-3">
                      Tips for Saving and Investing For beginners
                    </h3>

                    <div className="">
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
                        Personal Loan
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={snap}
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

                    <h3 className="my-3"> Requirement For Loan Application</h3>

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
                    <h3 className="my-3">
                      {" "}
                      Loan Eligibility Criteria in Nigeria
                    </h3>
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
                <div className="row  justify-content-center my-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={fam}
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
                    <h3 className="my-3">Save as an Investment</h3>
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
                        Term Loan{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={tex}
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
                    <h3 className="my-3">
                      {" "}
                      Consequences of Defaulting on Loans
                    </h3>
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
                  <div className="col-md-4 mb-3">
                    <img
                      src={pen}
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

                    <h3 className="my-3"> Student Loan Options in Nigeria</h3>

                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Student Loan
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

            <div className="d-flex  align-content-start justify-content-end ">
              <p className="mx-3">
                {" "}
                {/* <Icon icon="ic:baseline-arrow-back" className="mx-1" /> Previous */}
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
    </section>
  );
}

export default BlogContent;
