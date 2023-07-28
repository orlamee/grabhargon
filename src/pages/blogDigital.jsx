import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Digital from '../components/blog/digital';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogDigital() {
  return (
    <div>
    <EduHeader />
    <Digital/>
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogDigital;