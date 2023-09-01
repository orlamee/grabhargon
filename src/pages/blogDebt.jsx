import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import DebtContent from '../components/blog/debtContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";


function BlogDebt() {
  return (
    <div>
     <EduHeader />
     <DebtContent/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogDebt;