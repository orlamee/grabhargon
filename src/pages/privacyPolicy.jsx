import React from "react";
import EduHeader from "../components/educationalLoan/eduHeader";
import PriPolicy from "../components/transparency/priPolicy";
import Privatebreadcrumb from "../components/transparency/privatebreadcrumb";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function PrivacyPolicy() {
  return (
    <div>
       <div>
        <Title title="   Know more about your information and data privacy " />
        <Description
          description="
          Our privacy policy helps you understand what information or data we require, how we use it to give you a better experience, and how we secure it.
 "
        />
      </div>
      <EduHeader />
      <Privatebreadcrumb />
      <PriPolicy />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
