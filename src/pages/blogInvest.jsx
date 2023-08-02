import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Investment from '../components/blog/investment';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";


function BlogInvest() {
  return (
    <div>
    <EduHeader />
    <Investment/>
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogInvest;