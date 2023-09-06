import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import LendContent from '../components/blog/lendContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogLending() {
  return (
    <div>
        <div>
        <Title
          title=" Top Lending Apps in Nigeria





  "
        />
        <Description
          description="  Getting a credit facility in Nigeria is becoming easier thanks to the rise in lending applications. So what are the best apps to get loans? Check out our article








 "
        />
      </div>
     <EduHeader />
     <LendContent />
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  )
}

export default BlogLending;