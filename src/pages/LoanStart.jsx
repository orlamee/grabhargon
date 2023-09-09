import React from "react";
import Heading from "../components/apply/heading";
import full from "../assets/apply-icon.svg";
import "../styles/loanStart.css";
import FormStep from "../components/FormStep";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";

function LoanStart() {
  return (
    <div className="loan-start-wrapper">
      <Heading />
      <div className="container px-4">
        <img src={full} alt="full" className="main-icon" />

        <div className="">
          <FormStep />
        </div>
      </div>
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default LoanStart;
