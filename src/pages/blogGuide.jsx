import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import GuideContent from '../components/blog/guideContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";


function BlogGuide() {
  return (
    <div>
        <div>
        <Title
          title=" Guide for Startups







  "
        />
        <Description
          description=" Launching a startup comes with its fair share of fun and complexities.  









 "
        />
      </div>
    <EduHeader />
     <GuideContent />
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  )
}

export default BlogGuide;