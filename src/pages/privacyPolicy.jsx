import React from "react";
import EduHeader from "../components/educationalLoan/eduHeader";
import PriPolicy from "../components/transparency/priPolicy";
import Privatebreadcrumb from "../components/transparency/privatebreadcrumb";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";

function PrivacyPolicy() {
  return (
    <div>
      <EduHeader />
      <Privatebreadcrumb />
      <PriPolicy />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
