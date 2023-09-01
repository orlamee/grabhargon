import React from "react";
import pic from "../../assets/boy.png";
import tip from "../../assets/pills.png";
import non from "../../assets/boximg.png";
import topic from "../../assets/mildheader.png";
import dig from "../../assets/digit-box.png";
import schoolimg from "../../assets/schbox.png";
import debit from "../../assets/scorebox.png";
import stockimg from "../../assets/stockbox.png";
import box from "../../assets/loanbox.png";
import side from "../../assets/savebox.png";
import bnyimg from "../../assets/apy.png";
import mini from "../../assets/mirco.png";
import facebook from "../../assets/Facebook logo.png";
import linkedin from "../../assets/linkedin logo.png";
import twitter from "../../assets/twitter logo.png";
// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function PopularContent() {
  return (
    <section className=" blog-article  mb-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="my-5">
                  <img src={tip} alt="" className="img-fluid mt-4 " />{" "}
                  <h2 className="mt-3">
                    {" "}
                    Popular Loan Terms and Their Meaning
                  </h2>
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
                      Loan terms make taking out a loan kinda complicated. It's
                      not just with loans. It applies to most service
                      agreements. Studies show that 97% of people agree to
                      service terms without reading them.
                    </h6>
                    <h6 className="my-3">
                      Whether you're looking for a personal loan, a mortgage, an
                      auto loan, or any other type of borrowing, understanding
                      loan terms is critical for making educated decisions and
                      managing your financial commitments properly.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      A lot of risks are attached to neglecting your loan terms;
                      therefore, in this article, we try to simplify it by
                      explaining some of the most popular loan terms.
                    </h6>

                    <h4 className="my-3">1. Principle</h4>

                    <h6 className="my-3 ">
                      The principle is the first amount borrowed from a lender.
                      It is the minimum amount you must repay during the life of
                      the loan.
                    </h6>
                    <h4 className="my-4">2. Interest Rate</h4>

                    <h6 className="mt-3">
                      This is sometimes called the cost of borrowing money. It
                      is a percentage of the loan amount and may differ by
                      lender.
                    </h6>
                    <h6 className="mt-3">
                      At Hargon, you get a 3% interest rate charge. The rate
                      decides how much interest you will pay over the life of
                      the loan.
                    </h6>
                    <h6 className="mt-3 ">
                      Fixed and variable interest rates exist; fixed rates are
                      stable, whereas variable rates can alter over time.
                    </h6>
                    <h4 className="my-4">3. APR (Annual Percentage Rate)</h4>

                    <h6 className="my-3 ">
                      The APR includes the interest rate and any other fees or
                      costs associated with the loan. It provides a more
                      realistic view of the overall cost of borrowing.
                    </h6>
                    <h4 className="my-4">4. Loan Term</h4>
                    <h6 className="my-3">
                      Every loan is set for a period; if not, it becomes a gift.
                      The loan term is the period or grace given to you to repay
                      the loan. It could be short or long-term.
                    </h6>
                    <h6 className="my-3">
                      Shorter loan terms are reduced risks for the consumer.
                      This means less interest rate. On the other hand, longer
                      terms may result in lower monthly payments but higher
                      total interest expenses.
                    </h6>

                    <h4 className="my-3">5. Monthly Payment</h4>

                    <h6 className="my-3">
                      Your monthly payment is the amount you must pay to the
                      lender every month to cover the principal and interest.
                    </h6>

                    <h4 className="my-3"> 6. Amortization</h4>

                    <h6 className="my-3 ">
                      Amortization is the gradual loan payment through regular
                      payments over its term. Initially, a larger portion of
                      your payment will go towards interest, and as the loan
                      progresses, more goes towards reducing the principal.
                    </h6>
                    <h4 className="my-3">7. Prepayment Penalty</h4>

                    <h6 className="my-3">
                      Some loans may come with prepayment penalties, fees you'd
                      have to pay if you repay the loan before the agreed-upon
                      term. Understanding if your loan has this provision and
                      how it works is essential.
                    </h6>

                    <h4 className="my-3">
                    8. Collateral
 
                    </h4>

                    <h6 className="my-3">
                    Collateral is an asset (such as a house or car) that you pledge to a lender as collateral for the loan. Upon completion of the credit process, your lender reserves the right to repossess the collateral if you do not repay the loan.
  
                    </h6>
                    <h6 className="my-3">
                    At Hargon, we like to give you a grace period.
                    </h6>
                    <h4 className="my-4">
                    9. Processing Fee

                    </h4>

                    <h6 className="my-3">
                    A processing fee is a charge to cover the cost of processing the loan. It's usually a percentage of the loan amount.

                    </h6>
                    <h4 className="my-4">
                    10. Grace Period

                    </h4>

                    <h6 className="my-3">
                    A grace period is the time after the due date when you can pay without incurring a late fee. Knowing the grace period's length and associated conditions is important. 
                    </h6>
                    <h4 className="my-4">
                    11. Default
     
                    </h4>

                    <h6 className="my-3">
                    Default occurs when you fail to meet the loan terms, such as missing payments. Defaulting on a loan can have serious consequences, including damage to your credit score and legal action from the lender.


                    </h6>
                    <h4 className="my-4">
                    12. Repayment Schedule

                    </h4>

                    <h6 className="my-3"> 
                    This outlines the timing and amount of each payment throughout the loan term. It helps you plan your budget and ensure timely payments.

                    </h6>
                    <h6 className="my-3">
                    Understanding the loan terms highlighted in this article is essential for making sound financial decisions. When choosing a loan, carefully study the terms and conditions and ask questions.
  
                    </h6>
                    <h6 className="my-3">
                    Being well-informed can assist you in selecting the loan that best matches your financial condition and goals and managing your debt responsibly.

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

export default PopularContent;
