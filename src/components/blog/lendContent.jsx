import React from "react";
import header from "../../assets/penhead.png";
import hard from "../../assets/hargon-img.png";
import branch from "../../assets/branch.png";
import kash from "../../assets/okash.png";
import fair from "../../assets/Fairmoney (1).png";
import palm from "../../assets/palmcredit.png";
import carbon from "../../assets/carbon.png";
import side from "../../assets/savebox.png";
import non from "../../assets/boximg.png";
import pic from "../../assets/boy.png";
import dig from "../../assets/digit-box.png";
import box from "../../assets/loanbox.png";
import tip from "../../assets/pills.png";
import facebook from "../../assets/Facebook logo.png";
import linkedin from "../../assets/linkedin logo.png";
import twitter from "../../assets/twitter logo.png";
import schoolimg from "../../assets/schbox.png";
import debit from "../../assets/scorebox.png";
import stockimg from "../../assets/stockbox.png";
import loanimg from "../../assets/maximize.png";
import mini from "../../assets/mirco.png";
import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";

function LendContent() {
  return (
    <section className=" blog-article  mb-3">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="my-5">
                  <img src={tip} alt="" className="img-fluid mt-4 " />{" "}
                  <h2 className="mt-3"> Top Lending Apps in Nigeria</h2>
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
                      <img src={header} alt="" className="img-fluid w-100" />
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
                      Nigeria is currently undergoing radical economic changes,
                      so naturally, there has been a spike in loan applications.
                      With the spike in loan applications has also come a spike
                      in lending platforms, especially the digital kind.
                    </h6>
                    <h6 className="my-3">
                      Today there are over 100 digital lenders under the watch
                      of the FCCPC ( Federal Competition and Consumer Protection
                      Commission), there is plenty of credit platforms to
                      patronize in the country.
                    </h6>
                    <h6 className="my-3">
                      However, out of the many, there must be some outstanding
                      platforms; we will highlight some of them in this article
                    </h6>
                    <h4 className="my-4">1. Hargon</h4>
                    <img
                      src={hard}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />

                    <h6 className="my-3">
                      Hargon is a digital credit platform leveraging the power
                      of technology to provide a variety of credit solutions to
                      businesses and individuals alike. With an emphasis on
                      providing innovative and affordable credit solutions, the
                      platform is revolutionizing the loan landscape in the
                      country.
                    </h6>
                    <h6 className="my-3 mb-5">
                      Hargon offers one of the lowest rates in the market, with
                      an average of 3-4% interest on all its credit solutions.
                      The app is more than just a credit platform. It is a
                      financial app designed to promote financial freedom among
                      Nigerians by offering saving, investments, and bill
                      payment options.
                    </h6>
                    <h4 className="my-3">Why use Hargon?</h4>
                    <h6>
                      Hargon is leveraging the best tech in the market to give
                      you the best experience possible when it comes to taking
                      out credit. Making the decision to take credit can be
                      quite stressful, taking out the loan itself should be more
                      convenient.
                    </h6>
                    <h6>With Hargon, you enjoy</h6>
                    <ul>
                      <li>
                        Variety: You have all kinds of credit available to you
                        for business or personal use.
                      </li>
                      <li>
                        Lower Interests: Want to pay loans without heavy
                        credits? Hargon is your only choice. With lower
                        interests, we ensure our customers meet their needs
                        easily and without any undue burden.
                      </li>
                      <li>
                        {" "}
                        Simplicity: Our user-friendly application helps you
                        achieve most of your objectives within the shortest time
                        possible.
                      </li>
                      <li>
                        {" "}
                        Transparency: There are no hidden charges or fees on
                        Hargon. Every process is made to be transparent,
                        ensuring we serve you the best way possible.
                      </li>
                      <li>
                        More than Credit: Hargon is far from just a credit
                        application. You can also save, invest, and pay bills.
                        It is an App that is committed to ensuring financial
                        freedom for everyone.{" "}
                      </li>
                      <li>
                        MarketPlace: Hargon has a marketplace where you can buy
                        whatever you want using credit. Our vendors are well
                        vetted and eager to serve you.
                      </li>
                    </ul>
                    <h6 className="my-3 mb-5">
                      With Hargon, you can enjoy the convenience of making all
                      your financial transactions on one platform. It is the
                      answer to so many of your financial challenges in one APP.
                    </h6>
                    <h4 className="my-4">2. Fair Money</h4>
                    <img
                      src={fair}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />

                    <h6 className="my-3">
                      Fair money is a leading fintech company geared towards
                      providing convenient and accessible financial services for
                      individuals and small businesses alike.
                    </h6>
                    <h6 className="my-3 mb-5">
                      With Fair money, you have access to instant loans and bill
                      payments. The platform leverages advanced algorithms and
                      data analytics to offer tailored credit solutions to every
                      single customer. Applying for a loan at Fair Money is
                      quick and transparent, allowing borrowers access cash when
                      needed.
                    </h6>

                    <h4 className="my-4">3.Palm Credit</h4>
                    <img
                      src={palm}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />

                    <h6 className="my-3">
                      Palm credit is one of the most popular loan applications
                      in Nigeria. It has been downloaded over 7 million times,
                      making the platform is a favourite among the general
                      public.
                    </h6>
                    <h6>
                      Users can apply for a loan in minutes using the Palm
                      Credit platform, avoiding the need for extensive paperwork
                      and complex approval processes. According to the app, you
                      can get a quick loan up to 6-digits within minutes.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      However, Palm Credit utilizes innovative algorithms to
                      assess creditworthiness and loan eligibility, resulting in
                      a smooth borrowing experience.
                    </h6>
                    <h4 className="my-4">4. Branch</h4>
                    <img
                      src={branch}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />

                    <h6 className="my-3">
                      Branch's innovative lending approach has made it a trusted
                      and preferred choice for consumers and small businesses
                      looking for fast and dependable loan solutions. Branch
                      fosters financial inclusion and allows Nigerians to
                      confidently achieve their financial objective through a
                      well-thought-out combination of technology and data-driven
                      insights.
                    </h6>
                    <h6 className="my-3 mb-5">
                      Borrowers can apply for loans, receive swift approvals,
                      and immediately deposit funds into their bank accounts
                      using Branch's user-friendly and secure mobile app. The
                      platform assesses creditworthiness using innovative
                      algorithms and alternative data sources, allowing them to
                      give bespoke loan offers tailored to each borrower's
                      demands.
                    </h6>

                    <h4 className="my-4">5.Okash</h4>
                    <img
                      src={kash}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />

                    <h6 className="my-3">
                      A 24/7 digital lending platform dedicated to providing
                      instant financial solutions to its borrowers. With a
                      strong focus on customer satisfaction and helping
                      individuals overcome financial challenges, the app
                      empowers its users to set and achieve financial goals
                      easily.
                    </h6>
                    <h6 className="my-3 mb-5">
                      By uniquely combining algorithms and a robust data
                      analytics platform, the app provides tailored made credit
                      solutions to its users.
                    </h6>

                    <h4 className="my-4"> 6.Carbon</h4>
                    <img
                      src={carbon}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />

                    <h6 className="my-3">
                      Carbon is a digital financial service platform empowering
                      individuals and businesses with access to credit, simple
                      payment solutions, high-yield investment opportunities and
                      easy-to-use tools for financial management.
                    </h6>

                    <h6 className="mt-3 mb-5">
                      With operations in Nigeria and Ghana, carbon certainly has
                      a strong grip on the African financial landscape. The loan
                      process takes about five minutes to unfold.
                    </h6>
                    <h4 className="my-5">
                      {" "}
                      Tips for selecting loan Apps in Nigeria
                    </h4>

                    <h6 className="my-3">
                      1. Research the credibility of the loan application. A
                      good way to do this is to pay attention to reviews and
                      ratings.
                    </h6>
                    <h6 className="my-3">
                      2. Compare the interest rates and fees charged by
                      different loan applications. For instance, at Hargon, you
                      enjoy favourable interest rates.
                    </h6>
                    <h6 className="my-3">
                      3. Assess the loan solutions available on the loan
                      application. Do they meet your needs, or are they limited
                      in their ability to meet your needs?
                    </h6>
                    <h6 className="my-3">
                      4. The loan applications will require a lot of your
                      personal information. Ensure they take the security of
                      that information seriously.
                    </h6>
                    <h6 className="mt-3 mb-5">
                      5. Always make you completely understand the loan terms
                      and conditions before committing to any loan application.
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
                          Maximizing Your Loan: How to Effectively Utilize Your Funds
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


                      <div className="d-flex flex-row mt-4">
                        <img
                          src={debit}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div>
                        <Link to="/blog/creditscore">
                      <h6 className="my-3"> Credit Score in Nigeria</h6>
                    </Link>

                          <span className="blog-date"> May 6, 2023</span>
                        </div>
                      </div>
                     
                     
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={schoolimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="">
                        <Link to="/blog/student-loans">
                      <h6 className="my-3"> Student Loan Options in Nigeria</h6>
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

export default LendContent;
