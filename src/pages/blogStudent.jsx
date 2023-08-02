import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import StudentLoan from '../components/blog/studentLoan';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";


function BlogStudent() {
  return (
    <div>
    <EduHeader />
    <StudentLoan />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogStudent;