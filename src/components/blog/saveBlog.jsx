import React from "react";
import pic from "../../assets/boy.png";
import tip from "../../assets/blog-pills.png";
import topic from "../../assets/savetop.png";
import schoolimg from "../../assets/schbox.png";
import debit from "../../assets/scorebox.png";
import stockimg from "../../assets/stockbox.png";
import savemid from "../../assets/savepic2.png";
import non from "../../assets/boximg.png";
import box from "../../assets/loanbox.png";
import invest from "../../assets/savepic3.png";
import rite from "../../assets/eligibility.png";
import dig from "../../assets/digit-box.png";
import bnyimg from "../../assets/apy.png";
import mini from "../../assets/mirco.png";
import facebook from "../../assets/Facebook logo.png";
import linkedin from "../../assets/linkedin logo.png";
import twitter from "../../assets/twitter logo.png";
import loanimg from "../../assets/maximize.png";
import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";

function SaveBlog() {
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

                    {" "}   Tips for Saving and Investing For beginners
                 
                  </h2>
                </div>
                <div className="d-flex justify-content-start align-content-start">
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
                      Before you begin any journey, it is important to have a
                      clear goal or destination; otherwise, you will find
                      yourself on a most interesting journey. The same principle
                      applies to your saving and investing journey.
                    </h6>
                    <h6 className="my-3">
                      Financial goals are different for everyone. They vary from
                      person to person, but generally, they include objectives
                      such as retirement, paying off debt, starting a business,
                      buying a home, and possible education.
                    </h6>
                    <h6 className="my-3">
                      When starting your saving or investing journey, you must
                      be clear about your goal. This attitude will help you
                      easily navigate the plans, budgets, and possible
                      challenges.
                    </h6>
                    <h6 className="my-3">
                      In this article, we will discuss some useful tips that
                      will help you save or invest like a pro.
                    </h6>

                    <h4 className="my-4">
                      Tips to make the most of your saving strategies
                    </h4>
                    <h6 className="my-3">
                      Making the most of your savings starts with simplifying
                      the process. Simplifying your savings process helps keep
                      you on the right path. Today there are various tools and
                      techniques you can use to do that.
                    </h6>
                    <h4 className="my-4">1. Automate your savings</h4>

                    <h6 className="my-3">
                      Technology has helped simplify most parts of our everyday
                      lives. Finance is no exception. One of the most notable
                      tools in finance is automated savings or transfers.
                    </h6>
                    <h6 className="my-3">
                      The good news is you can do this on Hargon and other
                      banking apps. It automatically transfers money from your
                      regular account to your savings account.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      Autosave ensures a portion of your income is always set
                      aside, and it helps make the entire process very
                      convenient for you. Gone are the days of forgetting to
                      transfer or being too busy to transfer allocated money to
                      your savings platform.
                    </h6>
                    <h4 className="my-4">2. Track your expenses</h4>

                    <h6 className="my-3">
                      Expenses are the bottomless pits that swallow incomes if
                      adequate care is not taken to mitigate this. Expenses have
                      been known to swallow a whole income and then more.
                    </h6>
                    <h6 className="my-3">
                      Tracking and detailing your expenses could help you cut
                      down and eliminate unnecessary expenses or expenses that
                      you can do without. Tracking can be difficult, but a
                      simple tool to achieve this is via budgeting which you can
                      do digitally.
                    </h6>
                    <h6 className="my-3">
                      Use spreadsheets if you find creating and using a budget
                      challenging.
                    </h6>
                    <img
                      src={invest}
                      alt=""
                      className="img-fliud w-100 rounded my-5"
                    />
                    <h4 className="my-4">3.Save for Emergencies</h4>

                    <h6 className="my-3">
                      Emergencies are a thorn that can come at the most
                      unfortunate of times. They are commonly referred to as
                      unwanted expenses. However, because something is unwanted
                      doesn't mean that we cannot deal with it when it happens.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      Building an emergency fund of 3 to 6 months of your income
                      is a good way to achieve this. If you have
                      well-established savings, you can be assured that when
                      emergencies come, you can tackle it without going into
                      other savings accounts or taking out a debt.
                    </h6>
                    <h4 className="my-4">4.Save windfalls and bonuses</h4>

                    <h6 className="my-3">
                      From time to time, you will get unexpected windfalls or
                      bonuses. Why not make it a habit of saving a portion of
                      it. Doing this can accelerate your savings and investment
                      growth, but it is a habit that can take long to develop,
                      so you will need to keep at it.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      The trick is to start small but gradually increase the
                      amount you save as you become more comfortable with the
                      process.
                    </h6>
                    <div>
                    <img
                      src={savemid}
                      alt="new-article"
                      className="img-fluid "
                    />
                    </div>
                   
                   
                    <h4 className="my-4">
                      Tips to Make the Most of Your Investments
                    </h4>
                    <h6 className="my-3">
                      When it comes to investment, making the most of it
                      involves choosing the right one. There is no one size fits
                      all approach because different people have appetites for
                      different investment options.
                    </h6>
                   

                    <h6 className="my-3">
                      There are a few tips to maximize your investment
                      portfolio. Here they are:
                    </h6>
                    <h4 className="my-4"> 1. Research and analysis</h4>

                    <h6 className="my-3">
                      Before making any investment choice, conducting thorough
                      research and analysis before committing to it is
                      important. Research and analysis go a long way in helping
                      understand the risks and potential behind each investment.
                      When conducting research, consider the prospect's
                      financial health, market trends, and historical
                      performance. It also helps to stay informed about the
                      latest news and developments that may impact your
                      investments.
                    </h6>
                    <h4 className="my-4"> 2. Understand your risk tolerance</h4>

                    <h6 className="my-3">
                      There are different levels of risk, low, medium, high, and
                      very high. Understanding your risk appetite and picking
                      investments that align with your financial goals goes a
                      long way to helping you choose the right investment for
                      you.
                    </h6>
                    <h6 className="my-3">
                      There is no one size fits all approach to selecting risks.
                      People are comfortable with different levels of risk, so
                      making the pick that works with your appetite goes a long
                      way.
                    </h6>

                    <h4 className="my-4">3. Diversify your investment</h4>

                    <h6 className="my-3">
                      Although you do all the planning and analysis you can
                      muster, investments at the end of a day are some sort of
                      gamble, and you never really know how it might end up.
                    </h6>
                    <h6 className="my-3 ">
                      By spreading your investments across different asset
                      classes and industries, you can reduce the impact of any
                      single investment's performance on your overall portfolio.
                    </h6>

                    <h4 className="my-4">4. Financial Advisor</h4>

                    <h6 className="my-3">
                      Financial advisors are experts who can help you make
                      strong financial decisions, including investments.
                    </h6>
                    <h6 className="mt-3">
                      If you find it difficult or challenging to conduct
                      research and analysis, consulting with a financial advisor
                      is in your best interest to maximize your investing
                      capital.
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="blog-sidebar mt-5">
                    <div className="row">
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
                          Maximizing Your Loan: How to Effectively Utilize Your Funds
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
                    
                      <div  className="box">
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
                            Demystifying Loan Eligibility in Nigeria: A Comprehensive Guide

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
                      <div className="d-flex flex-row mt-2">
                        <img
                          src={debit}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                         
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <Link to="/blog/creditscore">
                      <h6 className="my-3"> Credit Score in Nigeria</h6>
                    </Link>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={rite}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                          <h6 className="mb-4">
                            Loan Eligibility Criteria in Nigeria
                          </h6>
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
                      <h6 className="my-3"> Student Loan Options in Nigeria</h6>
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
                      <h6 className="my-3"> Diversification of Investment</h6>
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
                          <h6 className="mb-4">
                            Best Microfinance Investment in Nigeria
                          </h6>
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

export default SaveBlog;
