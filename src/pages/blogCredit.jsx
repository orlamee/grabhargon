import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import CreditScore from '../components/blog/creditScore';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";


function BlogCredit() {
  return (
    <div>
       
    <EduHeader />
    <CreditScore/>
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogCredit;