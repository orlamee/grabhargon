import { Accordion } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function Faq() {
  return (
    <section className="comq">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mb-3 justify-content-center">
              <Col sm={6} className="my-3">
                <Nav
                  variant=""
                  className="d-flex text-center justify-content-between"
                >
                  <Nav.Item className="my-4">
                    <Nav.Link eventKey="first"> General Terms </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="my-4">
                    <Nav.Link eventKey="second"> Loans </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="my-4">
                    <Nav.Link eventKey="third"> Bills Payment </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="my-4">
                    <Nav.Link eventKey="fourth"> Savings </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="my-4">
                    <Nav.Link eventKey="fifth"> Loan Friends </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={10} className="my-3">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="container">
                      <div className="row  justify-content-center">
                        <div className="col-md-10">
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                How do I contact Hargon for more inquiries?{" "}
                              </Accordion.Header>
                              <Accordion.Body>
                                You can contact Hargon's customer support team
                                through the contact information provided on
                                their website or the mobile application. You can
                                also contact us through Hello@hargon.africa.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                Do I get an account officer when I take loans or
                                invest with Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes, Hargon assigns account officers or customer
                                support representatives to assist you with your
                                inquiries and transactions.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                {" "}
                                How secure is my Hargon account?
                              </Accordion.Header>
                              <Accordion.Body>
                                Hargon takes security seriously and employs
                                industry-standard security measures to protect
                                your account and personal information. This
                                includes encryption, multi-factor
                                authentication, and regular security audits.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                              <Accordion.Header>
                                How do I sign up for a Hargon account?
                              </Accordion.Header>
                              <Accordion.Body>
                                To sign up for a Hargon account, visit their
                                website or mobile app, click on the "Sign Up" or
                                "Register" button, and follow the provided
                                instructions. You'll likely need to provide
                                personal information and verify your identity.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                              <Accordion.Header>
                                How do I recover my password?
                              </Accordion.Header>
                              <Accordion.Body>
                                You can initiate password recovery by clicking
                                "Forgot Password" on our mobile application.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                              <Accordion.Header>
                                Is Hargon's customer support 24/7?
                              </Accordion.Header>
                              <Accordion.Body>
                                As much as we'd love to be with you 24/7 - We
                                have a customer service time from working hours
                                9am - 7pm.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                              <Accordion.Header>
                                Can I take a Loan and Save in Hargon at the same
                                time?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes, in many cases, you can take out loans and
                                invest or save with Hargon simultaneously,
                                depending on their specific products and
                                services.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                              <Accordion.Header>
                                Do I need my BVN to open an account on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes. Your BVN (Bank Verification Number) is
                                needed to validate your information, give us
                                more access to your profile, and make you
                                eligible to take out loans.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                              <Accordion.Header>
                                What is a Kodhex?
                              </Accordion.Header>
                              <Accordion.Body>
                                A Kodhex is a unique and secure identifier
                                created and managed by Stackivy for users of our
                                financial applications, such as Hargon. It
                                serves as your username, user ID, and wallet
                                system, simplifying your access to our
                                ecosystem. For personal users, a Kodhex is
                                generated based on unique personal information,
                                while business users, particularly major
                                stakeholders, can link their business accounts
                                to their Kodhex or create a new personal Kodhex
                                after setting up a business account. It
                                centralizes your user profile and enables
                                seamless sign-in and sign-up across all Stackivy
                                applications, providing a convenient and unified
                                experience.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                              <Accordion.Header>
                                {" "}
                                What is the minimum age requirement for a loan
                                on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                The minimum age requirement for a loan on Hargon
                                can vary by jurisdiction and the type of loan
                                offered. You must be at least 18 years old for
                                most of our loans to access financial services
                                like loans.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="container">
                      <div className="row  justify-content-center">
                        <div className="col-md-10">
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                What types of loans are available on Hargon?{" "}
                              </Accordion.Header>
                              <Accordion.Body>
                                Hargon offers two major loan solutions: Personal
                                loans and business loans. These solutions have a
                                lot of sub-products under them, e.g Personal
                                loan has Auto, Student, Quick Credit, Payday,
                                Group, Mortgage, Tourism, and Pawn. On the other
                                hand, business loans include LPO, Microlending,
                                salary advance, and Capital loans.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                What do I need to secure a loan on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                To secure a loan on Hargon, you'll generally
                                need to meet eligibility criteria, provide
                                personal and financial information, and undergo
                                a credit assessment.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                {" "}
                                Are loans on Hargon collateral-free?
                              </Accordion.Header>
                              <Accordion.Body>
                                No, but most are - Some loan products on Hargon
                                are collateral-free, while others require
                                collateral or a form of security. To find
                                unsecured products, check your eligibility
                                status on our mobile application.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                              <Accordion.Header>
                                How much is the interest on Hargon loans?
                              </Accordion.Header>
                              <Accordion.Body>
                                The interest rates on Hargon loans vary
                                depending on the type of loan. You can usually
                                find detailed interest rate information on our
                                mobile and web application.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                              <Accordion.Header>
                                How long does it take to process my loan
                                application on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Some loans may be processed quickly, while
                                others may take longer, but we have a minimum
                                48-hour period.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                              <Accordion.Header>
                                Can I take multiple loans on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes, you can take multiple loans based on
                                certain conditions - For personal loans, you can
                                take a quick credit loan and one more loan
                                simultaneously. You can take a salary advance
                                loan and one more loan for your business.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                              <Accordion.Header>
                                What happens when I cannot repay my loans?
                              </Accordion.Header>
                              <Accordion.Body>
                                If you're unable to repay your loans on time,
                                it's essential to contact Hargon's customer
                                support or your loan officer immediately. We
                                will offer solutions or assistance based on your
                                circumstances.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                              <Accordion.Header>
                                How much loan can I access without any
                                collateral?
                              </Accordion.Header>
                              <Accordion.Body>
                                The maximum loan amount you can access without
                                collateral will depend on the type of loan and
                                your creditworthiness.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                              <Accordion.Header>
                                {" "}
                                Can anyone get the Hargon credit cards?
                              </Accordion.Header>
                              <Accordion.Body>
                                Eligibility for Hargon credit cards will depend
                                on their specific card offerings and your
                                creditworthiness. Credit cards are subject to
                                credit checks and approval.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="container">
                      <div className="row  justify-content-center">
                        <div className="col-md-10">
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                {" "}
                                Can I pay all my bills on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes, you can pay most of your bills on Hargon,
                                and very soon, we will put other bills on the
                                platform. You can now pay for electricity,
                                airtime, local govt dues, and data
                                subscriptions.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                Can I automate my bill payment?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes. You can automate your bill payment on
                                Hargon. You do this by tapping the automation
                                button whenever you make a transaction.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                {" "}
                                Can I get credit for my bills on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Not at the moment, but it is a feature we will
                                launch soon on the platform.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                              <Accordion.Header>
                                Are there hidden charges for bill payment?
                              </Accordion.Header>
                              <Accordion.Body>
                                There are no hidden charges for bill payment.
                                All charges are explicitly stated for you before
                                any transaction is completed.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                              <Accordion.Header>
                                How long does it take for Hargon to process my
                                bill?
                              </Accordion.Header>
                              <Accordion.Body>
                                It is instant, but if there is an issue, it will
                                be resolved within 24 hours.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                              <Accordion.Header>
                                What happens when the bill payment fails and my
                                account has been debited?
                              </Accordion.Header>
                              <Accordion.Body>
                                Once the issue is resolved from our end, the
                                amount will be credited back to your account. So
                                try not to panic when this happens.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                              <Accordion.Header>
                                Are there bills I cannot pay on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                At the moment, there are some, but we are
                                working to ensure you can pay all your bills on
                                Hargon, giving you the convenience you need.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                              <Accordion.Header>
                                Can I save beneficiaries for my bills?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes, you can save beneficiaries for your bill
                                payment. Just tap the save beneficiaries and you
                                never have to worry about making the wrong bill
                                payments again.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="container">
                      <div className="row  justify-content-center">
                        <div className="col-md-10">
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                {" "}
                                What type of savings account can I access on
                                Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                There are three major savings plans on Hargon.
                                You have the DIB, which is an emergency savings
                                account. You have the Dream, a targeted savings
                                account helping you save towards your goals, and
                                Grit is our long-term plan, which also doubles
                                as an investment.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                Are returns on my savings fixed?
                              </Accordion.Header>
                              <Accordion.Body>
                                The returns on your savings account are not
                                fixed. It tallies with the amount in your
                                account. You can increase your returns by
                                increasing the amount in your account.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                Are returns on my savings fixed?
                              </Accordion.Header>
                              <Accordion.Body>
                                The returns on your savings account are not
                                fixed. It tallies with the amount in your
                                account. You can increase your returns by
                                increasing the amount in your account.
                              </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                              <Accordion.Header>
                                {" "}
                                Can I withdraw from my savings account?
                              </Accordion.Header>
                              <Accordion.Body>
                                You can withdraw money from your DIB and Dream
                                savings a limited number of times a month, but
                                you can only withdraw money at maturity for your
                                Grit account.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                              <Accordion.Header>
                                {" "}
                                How long does my fixed or Grit account last?
                              </Accordion.Header>
                              <Accordion.Body>
                                Your grit or fixed deposit will last as long as
                                you want. Be sure to set the duration you are
                                comfortable with while setting up the account,
                                but the minimum limit is one year.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                              <Accordion.Header>
                                {" "}
                                Are my savings insured?
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes, your savings with Hargon are insured by the
                                bank and NDIC.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <div className="container">
                      <div className="row  justify-content-center">
                        <div className="col-md-10">
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                How do I apply for a loan?
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate aut sunt, similique
                                magni hic quia reprehenderit nesciunt
                                consectetur rerum fuga laudantium totam ut
                                incidunt amet? Inventore expedita ipsum
                                quibusdam beatae!
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                What are the eligibility criteria for obtaining
                                a loan on Hargon?
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Perferendis vero placeat
                                nesciunt cupiditate, quaerat ab facere. Eos sint
                                rem incidunt quidem vitae, voluptates tempora
                                veritatis cupiditate cumque nam nostrum eum?
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                {" "}
                                Are all Stackivy products accessible to me?{" "}
                              </Accordion.Header>
                              <Accordion.Body>
                                Yes! We strive to make all our products
                                accessible to individuals and businesses alike.
                                Our goal is to provide financial solutions
                                catering to a wide range of users, from
                                individuals seeking personal financial
                                management tools to enterprises needing business
                                financing. At Stackivy, we believe in
                                inclusivity and accessibility for everyone.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}

export default Faq;
