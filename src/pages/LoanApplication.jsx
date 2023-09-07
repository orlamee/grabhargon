import React from "react";
import "../styles/loanApplication.css";
import { Link } from "react-router-dom";
import logo from "../assets/loanLogo.png";

function LoanApplication() {
  return (
    <section className="loan_application">
      <div className="container">
        <div className="logo_container">
          <img src={logo} alt="logo" className="logo_main" />
        </div>
        <div className="content">
          <div>
            <h1 className="title">Loan Application Form</h1>
            <p className="subtitle">
              Hi there, this form is sectioned into four(4) sections. Please
              fill each section correctly and submit form after filling.
            </p>
            <Link to={"/loan-application/start"} className="start_btn">
              Start Filling Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanApplication;
