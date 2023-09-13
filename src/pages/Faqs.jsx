import React from "react";
import EduHeader from "../components/educationalLoan/eduHeader";
import FaqHero from "../components/transparency/faqHero";
import Faq from "../components/transparency/faq";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";


function Faqs() {
  return (
    <div>
        <div>
        <Title title=" Frequently asked questions on Hargon " />
        <Description
          description="
          Have questions? Explore our frequently asked questions and Hargon for quick and simplified answers to your questions.
 "
        />
      </div>
      <EduHeader />
     <FaqHero />
      <Faq />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default Faqs;
