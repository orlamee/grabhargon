import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import CreditMyths from "../components/blog/creditMyths";
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function BlogMyths() {
  return (
    <div>
             <div>
        <Title
          title=" Credit Myths in Nigeria Exposed…


  "
        />
        <Description
          description="  Credit myths in Nigeria are detrimental to individuals, businesses, a nd the economy. Find out some of these myths and how we debunk them in this article


  
 





 "
        />
      </div>
    <EduHeader />
    <CreditMyths />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  )
}

export default BlogMyths