import React from "react";
import EduHeader from "../components/educationalLoan/eduHeader";
import EligibilityContent from "../components/blog/eligibilityContent";
import Replies from "../components/replies";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogEli() {
  return (
    <div>
      <div>
        <Title
          title=" Demystifying Loan Eligibility in Nigeria: A Comprehensive Guide

  "
        />
        <Description
          description="   Your loan eligibility can make or break your access to credit. However, in this article, you will learn why it matters, common mistakes to avoid, and what to do to enhance yours.
 





 "
        />
      </div>
      <EduHeader />
      <EligibilityContent />
      <Replies />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default BlogEli;
