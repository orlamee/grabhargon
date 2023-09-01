import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import ExploreContent from '../components/blog/exploreContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
    
    function BlogExplore() {
      return (
        <div>
        <EduHeader />
        <ExploreContent />
        <Replies />
        <SemiFooter />
        <Footer />
       </div>
      );
    }
    
    export default BlogExplore;