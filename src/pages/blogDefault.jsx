import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import DefaultLoan from '../components/blog/defaultLoan';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogDefault() {
  return (
    <div>
     <EduHeader />
     <DefaultLoan/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogDefault;