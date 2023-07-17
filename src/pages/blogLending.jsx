import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import LendContent from '../components/blog/lendContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogLending() {
  return (
    <div>
     <EduHeader />
     <LendContent />
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  )
}

export default BlogLending;