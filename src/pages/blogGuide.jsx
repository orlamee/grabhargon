import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import GuideContent from '../components/blog/guideContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogGuide() {
  return (
    <div>
     <EduHeader />
     <GuideContent />
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  )
}

export default BlogGuide;