import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import MaximizeContent from '../components/blog/maximizeContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogMaximize() {
  return (
    <div>
     <EduHeader />
     <MaximizeContent />
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogMaximize;