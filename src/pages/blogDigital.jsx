import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Digital from '../components/blog/digital';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";



function BlogDigital() {
  return (
    <div>
       <div>
        <Title
          title=" Digital Investment Platforms in Nigeria


  "
        />
        <Description
          description=" Discover the Top Digital investment platforms in Nigeria: Explore the Solutions for investing and unleash Your Financial Potential

  
 





 "
        />
      </div>
    <EduHeader />
    <Digital/>
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogDigital;