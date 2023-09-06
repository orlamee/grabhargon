import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import MaximizeContent from '../components/blog/maximizeContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogMaximize() {
  return (
    <div>
       <div>
        <Title
          title=" Maximizing Your Loan: How to Effectively Utilize Your Funds






  "
        />
        <Description
          description="  Getting a loan is easy, but what about maximizing it? Learn strategies that will help you utilize your loans for best value.









 "
        />
      </div>
     <EduHeader />
     <MaximizeContent />
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogMaximize;