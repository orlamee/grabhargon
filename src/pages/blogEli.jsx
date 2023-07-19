import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import EligibilityContent from '../components/blog/eligibilityContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogEli () {
  return (
    <div>
     <EduHeader />
     <EligibilityContent/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogEli;