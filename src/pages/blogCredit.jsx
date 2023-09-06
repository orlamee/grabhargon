import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import CreditScore from '../components/blog/creditScore';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogCredit() {
  return (
    <div>
        <div>
        <Title
          title=" Credit Score in Nigeria

  "
        />
        <Description
          description="   Credit score in Nigeria comes in handy for a lot of things but what is it, how do you calculate it, and what is its importance? Find out as you read this article.





 "
        />
      </div>
    <EduHeader />
    <CreditScore/>
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogCredit;