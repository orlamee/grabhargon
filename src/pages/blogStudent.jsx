import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import StudentLoan from '../components/blog/studentLoan';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";


function BlogStudent() {
  return (
    <div>
       <div>
        <Title
          title=" Student Loan Options in Nigeria - A Guide


  "
        />
        <Description
          description="  Unlocking Educational Opportunities: A Comprehensive Guide to Student Loan Options in Nigeria. Find the Perfect Financing Solution to Pursue Your Academic Dreams Today!


  
 





 "
        />
      </div>
    <EduHeader />
    <StudentLoan />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogStudent;