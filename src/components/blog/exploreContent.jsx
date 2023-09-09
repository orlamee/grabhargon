import React from "react";
import pic from "../../assets/boy.png";
import tip from "../../assets/blog-pills.png";
import non from "../../assets/boximg.png";
import topic from "../../assets/expoheader.png";
import active from "../../assets/expo1.png";
import lux from "../../assets/expo2.png";
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

function ExploreContent() {
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
                    Exploring Various Types of Savings Challenges
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
                      We live in a world where financial stability and
                      preparedness are increasingly paramount. Economies are
                      turning on their own, and saving challenges might be the
                      tool we never thought we needed.
                    </h6>
                    <h6 className="my-3">
                      But it's not just about the economy. Trying to build a
                      saving habit? Saving challenges are great tools to
                      cultivate that habit. It helps you build accountability
                      and motivates you to reach those financial goals.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      In this article, we will review some of the trendy saving
                      challenges.
                    </h6>
                    <img src={active} alt="" className="img-fluid w-100" />
                    <h4 className="my-4">
                      1. The 52-Week Challenge: Building Momentum
                    </h4>
                    <h6 className="my-3">
                      This is one of the most popular and straightforward saving
                      challenges available. The approach allows you to save an
                      incremental amount corresponding to the week's number each
                      week. For example, you might save N1,000 the first week,
                      N2,000 the second, N3,000 the third, and so on.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      You'll have accumulated N1,378,000 by the end of the year.
                      Each week, this challenge provides a sense of
                      accomplishment and gradual improvement.
                    </h6>
                    <h4 className="my-4">
                      2. The No-Spend Challenge: Embracing Frugality
                    </h4>

                    <h6 className="my-3">
                      The No-Spend Challenge is extreme frugality. It pushes you
                      to cut back on unnecessary spending for a set period. The
                      challenge encourages people to think about their spending
                      patterns and helps them identify areas they can save money
                      on.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      It can be difficult, but it will help you rebalance your
                      relationship with money and make more deliberate spending
                      decisions.
                    </h6>
                    <h4 className="my-4">
                      3. The Round-Up Challenge: Harnessing Spare Change
                    </h4>

                    <h6 className="my-3">
                      This is a more recent saving challenge, enabled by modern
                      technology, which has spawned similar innovative
                      challenges. It is made possible by features in bank apps.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      It works by rounding up all of your purchases to the
                      nearest dollar. The feature transfers the change to a
                      linked savings account automatically. This strategy of
                      micro-saving collects modest amounts over time,
                      effortlessly boosting your savings without directly
                      impacting your regular life.
                    </h6>
                    <h4 className="my-4">4. Focused Saving Challenge</h4>
                    <h6 className="my-3">
                      This money-saving challenge is focused on a specific
                      financial goal. It could be for an emergency fund, a trip,
                      or a home down payment.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      People who participate in this challenge frequently pledge
                      to save a set amount each month until they achieve their
                      goal. This challenge instils discipline, hunger, and
                      purpose in your savings journey by setting a specific
                      goal.
                    </h6>

                    <h4 className="my-4">
                      5. The Cash Envelope Challenge: Tangible Budgeting
                    </h4>

                    <h6 className="my-3">
                      The Cash Envelope Challenge is a classic savings challenge
                      that harkens back to the days of practical budgeting.
                      Participants in this challenge will create separate
                      envelopes for several spending categories, such as food or
                      entertainment.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      When an envelope is empty, spending in that area is paused
                      until the following budgeting month. This strategy
                      encourages deliberate spending and discourages
                      extravagance. Instead of using envelopes, you may now
                      accomplish this challenge using various accounts.
                    </h6>
                    <img src={lux} alt="" className="img-fluid w-100" />
                    <h4 className="my-4">
                      {" "}
                      6. The Digital Detox Challenge: Redirecting Screen Time
                    </h4>

                    <h6 className="my-3">
                      This Savings Challenge is a two-for-one deal. It gives
                      savings a new twist by linking it with less screen time.
                      As a result, a predetermined sum is placed into a savings
                      account for every hour of screen time saved.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      This challenge promotes better time management while
                      monetarily rewarding you for reclaiming your moments from
                      digital distractions.
                    </h6>
                    <h4 className="my-4"> Conclusion</h4>

                    <h6 className="my-3">
                      Saving is a good wealth-building strategy and is your step
                      to becoming financially free. Saving challenges are very
                      good strategies to help you get started.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      However, saving challenges are more than just financial
                      strategies; they are transformative experiences that
                      cultivate fiscal discipline, mindfulness, and a sense of
                      achievement.
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

export default ExploreContent;
