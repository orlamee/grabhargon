import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import CreditMyths from "../components/blog/creditMyths";
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogMyths() {
  return (
    <div>
    <EduHeader />
    <CreditMyths />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  )
}

export default BlogMyths