import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Investment from '../components/blog/investment';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";


function BlogInvest() {
  return (
    <div>
         <div>
        <Title
          title=" Diversification of Investment





  "
        />
        <Description
          description="  Learn all about diversifying your investments and why it is a good strategy for sustained wealth building under any economy







 "
        />
      </div>
    <EduHeader />
    <Investment/>
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogInvest;