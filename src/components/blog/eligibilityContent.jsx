import React from "react";
import topic from "../../assets/loaneli.png";
import pic from "../../assets/boy.png";
import savemid from "../../assets/loaneli2.png";
import tip from "../../assets/blog-pills.png";
import bogimg from "../../assets/student.png";
import box from "../../assets/loanbox.png";
import side from "../../assets/savebox.png";
import savimg from "../../assets/asan.png";
import dig from "../../assets/digit-box.png";
import elig from "../../assets/loaneli3.png";
import rite from "../../assets/eligibility.png";
import byn from "../../assets/bestbus.png";
import bnyimg from "../../assets/apy.png";
import mini from "../../assets/mirco.png";
import facebook from "../../assets/Facebook logo.png";
import linkedin from "../../assets/linkedin logo.png";
import twitter from "../../assets/twitter logo.png";
import loanimg from "../../assets/maximize.png";
import { Link } from "react-router-dom";

function EligibilityContent() {
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
                    Demystifying Loan Eligibility in Nigeria: A Comprehensive
                    Guide
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
                      Loan Eligibility
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
                      Getting a loan in Nigeria can be a rollercoaster. There
                      are so many requirements, of which one of the most
                      important is your eligibility. It could be a personal or
                      business loan; being eligible plays a huge role.
                    </h6>
                    <h6 className="my-3">
                      In this article, we will demystify the loan eligibility
                      criteria and explore the factors that impact your
                      eligibility, such as credit score, income, collateral, and
                      employment history.
                    </h6>

                    <h6 className="my-3">
                      By the end of this article, we hope you have all the
                      confidence you need to apply for your next loan.
                    </h6>

                    <h4 className="my-4">Why does Loan Eligibility Matter?</h4>
                    <h6 className="my-3">
                      Lending is a business, and the whole point of the loan
                      eligibility criteria is for the lender or credit platform
                      to confirm that you have what it takes to meet the loan
                      obligations.
                    </h6>
                    <h6 className="my-3">
                      With the eligibility criteria, the lender can roughly
                      guess or estimate what amount you are good for. This helps
                      both parties.
                    </h6>
                    <h6 className="my-3">
                      1. It reduces the burden on you as the borrower 2. It
                      reduces the risk of the lending company
                    </h6>
                    <h4 className="my-4">
                      What are the Common Eligibility Criteria in Nigeria?
                    </h4>

                    <h6 className="my-3">
                      Eligibility criteria depend on the type of loan you are
                      applying for. The criteria for a personal loan will differ
                      slightly from those for a business loan.
                    </h6>
                    <h6 className="my-3">
                      Let's review some of the criteria for both.
                    </h6>
                    <h4 className="my-4">Personal Loan</h4>
                    <ul>
                      <li>
                        Age: You typically have to be 18 years or older, except
                        in special cases
                      </li>
                      <li>
                        {" "}
                        Location: You must reside in Nigeria and the state in
                        which the lender operates
                      </li>
                      <li>
                        Income: The loan you are applying for has to be
                        proportional to your annual income.
                      </li>
                      <li>
                        {" "}
                        Type of Job/ Job security: Your type of job and the
                        perceived security that comes with it, also boosts your
                        eligibility.
                      </li>
                      <li>
                        {" "}
                        Assets: This is for the purpose of collateral. So what
                        type of assets, their value, and worth plays a huge role
                      </li>
                      <li>
                        Cash inflow: Your cash flow, including savings, tells
                        the lender a lot about your access to money and if you
                        can handle the loan requirements.
                      </li>
                      <li>
                        Credit Score: This entails your creditworthiness and
                        repayment history. Typically a good repayment history
                        makes you more trustworthy to the lender.
                      </li>
                    </ul>

                    <h4 className="my-4">Business loans</h4>
                    <ul className="my-2">
                      <li>
                        Business Revenue: The lender wants to know how your
                        business is doing financially and if you are meeting
                        business targets and financial responsibilities.
                      </li>
                      <li>
                        {" "}
                        Assets: Just like the personal loan, this is for
                        collateral purposes. The lender checks the worth or
                        value and authenticity.
                      </li>
                      <li>
                        Credit score of the board: A business is a sum total of
                        the controlling members. So the personal credit scores
                        of board members will be required as well.
                      </li>
                      <li>
                        {" "}
                        Type of business: Your type of business and the
                        potential plays quite a role.
                      </li>
                      <li>
                        {" "}
                        First-timer or repeat customer; As a first-timer, your
                        loan request might be limited but as a returning
                        customer who has demonstrated credibility, the door is
                        wide open.
                      </li>
                      <li>
                        {" "}
                        Business plan: The lender wants to know what the loan is
                        for and whether your business plan is convincing.
                      </li>
                    </ul>

                    <h4 className="my-4">
                      What to do to enhance your eligibility
                    </h4>
                    <div>
                      <img
                        src={savemid}
                        alt="new-article"
                        className="img-fluid "
                      />
                    </div>

                    <h6 className="my-3">
                      Improving your loan eligibility can significantly increase
                      your chances of loan approval. But more than that, it also
                      helps you secure favourable loan terms and better credit
                      sums.
                    </h6>
                    <h6 className="my-3">
                      With Hargon’s credit builder, you can improve your loan
                      eligibility and open up opportunities for better credit
                      solutions.
                    </h6>
                    <h6 className="my-3">
                      Here are some tips to improve your eligibility and loan
                      chances
                    </h6>

                    <h4 className="my-3"> 1. Build a Strong Credit History</h4>

                    <h6 className="my-3">
                      You can achieve this mainly by paying your bills and
                      outstanding debt on time. However, it also pays to
                      maintain a low credit utilization ratio and avoid defaults
                      or delinquencies. Regularly monitor your credit report and
                      address any errors promptly.
                    </h6>
                    <h4 className="my-3">2. Increase Your Income</h4>

                    <h6 className="my-3">
                      A higher income will boost your ability to secure much
                      larger car or home loans. It will pay to consider ways to
                      increase your income. Example: freelance work, start a
                      side hustle, or invest in income-generating assets.
                    </h6>
                   

                    <h4 className="my-3">3. Reduce debt</h4>
                    <h6 className="my-3">
                      Pay off existing debts or consolidate them to lower your
                      debt-to-income ratio. Lenders always prefer borrowers with
                      lower debt levels. That's because it reduces the risk
                      associated with lending.
                    </h6>

                    <h4 className="my-3">
                      4. Consider using an Asset of value
                    </h4>

                    <h6 className="mt-3 mb-5">
                      Assets are game changers when borrowing money. Lenders
                      appreciate this because it significantly reduces their
                      risk. If you have an asset, you can present it to boost
                      your eligibility for more credit.
                    </h6>

                    <div>
                      <img
                        src={elig}
                        alt="new-article"
                        className="img-fluid "
                      />
                    </div>

                    <h4 className="mt-5 mb-3">
                      Common Mistakes to Avoid When Applying for a Loan
                    </h4>
                    
                    <h6 className="my-3">
                      There are a few mistakes you should avoid when taking out
                      a loan. Here are some of them.
                    </h6>
                    <ol>
                      <li>Inaccurate documentation</li>
                      <li> Excessive loan applications</li>
                      <li> Taking out more loans than you can pay back</li>
                      <li> Taking out loans you do not need</li>
                      <li> Not reviewing loan contracts. </li>
                      <li>
                        {" "}
                        Miscalculating the fees or charges associated with the
                        loan
                      </li>
                    </ol>

                    <h4 className="my-4"> Conclusion</h4>

                    <h6 className="my-3 ">
                      Securing a loan can be daunting, but with the knowledge of
                      loan eligibility requirements that most lenders in Nigeria
                      favour, you can confidently navigate the credit and
                      repayments.
                    </h6>
                    <h6 className="my-3 ">
                      Understanding what Nigerian lenders look out for helps you
                      stay prepared. Whether you are seeking a personal or
                      business loan, meeting the eligibility criteria for each
                      loan type increases your chances of approval.
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
                          src={bogimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <h6 className="mb-4">
                            Student loan options in Nigeria
                          </h6>
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>

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
                          src={savimg}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <h6 className="mb-4">Save As An Investment</h6>
                          <p className="">
                            <span className="blog-date"> May 6, 2023</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <img
                          src={byn}
                          alt="new-article"
                          className="img-fluid me-3"
                        />

                        <div className="box">
                          <h6 className="mb-4">
                            Best Business Loans without Collateral in Nigeria
                          </h6>
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

export default EligibilityContent;
