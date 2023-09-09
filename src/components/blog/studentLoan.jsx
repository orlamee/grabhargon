import React from "react";
import facebook from "../../assets/Facebook logo.png";
import linkedin from "../../assets/linkedin logo.png";
import twitter from "../../assets/twitter logo.png";
import tip from "../../assets/blog-pills.png";
import dig from "../../assets/digit-box.png";
import debit from "../../assets/scorebox.png";
import stockimg from "../../assets/stockbox.png";
import mini from "../../assets/mirco.png";
import loanimg from "../../assets/maximize.png";
import non from "../../assets/boximg.png";
import bnyimg from "../../assets/apy.png";
import box from "../../assets/loanbox.png";
import side from "../../assets/savebox.png";
import pic from "../../assets/boy.png";
import topic from "../../assets/schheader.png";
import criteria from "../../assets/sch1.png";
import  steps from "../../assets/sch2.png";

import { Link } from "react-router-dom";

function StudentLoan() {
  return (
    <section className=" blog-article  mb-3">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="my-5">
                  <img src={tip} alt="" className="img-fluid mt-4 " />{" "}
                  <h2 className="mt-5">
                    Student Loan Options in Nigeria - A Guide
                  </h2>
                </div>
                <div className="d-flex justify-content-start align-content-start">
                  <div className="">
                    <button
                      className="btn next-blog  rounded-pill "
                      type="button"
                    >
                      Finance{" "}
                    </button>
                    <button
                      className="btn next-blog rounded-pill mx-3"
                      type="button"
                    >
                      Student Loans{" "}
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
                      <img src={topic} alt="" className="img-fluid mt-4 " />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row mt-5">
                <div className="col-md-8">
                  <div className="my-5">
                    <h6 className="my-3">
                      Education is as old as humanity and is one of the safest
                      investments known to mankind. It was true in the past, and
                      it is especially true today. However, with the rising cost
                      of education, it can be difficult to make that investment.
                      That is where the student loan option comes in.
                    </h6>
                    <h6 className="my-3">
                      Getting a student loan can be a challenging or daunting
                      process. However, this guide will have every informational
                      resource on simplifying the process. By the end, you
                      should know the types of loans available and how to apply
                      for them.
                    </h6>
                    <h4 className="my-4">
                      {" "}
                      Eligibility Criteria for Student Loans
                    </h4>
                    <h6 className="my-3">
                      You must meet specific conditions to be eligible for
                      student loans in Nigeria. Students must be Nigerian
                      citizens enrolled in a recognized educational institution
                      in general.
                    </h6>
                    <h6 className="my-3 mb-5">
                      Some loans may have extra criteria, such as a minimum GPA
                      or enrollment in a specified academic program. Reviewing
                      the eligibility criteria for each loan choice to ensure
                      you satisfy the requirements before applying is critical.
                    </h6>
                    <img src={criteria} alt="" className="img-fluid my-3" />{" "}
                    <h4 className="my-3">
                      Types of Student Loans Options Available in Nigeria
                    </h4>
                    <h6 className="my-3 mb-5">
                      Students can take advantage of several student loan
                      options in Nigeria to finance their education. These loans
                      are typically categorized into two.
                      <ol>
                        <li> Federal Government Student Loan Scheme</li>
                        <li> Private loan options</li>
                      </ol>
                    </h6>
                    <h4 className="my-4">
                      Federal Government Student Loan Scheme
                    </h4>
                    <h6 className="my-3">
                      On June 12, Nigeria's president signed an interest-free
                      student loan bill into law for Nigerians willing to
                      acquire tertiary education.
                    </h6>
                    <h6 className="my-3">
                      The bill, formally known as the "Access to Higher
                      Education Act", creates an education loan fund which
                      assists Nigerians in financing their higher education. The
                      students who take out these loans are required to pay them
                      in instalments two years after they complete their
                      National youth service corp (NYSC) program.
                    </h6>
                    <h6 className="my-3">
                      The loan is designed for students
                      <ol>
                        <li>
                          Whose personal or family income is below N500,000. It
                          is also{" "}
                        </li>
                        <li>
                          {" "}
                          Who are applying to a government-owned tertiary
                          institution. This applies to public universities,
                          polytechnics, colleges of education and vocational
                          schools established by the government.
                        </li>
                      </ol>
                    </h6>
                    <h6 className="my-3 mb-5">
                      If you meet the criteria, you can try out this loan
                      application. It will require some documentation, such as
                      guarantors and proof of income, but those should be less
                      complicated.
                    </h6>
                    <h4 className="my-4"> Private Loan Options</h4>
                    <h6 className="my-3">
                      You can also get loans from private institutions such as
                      family, friends, and lending platforms like Hargon.
                    </h6>
                    <h6 className="my-3">
                      Getting a loan from the family will most likely be
                      interest-free many times, but it can be quite rare and
                      difficult to come by, especially because of the long-term
                      nature of it.
                    </h6>
                    <h6 className="my-3">
                      With lending platforms, you get interest-based student
                      loans that you can start paying back either while or when
                      you finish schooling. With Hargon, you get such loans, but
                      we give you fixed, low-interest student loans that do not
                      fluctuate with the market.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      Typically to get loans from lending platforms or banks,
                      you will provide some documentation, such as your credit
                      score of you or your family, collateral, and guarantors.
                    </h6>

                    <img src={ steps} alt="" className="img-fluid my-3" />{" "}
                    <h4 className="my-4">
                      {" "}
                      Application Process for Student Loans
                    </h4>
                    <h6 className="my-3">
                      In Nigeria, the application procedure for student loans
                      typically consists of several steps. To begin, gather all
                      required documentation, which may include evidence of
                      admission, identity documents, academic credentials, and,
                      if necessary, the information of a guarantor.
                    </h6>
                    <h6 className="my-3">
                      Once you have all of the required paperwork, you may begin
                      the loan application process. Depending on the loan
                      provider, the application process differs. You may need to
                      visit recognized offices to get application forms for
                      government-backed loans.
                    </h6>
                    <h6 className="my-3">
                      You can apply for private loans online or through the
                      bank's website. Completing the application forms is
                      critical, providing accurate information and supporting
                      documentation. After submitting your application, it will
                      undergo a review process, during which the loan provider
                      will assess your eligibility and financial need. This
                      review process may take time, so applying well before your
                      education expenses is important.
                    </h6>
                    <h6 className="my-3 mb-5">
                      Once your loan application is approved, you will receive a
                      loan offer outlining the terms and conditions.
                    </h6>
                    <h4 className="my-4">
                      {" "}
                      How to Get Student Loans on Hargon
                    </h4>
                    <h6 className="my-3">
                      Finding the best student loan option can be stressful, so
                      we brought the best to you. Begin by examining your
                      financial situation and establishing how much money you
                      will need to meet your school fees. Consider our loan
                      option's interest rates, repayment terms, and eligibility
                      requirements.
                    </h6>
                    <h6 className="my-3">
                      Consider how our loan connects with your long-term
                      financial goals.
                    </h6>
                    <h6 className="my-3 mb-5">
                      It's also critical to seek help from financial
                      professionals or guidance counsellors. You can get this on
                      Ardilla. They will provide you with tailored aid based on
                      your situation.
                    </h6>
                    <h4 className="my-4"> Conclusion</h4>
                    <h6 className="my-3">
                      Financing your education in Nigeria can be difficult, but
                      you can make smart financial decisions with the correct
                      knowledge and resources.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      Remember to carefully research the benefits and cons of
                      each loan option and your financial necessity before
                      making a selection.
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="blog-sidebar mt-5">
                      <h5>Recent Posts </h5>

                      <div className="d-flex flex-row mt-3">
                        <img
                          src={loanimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                          <Link to="/blog/maximizing-loan">
                            <h6 className="mb-5">
                              Maximizing Your Loan: How to Effectively Utilize
                              Your Funds
                            </h6>
                          </Link>

                          <span className="blog-date"> May 6, 2023</span>
                        </div>
                      </div>
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

                          <span className="blog-date"> May 6, 2023</span>
                        </div>
                      </div>

                      <div className="d-flex flex-row mt-4">
                        <img
                          src={debit}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="">
                        <Link to="/blog/creditscore">
                      <h6 className="my-3"> Credit Score in Nigeria</h6>
                    </Link>

                          <span className="blog-date"> May 6, 2023</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={stockimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="">
                        <Link to="/blog/investment">
                      <h6 className="my-3"> Diversification of Investment</h6>
                    </Link>

                          <span className="blog-date"> May 6, 2023</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={mini}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="">
                          <h6 className="mb-5">
                            Best Microfinance Investment in Nigeria
                          </h6>

                          <span className="blog-date"> May 6, 2023</span>
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
                  <button className="btn nxt-blog  mx-1">
                    {" "}
                    {/* <Icon icon="bx:link" className="mx-1" /> Copy Link */}
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

export default StudentLoan;
