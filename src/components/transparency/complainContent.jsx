import React from "react";
import { Accordion } from "react-bootstrap";

function ComplainContent() {
  return (
    <section className="comp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 ">
            <Accordion>
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>
                Can I pay my bills on the app?
                </Accordion.Header>
                <Accordion.Body>
                Yes, you can pay your bills on the Hargon app. Hargon offers a convenient bill payment feature that allows you to pay various bills, such as utilities, airtime, cable, and more.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"  className="mb-3" >
                <Accordion.Header>
                How do I access credit for my bills?
                </Accordion.Header>
                <Accordion.Body>
                To access credit for your bills on Hargon, you can apply for a bill payment loan. The app provides various credit options to cover your bill payments, making it easier to manage your expenses.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mb-3">
                <Accordion.Header>
                  {" "}
                  How can I automate my bill payment?
                </Accordion.Header>
                <Accordion.Body>
                Hargon offers an automated bill payment feature that allows you to set up recurring payments for your bills. You can schedule these payments, ensuring you pay your bills on time without manual intervention.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mb-3">
                <Accordion.Header>
                Can I access multiple credit options?
                </Accordion.Header>
                <Accordion.Body>
                Yes. Hargon provides multiple credit options to cater to various financial needs. You can access personal loans, business loans, credit cards, and other credit facilities based on your eligibility and creditworthiness.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mb-3">
                <Accordion.Header>
                  {" "}
                  Do I need collateral for my loan application?
                </Accordion.Header>
                <Accordion.Body>
                Not all loan options on Hargon require collateral. Some loans may be unsecured, while others, such as pawn loans, may involve collateral. You will have a chance to review the specific loan terms and collateral requirements during the application process.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="mb-3">
                <Accordion.Header>
                  {" "}
                  How long will my loan application take?
                </Accordion.Header>
                <Accordion.Body>
                The loan application processing time on Hargon may vary based on factors like the loan type, documentation, and verification process. Generally, under 48 hours, Hargon aims to provide quick and efficient loan approvals, but exact timelines will depend on individual cases.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="mb-3">
                <Accordion.Header>
                  {" "}
                  Can I make investments in Hargon?
                </Accordion.Header>
                <Accordion.Body>
                Yes, Hargon offers investment opportunities to users. You can explore various investment options like our fixed deposits, savings plans, and other investment products.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="mb-3">
                <Accordion.Header>
                  {" "}
                  Are there charges when I use Hargon to lend to a friend?
                </Accordion.Header>
                <Accordion.Body>
                There may be charges associated with lending to a friend on Hargon, such as transaction or processing fees. As is our transparency policy, you will be made aware of all charges during the lending process.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" className="mb-3">
                <Accordion.Header>
                  {" "}
                  Why do you need my KYC?
                </Accordion.Header>
                <Accordion.Body>
                Hargon requires your KYC (Know Your Customer) information to comply with regulatory requirements and verify your identity, ensuring a secure and compliant financial environment.


                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9" className="mb-3">
                <Accordion.Header>
                  {" "}
                  How secure is my account on Hargon?
                </Accordion.Header>
                <Accordion.Body>
                At Hargon, We prioritize account security and employ advanced security measures to protect user accounts from unauthorized access. Our security includes encryption, multi-factor authentication, and other security protocols.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10" className="mb-3">
                <Accordion.Header>
                  {" "}
                  How do I pawn on the Hargon app?
                </Accordion.Header>
                <Accordion.Body>
                To pawn on the Hargon app, users can explore the pawn option within the marketplace. The process involves providing collateral for a loan, and the app will guide you through the necessary steps.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11" className="mb-3">
                <Accordion.Header>
                What is KodeX?
                 
                </Accordion.Header>
                <Accordion.Body>
               
                This unique username ensures a seamless and personalized experience for users, allowing them to access their accounts, manage transactions, and engage with various features on the Hargon app. Additionally, KodeX may be used for user-specific promotions, rewards, and other personalized offers, making users feel valued and recognized within the Hargon community.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12" className="mb-3">
                <Accordion.Header>
                  {" "}
                  Can I pay for subscriptions on Hargon?
                </Accordion.Header>
                <Accordion.Body>
                Yes, you can pay for subscriptions on Hargon. The app supports bill payments, including various subscriptions, allowing you to manage recurring payments in one place.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13" className="mb-3">
                <Accordion.Header>
                  {" "}
                  Does my credit score matter on Hargon?
                </Accordion.Header>
                <Accordion.Body>
               
                Yes. Your credit score can be a factor in determining your eligibility and loan terms on Hargon. A good credit score may result in more favourable loan options and lower interest rates, but the good news is that Hargon is committed to helping you build your credit score.
                </Accordion.Body>
              </Accordion.Item>
             
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplainContent;
