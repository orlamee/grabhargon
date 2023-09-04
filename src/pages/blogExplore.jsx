import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import ExploreContent from '../components/blog/exploreContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

    
    function BlogExplore() {
      return (
        <div>
           <div>
        <Title title=" Exploring Various Types of Savings Challenges
  " />
        <Description
          description="  Explore some trendy saving challenges and determine which works best for you or your business. They are easy to pick up.


 "
        />
      </div>
        <EduHeader />
        <ExploreContent />
        <Replies />
        <SemiFooter />
        <Footer />
       </div>
      );
    }
    
    export default BlogExplore;