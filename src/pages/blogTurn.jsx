import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import TurnSave from '../components/blog/turnSave';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";

function BlogTurn() {
  return (
    <div>
    <EduHeader />
    <TurnSave />
    <Replies />
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default BlogTurn;